import { ADD_TASK, LOAD_TASK, REMOVE_TASK, TOGGLE_DONE } from "../types";

// START - code was developed with the help of documentation and research materials described in "References" section.

// set initial state
const initialState = {
	// all tasks
	allTask: [],
	// only for to do
	toDoTask: [],
	// just done
	doneTask: [],
	// for loading screen
	loading: true,
};

// export the function, the default state will be empty
export const todoReducer = (state = initialState, action) => {
	// write condition
	switch (action.type) {
		// in the case of a post load case, you need to return a new object
		case LOAD_TASK:
			// expand the state through the spread operator and replace certain fields
			return {
				...state,
				// all tasks 
				allTask: action.payload,
				// for tasks that have not yet been completed, filter only them
				toDoTask: action.payload.filter((task) => !task.done),
				// for already completed tasks, filter only them
				doneTask: action.payload.filter((taskD) => taskD.done),
				// download completed
				loading: false,
			};

		// in the case of mark of completion
		case TOGGLE_DONE:
			// need to loop through all tasks and toggle the value
			const allTask = state.allTask.map((to) => {
				// if id matches action.payload
				if (to.id === action.payload) {
					// switch the value to the opposite
					if (to.done == 1) {
						to.done = 0;
					} else {
						to.done = 1;
					}
				}
				// return tasks
				return to;
			});
			// and return filtered values
			return {
				...state,
				// all tasks
				allTask,
				// not yet completed tasks
				toDoTask: allTask.filter((task) => !task.done),
				// completed tasks
				doneTask: allTask.filter((taskD) => taskD.done),
			};

		// in the case of deleting the task
		case REMOVE_TASK:
			// and return filtered values
			return {
				...state,
				// remove the one selected by id from all tasks
				allTask: state.allTask.filter((t) => t.id !== action.payload),
				// remove the selected one by id from the tasks that have not been done
				toDoTask: state.toDoTask.filter((t) => t.id !== action.payload),
				// remove the selected one by id from the tasks that have not been done
				doneTask: state.doneTask.filter((t) => t.id !== action.payload),
			};
		// in case of task addition case
		case ADD_TASK:
			// and return filtered values
			return {
				...state,
				// update the list of tasks by adding it to the beginning
				allTask: [{ ...action.payload }, ...state.allTask],
				// do the same for tasks that have not yet been completed
				toDoTask: [{ ...action.payload }, ...state.toDoTask],
			};
		// return default state
		default:
			return state;
	}
};

// References:
// https://stackoverflow.com/questions/66871548/how-to-fix-issue-with-action-type-reducer
// https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers
// https://react.dev/learn/extracting-state-logic-into-a-reducer
// https://dev.to/am20dipi/for-myself-explaining-reducers-n1a
// https://github.com/reduxjs/redux-toolkit/issues/625
// https://stackoverflow.com/questions/69272153/remove-a-todo-from-the-list-by-index-using-filter-function-redux-react
// https://stackoverflow.com/questions/62914967/react-redux-error-in-filtering-out-item-from-store
// https://github.com/reduxjs/redux/issues/1892
// https://forum.freecodecamp.org/t/react-item-correctly-deleted-but-visually-shows-last-item-in-array-deleted/262641
// https://www.freecodecamp.org/news/how-to-use-redux-for-application-wide-state-management/
// https://devcamp.com/trails/31/campsites/277/guides/how-to-build-action-creator-reducer-fetches-item-redux-store-id
// https://stackoverflow.com/questions/64714498/react-redux-update-state-array-if-action-id-is-not-already-present
// https://www.youtube.com/watch?v=oEEXhHy_i4I

// END - code was developed with the help of documentation and research materials described in "References" section.