// import types
import { LOAD_TASK, TOGGLE_DONE, REMOVE_TASK, ADD_TASK } from "../types";

// import everything from expo-file-system
import * as FileSystem from "expo-file-system";

// database
import { DB } from "../../db";

// START - code was developed with the help of documentation and research materials described in "References" section.

// action that will load all tasks
export const loadTask = () => {
	// return the object and make it asynchronous with the dispatch parameter
	return async (dispatch) => {
		// get data from the database by making an asynchronous request
		const tasks = await DB.getTasks();

		dispatch({
			// write type
			type: LOAD_TASK,
			// data to pass
			payload: tasks,
		});
	};
};

// action for completed tasks, pass the entire task
export const toggleDone = (todoId, done) => async (dispatch) => {
	// access the database, call the toggleDone method and pass the entire task
	await DB.toggleDone(todoId, done);
	// return object
	dispatch({
		// write type
		type: TOGGLE_DONE,
		// data to pass
		payload: todoId,
	});
};

// action to delete the task
export const removeTask = (id) => async (dispatch) => {
	// access the database, call the removeTask method and pass the id
	await DB.removeTask(id);
	// return object
	dispatch({
		// write type
		type: REMOVE_TASK,
		// data to pass
		payload: id,
	});
};

// action to add a task, asynchronous function with dispatch parameter
export const addTask = (task) => async (dispatch) => {
	// check for emptiness and use the variable as a flag
	let checkImg = "";
	if (task.img != null && typeof task.img !== "undefined") {
		checkImg = task.img.trim();
	}

	// if not empty, then move
	let payload = {};
	if (checkImg) {
		// to save the image from temporary storage to permanent use methods from the expo file system
		// now we get the file name, split it and get the first element
		const fileName = task.img.split("/").pop();
		// new path to store the image
		const newPath = FileSystem.documentDirectory + fileName;

		// wrap in try catch and catch errors
		try {
			// move file asynchronously
			await FileSystem.moveAsync({
				// path where we move the file
				to: newPath,
				// path from where to move
				from: task.img,
			});
		} catch (e) {
			// write errors
			console.log("Error:", e);
		}
		// form a new task object
		payload = { ...task, img: newPath };
	} else {
		payload = task;
	}

	// get the id from the database by making a request to create a task
	const id = await DB.createTask(payload);

	// add the required id to payload
	payload.id = id;

	// pass all parameters to dispatch
	dispatch({
		type: ADD_TASK,
		payload,
	});
};


// References:
// https://redux.js.org/tutorials/fundamentals/part-6-async-logic
// https://github.com/reduxjs/redux-toolkit/discussions/3503
// https://jscrambler.com/blog/async-dispatch-chaining-with-redux-thunk
// https://forum.freecodecamp.org/t/about-usestate-being-async/501200/3
// https://stackoverflow.com/questions/75864043/redux-get-set-action-payload-id-from-another-component
// https://redux-toolkit.js.org/api/createAsyncThunk
// https://github.com/reduxjs/redux-toolkit/issues/776
// https://getstream.io/blog/series-building-a-social-network-with-flask-react-stream-part-15/

// END - code was developed with the help of documentation and research materials described in "References" section.