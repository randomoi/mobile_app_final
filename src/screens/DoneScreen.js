// import components from react
import React, { useEffect, useState } from "react";

// import components from react-redux
import { useDispatch, useSelector } from "react-redux";

// import components from react native
import { View } from "react-native";

// import the ToDoList component to display the list
import { ToDoList } from "../components/ToDoList";

// import popup component from SuccessAlert
import SuccessAlert from "../components/SuccessAlert";

// import action
import { toggleDone } from "../store/actions/todoAction";

// START - code was developed with the help of documentation and research materials described in "References" section.

// export function
export const DoneScreen = ({ route, navigation }) => {
	// variable for navigation
	const openTodoHandler = (todo) => {
		navigation.navigate("Detail", { todoId: todo.id });
	};

	// state to display a success message
	const [isModalVisible, setModalVisible] = useState(false);

	// function to show and hide the success modal
	const toggleModal = () => {
		setModalVisible(true);
		setTimeout(() => {
			setModalVisible(false);
		}, 800);
	};

	// dispatch is not needed since the data was loaded in the main screen
	// through useSelector we get access to the state and return the data we need through the necessary keys from the state and the reducer
	const doneTask = useSelector((state) => state.todo.doneTask);

	// constant for the useDispatch function
	const dispatch = useDispatch();

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
			// modal call on success
			toggleModal();
		}
	};

	// through useEffect we track when the component is ready, and through dispatch we change the state
	useEffect(() => {
		dispatch(toggleDone(valueId, valueDone));
		// put it in the list of dependencies
	}, [valueId]);

	// return the code through the ToDoList coment, pass some parameters to it
	return (
		<View>
			{/* change success message */}
			<SuccessAlert
				title="Marked as not completed!"
				isVisible={isModalVisible}
			/>
			<ToDoList
				// data
				data={doneTask}
				// when clicking on edit
				onOpen={openTodoHandler}
				// when done is clicked
				onChangeId={handleChangeId}
			/>
		</View>
	);
};


// References: 
// https://www.tabnine.com/code/javascript/functions/react/setModalVisible
// https://reactnative.dev/docs/modal
// https://builtin.com/software-engineering-perspectives/useselector-usedispatch-react-redux
// https://blog.bitsrc.io/build-a-simple-modal-component-with-react-1b174c3f5301
// https://blog.logrocket.com/useeffect-hook-complete-guide/

// END - code was developed with the help of documentation and research materials described in "References" section.