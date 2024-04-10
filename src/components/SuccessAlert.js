// import components from react
import React from "react";

// import components from react native
import { Modal, StyleSheet, Text, View } from "react-native";

// import the icon component
import { Ionicons } from "@expo/vector-icons";

// color constants
import { THEME } from "../theme";

// START - code was developed with the help of documentation and research materials described in "References" section.

// handles notification/alerts for when user checks task as completed and unfinished
// it uses fade animation
const SuccessAlert = ({ title, isVisible }) => {
	return (
		<View style={styles.modalContainer}>
			<Modal animationType="fade" transparent={true} visible={isVisible}>
				<View style={styles.modalContainer}>
					<View style={styles.modalView}>
						<Ionicons name="checkmark-circle" size={24} color="white" />
						<Text style={styles.textStyle}>{title}</Text>
					</View>
				</View>
			</Modal>
		</View>
	);
};
export default SuccessAlert;

// styles
const styles = StyleSheet.create({
	// container
	modalContainer: {
		alignItems: "center",
		position: "absolute",
		height: "100%",
		width: "100%",
	},
	// wrapper
	modalView: {
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		top: 100,
		width: "85%",
		height: 50,
		backgroundColor: THEME.MAIN_COLOR,
		borderRadius: 8,
		paddingLeft: 20,
		opacity: 0.9,
	},
	// text
	textStyle: {
		fontFamily: "open-bold",
		color: "white",
		textAlign: "center",
		fontSize: 18,
		paddingLeft: 10,
	},
});

// References:
// https://github.com/react-native-modal/react-native-modal/issues/576
// https://stackoverflow.com/questions/65779215/unable-to-change-state-of-modal-reactnative
// https://github.com/teambit/bit/issues/7367
// https://reactnative.dev/docs/modal
// https://dev-georgegarcia.medium.com/creating-a-modal-to-display-an-alert-in-another-screen-with-react-native-9cc28324cfa5
// https://anothertechs.com/programming/react-native/react-native-modal/

// END - code was developed with the help of documentation and research materials described in "References" section.