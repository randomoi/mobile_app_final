// import components from redux
import { createStore, combineReducers, applyMiddleware } from "redux";

// import components from redux thunk
import thunk from "redux-thunk";

// import the reducer
import { todoReducer } from "./reducers/todo";

// START - code was developed with the help of documentation and research materials described in "References" section.

// designate the root user
const rootReduce = combineReducers({
	todo: todoReducer,
});

// export the function and create a store
// and also for the work of the store with asynchronous events, we use the thunk middlewear
export default createStore(rootReduce, applyMiddleware(thunk));

// References:
// https://redux.js.org/api/combinereducers
// https://redux.js.org/usage/configuring-your-store
// https://redux.js.org/api/applymiddleware
// https://www.tabnine.com/code/javascript/functions/redux/applyMiddleware

// END - code was developed with the help of documentation and research materials described in "References" section.
