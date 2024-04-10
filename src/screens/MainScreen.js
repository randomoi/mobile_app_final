// import components from react
import React, { useEffect, useCallback, useState } from "react";

// import components from react native
import { View, ActivityIndicator, StyleSheet } from "react-native";

// import components from react-redux
import { useDispatch, useSelector } from "react-redux";

// import the ToDoList component to display the list
import { ToDoList } from "../components/ToDoList";

// import popup component from SuccessAlert
import SuccessAlert from "../components/SuccessAlert";

// import action
import { loadTask, toggleDone } from "../store/actions/todoAction";

// color constants
import { THEME } from "../theme";

// START - code was developed with the help of documentation and research materials described in "References" section.

// export function
export const MainScreen = ({ route, navigation }) => {
	// state to display a success message
	const [isModalVisible, setModalVisible] = useState(false);

	// function to show and hide the success modal
	const toggleModal = () => {
		setModalVisible(true);
		setTimeout(() => {
			setModalVisible(false);
		}, 800);
	};

	// variable for navigation
	const openTodoHandler = (todo) => {
		navigation.navigate("Detail", { todoId: todo.id });
	};

	// constant for the useDispatch function
	const dispatch = useDispatch();

	// through useEffect we track when the component is ready
	// and through dispatch we change the state
	useEffect(() => {
		// pass action
		dispatch(loadTask());
		// dispatch put in the list of dependencies
	}, [dispatch]);

	// through useSelector we get access to the state and return the data we need through the necessary keys from the state and the reducer
	const toDoTask = useSelector((state) => state.todo.toDoTask);

	// designate local variable to accept id and done state from child component 
	// states
	const [valueId, setValueId] = useState("");
	const [valueDone, setValueDone] = useState("");
	// function
	const handleChangeId = (value) => {
		// change the value
		setValueId(value[0]);
		setValueDone(value[1]);

		// do a check for emptiness so that there is no false triggering when switching screens
		if (typeof value[0] !== "undefined") {
			// modal call about success
			toggleModal();
		}
	};

	// through useEffect we track when the component is ready, and through dispatch we change the state
	useEffect(() => {
		dispatch(toggleDone(valueId, valueDone));
		// valueId put in the list of dependencies
	}, [valueId]);

	// loading state
	const loading = useSelector((state) => state.todo.loading);

	// condition if the download is still in progress, then show the download indicator
	if (loading) {
		return (
			<View style={styles.loading}>
				<ActivityIndicator color={THEME.MAIN_COLOR} />
			</View>
		);
	}

	// return the code through the ToDoList coment, pass some parameters to it
	return (
		<View>
			{/* change success message */}
			<SuccessAlert title="Marked as done!" isVisible={isModalVisible} />
			{/* task list */}
			<ToDoList
				// data
				data={toDoTask}
				// when clicking on edit
				onOpen={openTodoHandler}
				// when done is clicked
				onChangeId={handleChangeId}
			/>
		</View>
	);
};

// styles
const styles = StyleSheet.create({
	loading: {
		flex: 1,
		justifyContent: "center",
		alignContent: "center",
	},
});


// References: 
// https://morioh.com/a/83a078888902/upgrade-your-react-native-modal-with-animation-and-customization
// https://reactnavigation.org
// https://reactnavigation.org/docs/navigation-prop/#dispatch
// https://reactnavigation.org/docs/use-focus-effect/#when-to-use-focus-and-blur-events-instead
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
// https://getbootstrap.com/docs/4.0/components/modal/
// https://blog.bitsrc.io/build-a-simple-modal-component-with-react-1b174c3f5301
// https://dmitripavlutin.com/react-useeffect-infinite-loop/
// https://legacy.reactjs.org/docs/hooks-effect.html
// https://www.freecodecamp.org/news/most-common-react-useeffect-problems-and-how-to-fix-them/
// https://daveceddia.com/useeffect-hook-examples/

// END - code was developed with the help of documentation and research materials described in "References" section.