// import components from react
import React, { useEffect, useCallback } from "react";

// import components from react native
import {
	View,
	Text,
	StyleSheet,
	Image,
	Button,
	ScrollView,
	Alert,
	TouchableOpacity,
} from "react-native";

// import the icon component
import { MaterialCommunityIcons } from "@expo/vector-icons";

// import components from react-redux
import { useDispatch, useSelector } from "react-redux";

// color constants
import { THEME } from "../theme";

// add action
import { toggleDone, removeTask } from "../store/actions/todoAction";

// START - code was developed with the help of documentation and research materials described in "References" section.

// export function
export const TodoScreen = ({ route, navigation }) => {
	// constant for the useDispatch function
	const dispatch = useDispatch();

	// take id from parameters
	const todoId = route.params.todoId;

	// use useSelector to get the task object and find the right one by id
	const todo = useSelector((state) =>
		state.todo.allTask.find((p) => p.id === todoId)
	);

	// wrap in useCallback to avoid looping
	// write dependencies for the function
	const toogleHandler = useCallback(() => {
		// pass action with id
		dispatch(toggleDone(todoId, todo.done));
	}, [dispatch, todoId, todo]);

	// delete function
	const removeHendler = () => {
		// call a request to confirm the deletion
		Alert.alert(
			"Delete this task",
			"Are you sure you want to delete the task?",
			[
				{
					text: "Сancel",
					style: "cancel",
				},
				{
					text: "Delete",
					style: "destructive",
					onPress: () => {
						// when clicked, call dispatch with action removeTask to remove
						dispatch(removeTask(todoId));

						// make a redirect to the main screen after deletion
						navigation.navigate("MainScreen");
					},
				},
			],
			{ cancelable: false }
		);
	};

	// write a check if the page does not exist after deletion, then return a blank screen
	// it is necessary that there is no error
	if (!todo) {
		return null;
	}

	// through the state we get access to the required field and determine if there is at least one object according to the desired condition
	useSelector((state) => state.todo.doneTask.some((t) => t.id === todoId));

	return (
		<ScrollView style={styles.allWrap}>
			<View style={styles.buttonWrap}>
				<TouchableOpacity onPress={toogleHandler} style={styles.btnDone}>
					{/* depending on the condition, we display two different checkbox icons */}
					{/* if done is false */}
					{todo.done == 0 && (
						<MaterialCommunityIcons
							name="checkbox-blank-outline"
							size={24}
							color={THEME.DANGER_COLOR}
						/>
					)}
					{/* if done is true */}
					{!todo.done == 0 && (
						<MaterialCommunityIcons
							name="checkbox-marked"
							size={24}
							color={THEME.DANGER_COLOR}
						/>
					)}
				</TouchableOpacity>
				{/* delete button */}
				<TouchableOpacity style={styles.edit} onPress={removeHendler}>
					{/* icon */}
					<MaterialCommunityIcons
						name="delete"
						size={24}
						color={THEME.MAIN_COLOR}
					/>
				</TouchableOpacity>
			</View>
			<View>
				<Text style={styles.title}>{todo.title}</Text>
			</View>
			<View>
				{/* data */}
				<Text style={styles.date}>
					<Text style={styles.dateTitle}>Date: </Text>
					{new Date(todo.date).toLocaleDateString()}
				</Text>
			</View>
			<View style={styles.text}>
				{/* text */}
				<Text style={styles.textTitle}>Note: </Text>
				<Text>{todo.text}</Text>
			</View>
			<View style={styles.imgWrap}>
				{/* camera image */}
				{todo.img && <Image source={{ uri: todo.img }} style={styles.img} />}
			</View>
		</ScrollView>
	);
};

// styles
const styles = StyleSheet.create({
	// generic wrapper
	allWrap: {
		padding: 20,
	},
	// button wrapper
	buttonWrap: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 5,
		alignItems: "center",
	},
	// button wrapper done
	btnDone: {
		backgroundColor: "white",
		padding: 10,
		borderRadius: 10,
	},
	//  title
	title: {
		fontFamily: "open-bold",
		marginBottom: 5,
		fontSize: 16,
		backgroundColor: "white",
		padding: 20,
		borderRadius: 10,
	},
	//  data
	date: {
		fontFamily: "open-regular",
		marginBottom: 5,
		backgroundColor: "white",
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 10,
	},
	// date title
	dateTitle: {
		fontFamily: "open-bold",
	},
	// text title
	textTitle: {
		fontFamily: "open-bold",
	},
	// the text itself
	text: {
		marginBottom: 15,
		backgroundColor: "white",
		padding: 20,
		borderRadius: 10,
	},
	// image wrapper
	imgWrap: {
		marginBottom: 50,
	},
	// the picture itself
	img: {
		borderRadius: 10,
		objectFit: "contain",
		width: "100%",
		height: 300,
		resizeMode: "contain",
	},
});


// References: 
// https://stackoverflow.com/questions/75324193/react-router-6-how-to-strongly-type-the-params-option-in-route-loader
// https://medium.com/@smrwsky/strongly-typed-adapter-for-react-applications-router-e6c91fa8d487
// https://forum.freecodecamp.org/t/how-to-get-the-id-parameter-of-a-url-when-the-props-match-params-id-returns-undefined-but-the-id-is-visible-on-the-url/283745
// https://redux-toolkit.js.org/tutorials/quick-start
// https://builtin.com/software-engineering-perspectives/useselector-usedispatch-react-redux
// https://stackoverflow.com/questions/59226430/react-hooks-dispatch-action-with-use-dispatch
// https://react.dev/reference/react/useCallback
// https://www.w3schools.com/react/react_usecallback.asp
// https://stackoverflow.com/questions/57472105/react-redux-useselector-typescript-type-for-state
// http://www.srikanthtechnologies.com/blog/react/todos_using_redux.aspx
// https://snyk.io/advisor/npm-package/react-tracked/functions/react-tracked.createContainer
// https://www.w3schools.com/jsref/jsref_tolocaledatestring.asp

// END - code was developed with the help of documentation and research materials described in "References" section.