// import components from react
import React, { useState, useRef } from "react";

// import components from react native
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	Button,
	ScrollView,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";

// import components from react-redux
import { useDispatch } from "react-redux";

// color constants
import { THEME } from "../theme";

// add action
import { addTask } from "../store/actions/todoAction";

// import components from datetimepicker
import DateTimePicker from "@react-native-community/datetimepicker";

// import the ImageSelector component
import { ImageSelector } from "../components/ImageSelector";

// START - code was developed with the help of documentation and research materials described in "References" section.

// export function
export const CreateScreen = ({ navigation }) => {
	// call useDispatch
	const dispatch = useDispatch();

	// create local text state
	const [text, setText] = useState("");

	// create local header state
	const [title, setTitle] = useState("");

	// create local date state and date picker visibility state
	const [date, setDate] = useState(new Date());
	const [show, setShow] = useState(false);

	// img Ref is used to work with the image link
	const [imgRef, setImgRef] = useState("");

	// imgDisplay to pass the link value to the child element
	// need to be able to reset the state of the child component
	const [imgDisplay, setImgDisplay] = useState("");

	// function when the date changes
	const onChangeDate = (event, selectedDate) => {
		const currentDate = selectedDate;
		// change display state
		setShow(false);
		// change date state
		setDate(currentDate);
	};

	// show the date selector
	const showDatepicker = () => {
		// change display state
		setShow(true);
	};

	// task creation function
	const saveHandler = () => {
		// new task data to pass
		const todoNew = {
			// translate into a string otherwise there will be an error in the database
			date: date.toString(),
			text: text,
			title: title,
			img: imgRef,
			done: false,
		};
		// add a new task via action passing all the necessary data
		dispatch(addTask(todoNew));

		// reset the field values after adding the task
		setText("");
		setTitle("");
		setImgRef("");
		setImgDisplay("");
		setDate(new Date());
		setShow(false);

		// after creation, transfer to the main screen
		navigation.navigate("Tasks");
	};

	// get the picture and save it to the local state
	const imageSelectionHandler = (uri) => {
		// set links
		setImgRef(uri);
		setImgDisplay(uri);
	};

	return (
		// wrapper with scroll
		<ScrollView>
			{/* use TouchableWithoutFeedback to set the event to hide the keyboard when the entire space is clicked */}
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<View style={styles.wrapper}>
					{/* title */}
					<Text style={styles.title}>Create a new task</Text>
					{/* title entry */}
					<TextInput
						style={styles.textarea}
						// placeholder
						placeholder="Enter task title"
						// value
						value={title}
						// when value changes
						onChangeText={setTitle}
						// allows you to enter multiple lines of text
						multiline
					/>
					{/* text input */}
					<TextInput
						style={styles.textarea}
						// placeholder
						placeholder="Enter task text"
						// meaning
						value={text}
						// when value changes
						onChangeText={setText}
						// allows you to enter multiple lines of text
						multiline
					/>
					{/* date input */}
					<View style={styles.dateWrap}>
						{/* date text */}
						<Text style={styles.dateText}>
							<Text style={styles.dateTitle}>Task end date:</Text>
							<Text> {date.toLocaleDateString()}</Text>
						</Text>
						{/* date picker button */}
						<TouchableOpacity
							activeOpacity={0.85}
							style={styles.button}
							onPress={showDatepicker}
						>
							<Text style={styles.buttonText}>Choose a date</Text>
						</TouchableOpacity>
						{/* if the state is true then show the window */}
						{show && (
							<DateTimePicker
								testID="dateTimePicker"
								value={date}
								mode="date"
								onChange={onChangeDate}
							/>
						)}
					</View>
					{/* camera component and callback call */}
					<ImageSelector
						onImageSelection={imageSelectionHandler}
						imgRef={imgRef}
						imgDisplay={imgDisplay}
					/>

					{/* task creation button */}
					<TouchableOpacity
						disabled={!text && !title}
						activeOpacity={0.85}
						style={styles.button}
						onPress={saveHandler}
					>
						<Text style={styles.buttonText}>Create a task</Text>
					</TouchableOpacity>
				</View>
			</TouchableWithoutFeedback>
		</ScrollView>
	);
};

// styles
const styles = StyleSheet.create({
	// wrapper
	wrapper: {
		padding: 20,
	},
	// header
	title: {
		fontSize: 20,
		textAlign: "center",
		fontFamily: "open-bold",
		marginVertical: 10,
	},
	// text input
	textarea: {
		marginBottom: 10,
		backgroundColor: "white",
		padding: 10,
		borderRadius: 10,
	},
	// date wrapper
	dateWrap: {
		marginBottom: 10,
		backgroundColor: "white",
		padding: 10,
		borderRadius: 10,
	},
	// date text wrapper
	dateText: {
		fontFamily: "open-regular",
		marginBottom: 3,
	},
	// date header wrapper
	dateTitle: {
		fontFamily: "open-bold",
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
// https://reactnative.dev/docs/touchablewithoutfeedback
// https://www.geeksforgeeks.org/how-to-dismiss-the-keyboard-in-react-native-without-clicking-the-return-button/
// https://blog.logrocket.com/keyboardawarescrollview-keyboardavoidingview-react-native/
// https://github.com/cypress-io/cypress/issues/4980
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toString
// https://www.w3schools.com/jsref/jsref_tostring_date.asp
// https://github.com/react-native-datetimepicker/datetimepicker/issues/420
// https://stackoverflow.com/questions/61162555/how-do-i-change-this-code-to-a-class-or-function-component-note-am-new-to-reac
// https://refine.dev/blog/react-date-picker/
// https://www.tabnine.com/code/javascript/functions/react/setDate
// https://morioh.com/a/838502818d0f/react-native-date-and-time-picker-component-for-ios-and-android
// https://stackoverflow.com/questions/61039643/is-there-a-way-to-show-on-the-screen-the-picked-date-in-react-native

// END - code was developed with the help of documentation and research materials described in "References" section.