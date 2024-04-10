// import components from react
import React, { useState, useEffect } from "react";

// import components from react native
import { Platform } from "react-native";

// import components from redux
import { Provider } from "react-redux";

// import store for redux
import store from "./src/store/index";

// import the AppLoading components from expo so that we can track whether the application is ready for work or not
import AppLoading from "expo-app-loading";

// import the splash screen component since expo-app-loading depends on it
import * as SplashScreen from "expo-splash-screen";

// import the component from async storage
import AsyncStorage from "@react-native-async-storage/async-storage";

// import the component of everything that is needed for the application to work, for example, custom fonts
import { bootstrap } from "./src/bootstrap";

// import components for navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

// header icon component
import { HeaderButtons, Item } from "react-navigation-header-buttons";

// own component for icons
import { HeaderAppIcon } from "./src/components/HeaderAppIcon";

// component for tabs at the bottom of the screen
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// icons for tabs
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

// import screens
import { MainScreen } from "./src/screens/MainScreen";
import { TodoScreen } from "./src/screens/TodoScreen";
import { DoneScreen } from "./src/screens/DoneScreen";
import { AboutScreen } from "./src/screens/AboutScreen";
import { CreateScreen } from "./src/screens/CreateScreen";
import { WelcomeScreen } from "./src/screens/WelcomeScreen";

// import color constants
import { THEME } from "./src/theme";

// START - code was developed with the help of documentation and research materials described in "References" section.

// designate a constant for navigation stacks
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// trying to overcome the error in the console
SplashScreen.preventAutoHideAsync();

// export main function
export default function App() {
	// create a state to track the readiness of the application
	const [isReady, setIsReady] = useState(false);

	// state for the first run
	const [isFirstTimeLoad, setIsFirstTimeLoad] = useState(false);

	// use persistent AsyncStorage to store first load state
	const checkForFirstTimeLoaded = async () => {
		// call AsyncStorage using the getItem method to retrieve the key
		const result = await AsyncStorage.getItem("isFirstTimeOpen");
		// if the field is empty, then this is the first launch and change the isFirstTimeLoad state to true
		if (result == null) setIsFirstTimeLoad(true);
	};

	// wait for the component to be ready and call the AsyncStorage state function
	useEffect(() => {
		checkForFirstTimeLoaded();
	}, []);

	// trying to overcome the error in the console
	SplashScreen.hideAsync();

	// condition that is false, then return the AppLoading component
	if (!isReady) {
		return (
			<AppLoading
				// call the component to load everything we need
				startAsync={bootstrap}
				// upon completion, change the state
				onFinish={() => {
					setIsReady(true);
					// trying to overcome the error in the console
					SplashScreen.hideAsync();
				}}
				// if an error, then write to the console
				onError={(err) => console.log(err)}
				// disable splash screen
				autoHideSplash={true}
			/>
		);
	}

	// trying to overcome the error in the console
	SplashScreen.hideAsync();

	// common styles for Android and iOS
	const screenOptions = () => {
		return {
			headerStyle: {
				// the background color on android is the main color, and on ios it is white
				backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
			},
			// the color of the button on android is white, and on ios the main color
			headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
			headerTitleStyle: {
				fontWeight: "bold",
			},
		};
	};

	// function for tabs on the main screen
	function HomeTabs() {
		return (
			// the tabs themselves
			<Tab.Navigator
				screenOptions={{
					// disables the tab navigation title
					headerShown: false,
					// active tab color
					tabBarActiveTintColor: THEME.MAIN_COLOR,
					// color of inactive tab
					tabBarInactiveTintColor: "gray",
				}}
			>
				{/* one tab */}
				<Tab.Screen
					// name
					name="MainScreen"
					// component
					component={MainScreen}
					// options
					options={{
						// tab text
						tabBarLabel: "To do task",
						// tab icon
						tabBarIcon: ({ color, size }) => (
							<Ionicons name="list" color={color} size={size} />
						),
					}}
				/>
				{/* one tab */}
				<Tab.Screen
					// name
					name="DoneScreen"
					// component
					component={DoneScreen}
					// options
					options={{
						// tab text
						tabBarLabel: "Done task",
						// tab icon
						tabBarIcon: ({ color, size }) => (
							<Ionicons name="checkbox" color={color} size={25} />
						),
					}}
				/>
			</Tab.Navigator>
		);
	}

	// stack function for the about page
	const AboutStackNavigator = ({ navigation }) => {
		return (
			<Stack.Navigator
				// set general styles for the header on all screens
				screenOptions={screenOptions}
			>
				<Stack.Screen
					options={{
						// icon on the left
						headerLeft: () => (
							<HeaderButtons HeaderButtonComponent={HeaderAppIcon}>
								{/* the icon itself, which we add */}
								<Item
									// title
									title="Switch"
									// name
									iconName="menu"
									// click action call the menu on the left
									onPress={() => navigation.toggleDrawer()}
								/>
							</HeaderButtons>
						),
					}}
					name="About"
					component={AboutScreen}
				/>
			</Stack.Navigator>
		);
	};

	// stack function for the about page
	const CreateTaskStackNavigator = ({ navigation }) => {
		return (
			<Stack.Navigator
				// set general styles for the header on all screens
				screenOptions={screenOptions}
			>
				<Stack.Screen
					options={{
						// icon on the left
						headerLeft: () => (
							<HeaderButtons HeaderButtonComponent={HeaderAppIcon}>
								{/* the icon itself, which we add */}
								<Item
									// title
									title="Switch"
									// name
									iconName="menu"
									// click action call the menu on the left
									onPress={() => navigation.toggleDrawer()}
								/>
							</HeaderButtons>
						),
					}}
					name="Create task"
					component={CreateScreen}
				/>
			</Stack.Navigator>
		);
	};
	// variable to determine which screen to show by default
	let screanToShow = "";
	// if isFirstTimeLoad is true, then Welcome Screen
	if (isFirstTimeLoad) {
		screanToShow = "WelcomeScreen";
	} else {
		// if a different value, then just the main screen
		screanToShow = "Tasks";
	}
	// function for the menu stack of the main screen
	const DrawerList = ({ route, navigation }) => {
		return (
			<Stack.Navigator
				// parameter is responsible for which screen will be displayed first
				// pass the variable screenToShow, in which the desired screen was determined from the conditions
				initialRouteName={screanToShow}
				// set general styles for the header on all screens
				screenOptions={screenOptions}
			>
				{/* set the settings for individual screens */}
				<Stack.Screen
					// name
					name="Tasks"
					// render component
					component={HomeTabs}
					// options
					options={{
						// icon on the right
						headerRight: () => (
							<HeaderButtons HeaderButtonComponent={HeaderAppIcon}>
								{/* the icon itself, which we add */}
								<Item
									// title
									title="Add task"
									// name
									iconName="plus-circle"
									// click action open task creation screen
									onPress={() => navigation.navigate("Create new task")}
								/>
							</HeaderButtons>
						),
						// icon on the left
						headerLeft: () => (
							<HeaderButtons HeaderButtonComponent={HeaderAppIcon}>
								{/* the icon itself, which we add */}
								<Item
									// title
									title="Switch"
									// name
									iconName="menu"
									// click action call the menu on the left
									onPress={() => navigation.toggleDrawer()}
								/>
							</HeaderButtons>
						),
					}}
				/>
				<Stack.Screen
					// name
					name="Detail"
					// render component
					component={TodoScreen}
				/>
				<Stack.Screen
					name="WelcomeScreen"
					component={WelcomeScreen}
					options={{ title: "Welcome", headerShown: false }}
				/>
			</Stack.Navigator>
		);
	};

	// return navigation
	return (
		// wrap the entire application in the redux provider
		// and pass the store parameter
		<Provider store={store}>
			{/* we try to overcome the error in the console and write SplashScreen  */}
			<NavigationContainer onReady={() => SplashScreen.hideAsync()}>
				<Drawer.Navigator>
					{/* main screen */}
					<Drawer.Screen
						// hide the header from the component since the menu is custom
						options={{
							// hide the header
							headerShown: false,
							// active text color
							drawerActiveTintColor: THEME.MAIN_COLOR,
							// draw the icon
							drawerIcon: ({ focused, size }) => (
								<Ionicons
									// icon name
									name="md-home"
									// size
									size={21}
									// color of active and inactive icons
									color={focused ? THEME.MAIN_COLOR : "#ccc"}
								/>
							),

							drawerLabelStyle: {
								fontFamily: "open-bold",
							},
						}}
						name="Tasks list"
						component={DrawerList}
					/>
					{/* about us screen */}
					<Drawer.Screen
						options={{
							// hide the header
							headerShown: false,
							// active text color
							drawerActiveTintColor: THEME.MAIN_COLOR,
							// draw the icon
							drawerIcon: ({ focused, size }) => (
								<MaterialCommunityIcons
									// icon name
									name="information"
									// size
									size={21}
									// color of active and inactive icons
									color={focused ? THEME.MAIN_COLOR : "#ccc"}
								/>
							),

							drawerLabelStyle: {
								fontFamily: "open-bold",
							},
						}}
						name="About app"
						component={AboutStackNavigator}
					/>

					{/* "create task" screen */}
					<Drawer.Screen
						options={{
							// hide the header
							headerShown: false,
							// active text color
							drawerActiveTintColor: THEME.MAIN_COLOR,
							// draw the icon
							drawerIcon: ({ focused, size }) => (
								<MaterialCommunityIcons
									// icon name
									name="plus-circle"
									// size
									size={21}
									// color of active and inactive icons
									color={focused ? THEME.MAIN_COLOR : "#ccc"}
								/>
							),
							drawerLabelStyle: {
								fontFamily: "open-bold",
							},
						}}
						name="Create new task"
						component={CreateTaskStackNavigator}
					/>
				</Drawer.Navigator>
			</NavigationContainer>
		</Provider>
	);
}


// References:
// https://www.codementor.io/@ekunolaeasybuoy/combining-stack-tab-drawer-navigations-in-react-native-with-react-navigation-5-17o7vwtdnn
// https://reactnavigation.org/docs/native-stack-navigator/
// https://reactnavigation.org/docs/bottom-tab-navigator/
// https://reactnavigation.org/docs/4.x/drawer-navigator/
// https://docs.expo.dev/versions/latest/sdk/splash-screen/
// https://medium.com/@ismailharmanda/effortless-data-persistence-in-react-native-managing-local-storage-with-async-storage-8d43d7efbc9a
// https://github.com/expo/expo/issues/7718
// https://www.tabnine.com/code/javascript/functions/expo-splash-screen/hideAsync
// https://reactnavigation.org/docs/screen-options/
// https://reactnavigation.org/docs/headers/
// https://medium.com/@jacrplante/react-native-screens-multiple-stacks-da112a94ad24
// https://reactnavigation.org/docs/stack-navigator/
// https://github.com/react-navigation/react-navigation/issues/5061

// END - code was developed with the help of documentation and research materials described in "References" section.

