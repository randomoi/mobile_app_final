// import components from react
import React from "react";

// import components from react native
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { THEME } from "../theme";

// import the component from async storage
import AsyncStorage from "@react-native-async-storage/async-storage";

// START - code was developed with the help of documentation and research materials described in "References" section.

// export function
export const AboutScreen = ({ route, navigation }) => {
	return (
		<View style={styles.center}>
			{/* logo credit: https://www.freepik.com/free-vector/initial-letter-b-check-mark-logo-ideas-inspiration-logo-design-template-vector-illustration-isolated-white-background_21003339.htm#query=to%20do%20logo&position=1&from_view=search&track=ais */}
			<Image
				style={styles.img}
				source={require("../../assets/logo.png")}
			></Image>
			{/* text */}
			<Text style={styles.text}>The best application for completing tasks</Text>
			<Text style={styles.ver}>Version: 1.0.0</Text>
			{/* the button is used for testing, for example, to record a preview video - click on the button, 
				comment out the button below and run the application in the emulator and record the video so that 
				the application starts with WelcomeScreen */}
			{/* the button resets the AsyncStorage storage and redirects to the WelcomeScreen */}
			<Button
				onPress={() => {
					const TESTSET = async () => {
						const result = await AsyncStorage.removeItem("isFirstTimeOpen");
					};
					TESTSET();
					navigation.navigate("WelcomeScreen");
				}}
				title="Show welcome screen"
				color={THEME.MAIN_COLOR}
			/>
			{/* end of test button */}
		</View>
	);
};

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
	ver: {
		fontFamily: "open-regular",
		fontSize: 14,
		color: THEME.MAIN_COLOR,
		paddingBottom: 10,
	},
});


// https://github.com/react-native-async-storage/async-storage/issues/104
// https://blog.logrocket.com/guide-react-natives-asyncstorage/
// https://snyk.io/advisor/npm-package/@react-native-community/async-storage/example
// https://medium.com/featurepreneur/asyncstorage-in-react-native-with-expo-ff82a3496c9f
// https://www.tabnine.com/code/javascript/functions/builtins/String/MAIN_COLOR
// https://stackoverflow.com/questions/43281020/reference-to-themes-primary-color-instead-of-a-specific-color-in-material-ui
// https://github.com/facebook/react-native/issues/28670

// END - code was developed with the help of documentation and research materials described in "References" section.