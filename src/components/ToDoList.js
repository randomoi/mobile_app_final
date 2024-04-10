// import components from react
import React, { useState, useEffect } from "react";

// import components from react native
import { View, StyleSheet, FlatList, Text } from "react-native";

// import the component of one body
import { Todo } from "./todo";

// START - code was developed with the help of documentation and research materials described in "References" section.

// export where the function takes some variables
export const ToDoList = ({ data, onOpen, onChangeId }) => {
	// designate the local state
	const [value, setValue] = useState("");
	// get and again forward the id through the callback function further to the parent
	const handleChange = (val) => {
		setValue(val);
	};

	useEffect(() => {
		onChangeId(value);
		
		// valueId put in the list of dependencies
	}, [value]);

	// if there is no data, then just display the text
	if (!data.length) {
		return (
			<View style={styles.wrapper}>
				<Text style={styles.noItems}>You have completed all tasks! 🥳</Text>
			</View>
		);
	}

	// emoji credit: https://emojipedia.org/partying-face
	return (
		<View style={styles.center}>
			<FlatList
				// filtering data to display already completed
				data={data}
				// take a unique key from the data and cast it to a string
				keyExtractor={(todo) => todo.id.toString()}
				// hide the scroll bar
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
				// render each item through the Todo component and pass some parameters to it
				renderItem={({ item }) => (
					<Todo
						// data
						todos={item}
						// when clicking on edit
						onOpen={onOpen}
						// when done is clicked
						onChange={handleChange}
					/>
				)}
			/>
		</View>
	);
};

// styles
const styles = StyleSheet.create({
	center: {
		padding: 20,
	},
	wrapper: {
		justifyContent: "center",
		height: "100%",
		alignContent: "center",
	},
	noItems: {
		textAlign: "center",
		fontSize: 16,
		fontFamily: "open-regular",
	},
});


// References:
// https://b-nova.com/en/home/content/how-to-code-a-to-do-list-using-react
// https://stackoverflow.com/questions/54954091/how-to-use-callback-with-usestate-hook-in-react
// https://github.com/facebook/react/issues/14174
// https://github.com/reactjs/react.dev/issues/1689
// https://blog.logrocket.com/understanding-common-frustrations-react-hooks/
// https://dev.to/rafi993/simple-react-hook-to-handle-input-3iol
// https://react.dev/reference/react/useCallback
// https://stackoverflow.com/questions/44545148/basic-flatlist-code-throws-warning-react-native
// https://www.freecodecamp.org/news/when-to-use-keyextractor-prop-in-react-natives-flatlist/
// https://blog.logrocket.com/deep-dive-react-native-flatlist/

// END - code was developed with the help of documentation and research materials described in "References" section.