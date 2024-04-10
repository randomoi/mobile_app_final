// import components from react
import React, { useState } from "react";

// import components from react native
import {
	View,
	StyleSheet,
	Image,
	Text,
	Alert,
	TouchableOpacity,
} from "react-native";

// import components from image picker
import * as ImagePicker from "expo-image-picker";

import { Camera } from "expo-camera";

// color constants
import { THEME } from "../theme";

// START - code was developed with the help of documentation and research materials described in "References" section.

// request permissions via an async function
async function askForPermissions() {
	// request a set of permissions
	const { status } = await Camera.requestCameraPermissionsAsync();
	// if the status is not equal to granted, then we write a notification
	if (status !== "granted") {
		Alert.alert("Error", "You have not granted permission to take photos.");
		return false;
	}
	return true;
}

// export function
export const ImageSelector = ({ onImageSelection, imgDisplay }) => {
	// create a local state for the image
	const [image, setImage] = useState(null);
	// function for adding an image
	const takePicture = async () => {
		// get permission status
		const hasPermissions = await askForPermissions();

		// if there are no rights, then we do not execute the function
		if (!hasPermissions) {
			return;
		}
		// access the ImagePicker and launch the camera and pass parameters
		const img = await ImagePicker.launchCameraAsync({
			// photo quality
			quality: 0.7,
			// photo cannot be edited
			allowsEditing: false,
			// aspect ratio of the photo
			aspect: [16, 9],
		});
		// set image to state
		setImage(img.assets[0].uri);
		// pass image to parent element
		onImageSelection(img.assets[0].uri);
	};

	// return code
	return (
		<View style={styles.wrapper}>
			{/* button */}
			<TouchableOpacity
				activeOpacity={0.85}
				style={styles.button}
				onPress={takePicture}
			>
				<Text style={styles.buttonText}>Take a picture</Text>
			</TouchableOpacity>
			{/* if there is an image, then display it */}
			{imgDisplay && <Image style={styles.image} source={{ uri: image }} />}
		</View>
	);
};

// styles
const styles = StyleSheet.create({
	wrapper: {
		marginBottom: 10,
		backgroundColor: "white",
		padding: 10,
		borderRadius: 10,
	},
	image: {
		width: "100%",
		height: 200,
		marginTop: 10,
	},
	// button
	button: {
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 12,
		paddingHorizontal: 24,
		borderRadius: 4,
		elevation: 2,
		backgroundColor: THEME.MAIN_COLOR,
	},
	// button text
	buttonText: {
		fontSize: 14,
		fontFamily: "open-bold",
		letterSpacing: 0.25,
		color: "white",
		textTransform: "uppercase",
	},
});


// References:
// https://github.com/expo/expo/issues/1707
// https://github.com/expo/expo/issues/11504
// https://dl.ebooksworld.ir/books/React.Projects.2nd.Edition.Roy.Derks.Packt.9781801070638.EBooksWorld.ir.pdf
// https://stackoverflow.com/questions/65931243/how-to-grant-camera-permission-in-react-native-expo-app-android
// https://stackoverflow.com/questions/61534660/add-image-files-into-react-state-using-usestate
// https://github.com/react-native-image-picker/react-native-image-picker
// https://docs.expo.dev/versions/latest/sdk/imagepicker/
// https://aboutreact.com/example-of-image-picker-in-react-native/
// https://enappd.com/blog/pick-images-from-camera-gallery-in-react-native-app/78/
// https://www.educative.io/answers/how-to-use-react-native-image-picker
// https://reactnative.dev/docs/touchableopacity
// https://blog.logrocket.com/create-style-custom-buttons-react-native/
// https://blog.logrocket.com/using-styled-components-with-react-native/
// https://morioh.com/a/a8d66dca154c/react-native-search-header-component-based-on-material-design-patterns
// https://morioh.com/a/45215aee7cce/scaling-images-with-resizemode-in-react-native
// https://www.programcreek.com/javascript/?api=react-native.ImageBackground

// END - code was developed with the help of documentation and research materials described in "References" section.