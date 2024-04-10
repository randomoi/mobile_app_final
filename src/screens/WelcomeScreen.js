// import components from react
import React from "react";

// import the component from async storage
import AsyncStorage from "@react-native-async-storage/async-storage";

// import components from react native
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { THEME } from "../theme";

// START - code was developed with the help of documentation and research materials described in "References" section.

// export function
export const WelcomeScreen = ({ route, navigation }) => {
	// async function to change AsyncStorage
	const setForFirstTimeLoaded = async () => {
		// change AsyncStorage via setItem method
		const result = await AsyncStorage.setItem("isFirstTimeOpen", "true");
	};

	// function on button click
	const welcomeGo = () => {
		// call the function to change AsyncStorage
		setForFirstTimeLoaded();
		// redirect to the task creation screen
		navigation.navigate("Create new task");
	};

	// return code
	return (
		<View style={styles.center}>
			{/* logo credit: https://www.freepik.com/free-vector/initial-letter-b-check-mark-logo-ideas-inspiration-logo-design-template-vector-illustration-isolated-white-background_21003339.htm#query=to%20do%20logo&position=1&from_view=search&track=ais */}
			<Image
				style={styles.img}
				source={require("../../assets/logo.png")}
			></Image>
			{/* text */}
			<Text style={styles.text}>Welcome to the Simple Task app!</Text>
			<TouchableOpacity
				activeOpacity={0.85}
				style={styles.button}
				color={THEME.MAIN_COLOR}
				onPress={welcomeGo}
			>
				<Text style={styles.buttonText}>Let's create some tasks 🤓</Text>
			</TouchableOpacity>
		</View>
	);
};

// emoji credit: https://emojipedia.org/nerd-face

// styles
const styles = StyleSheet.create({
	center: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	img: {
		height: "25%",
		width: "60%",
		resizeMode: "contain",
		marginBottom: 10,
	},
	text: {
		fontFamily: "open-bold",
		fontSize: 18,
		textAlign: "center",
		marginBottom: 10,
		color: THEME.TEXT_COLOR,
		maxWidth: "80%",
	},
	button: {
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 12,
		paddingHorizontal: 24,
		borderRadius: 4,
		elevation: 2,
		backgroundColor: THEME.MAIN_COLOR,
	},
	buttonText: {
		fontSize: 14,
		fontFamily: "open-bold",
		letterSpacing: 0.25,
		color: "white",
		textTransform:"uppercase"
	},
});


// References: 
// https://stackoverflow.com/questions/74224789/react-native-asyncstorage-for-onboarding-screen-show-only-once-on-first-launch
// https://reactnative.dev/docs/asyncstorage
// https://github.com/react-native-async-storage/async-storage
// https://react-native-async-storage.github.io/async-storage/docs/usage/
// https://reactnative.dev/docs/touchableopacity

// END - code was developed with the help of documentation and research materials described in "References" section.