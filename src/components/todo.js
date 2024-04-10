//
// this is a component of one "to do" item
//

// import components from react
import React from "react";

// import components from react native
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// import the icon component
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

// color constants
import { THEME } from "../theme";

// START - code was developed with the help of documentation and research materials described in "References" section.

// export function
export const Todo = ({ todos, onOpen, onChange }) => {
	// forwarding the id through the callback function to the parent
	const handleChange = (event) => {
		onChange([todos.id, todos.done]);
	};

	return (
		<View style={styles.wrap}>
			<View style={styles.checkbox}>
				{/* checkbox */}
				<TouchableOpacity onPress={handleChange}>
					{/* depending on the condition, we display two different checkbox icons */}
					{/* if done is false */}
					{todos.done == 0 && (
						<MaterialCommunityIcons
							name="checkbox-blank-outline"
							size={24}
							color={THEME.DANGER_COLOR}
						/>
					)}
					{/* if done is true */}
					{!todos.done == 0 && (
						<MaterialCommunityIcons
							name="checkbox-marked"
							size={24}
							color={THEME.DANGER_COLOR}
						/>
					)}
				</TouchableOpacity>
			</View>
			{/* data */}
			<View style={styles.textWrap}>
				<Text style={styles.title}>{todos.title}</Text>
				<Text style={styles.date}>
					{/* date in normal format */}
					{new Date(todos.date).toLocaleDateString()}
				</Text>
			</View>
			{/* more button */}
			<TouchableOpacity style={styles.more} onPress={() => onOpen(todos)}>
				<Feather name="more-horizontal" size={24} color={THEME.MAIN_COLOR} />
			</TouchableOpacity>
		</View>
	);
};

// styles
const styles = StyleSheet.create({
	// card wrapper
	wrap: {
		flexDirection: "row",
		backgroundColor: "white",
		marginBottom: 10,
		padding: 10,
		borderRadius: 10,
	},
	// more
	more: {
		flexShrink: 0,
		flexBasis: "10%",
	},
	// text wrapper
	textWrap: {
		flexGrow: 0,
		flexBasis: "80%",
	},
	// title
	title: {
		fontFamily: "open-bold",
		marginBottom: 2,
	},
	// data
	date: {
		fontFamily: "open-regular",
		fontSize: 14,
	},
	// checkbox wrapper
	checkbox: {
		flexShrink: 0,
		flexBasis: "10%",
	},
});


// References:
// https://stackoverflow.com/questions/63968049/how-do-i-add-a-handlechange-to-a-todo-app-in-react
// https://codereview.stackexchange.com/questions/253046/simple-to-do-list-application-in-react
// https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering
// https://b-nova.com/en/home/content/how-to-code-a-to-do-list-using-react
// https://stackoverflow.com/questions/64778574/whats-the-correct-way-to-display-a-check-in-a-checkbox-if-an-item-is-in-a-state
// https://medium.com/@nailton.me91/create-your-own-checkbox-to-react-native-c6a0bdc4a9dc
// https://blog.logrocket.com/building-custom-checkbox-react/

// END - code was developed with the help of documentation and research materials described in "References" section.