// import the database component
import * as SQLite from "expo-sqlite";

// START - code was developed with the help of documentation and research materials described in "References" section.

// database constant
const db = SQLite.openDatabase("todo.db");


// export
export class DB {
	// initialization method
	static init() {
		// wrap everything in promises
		return new Promise((resolve, reject) => {
			// get database data
			db.transaction((transaction) => {
				// work with requests
				transaction.executeSql(
					// sql query to create a database
					"CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, text TEXT, date TEXT, done INT, img TEXT)",
					[],
					// callback of successfully created database
					resolve,
					// errors
					(_, error) => reject(error)
				);
			});
		});
	}

	// get method for all tasks
	static getTasks() {
		// wrap everything in promises
		return new Promise((resolve, reject) => {
			// get database data
			db.transaction((transaction) => {
				// work with requests
				transaction.executeSql(
					// sql query to get all tasks
					"SELECT * FROM tasks",
					[],
					// callback with successfully received data
					(_, resultSet) => resolve(resultSet.rows._array),
					// errors
					(_, error) => reject(error)
				);
			});
		});
	}

	// task creation method
	static createTask({ title, text, date, done, img }) {
		// return new promise
		return new Promise((resolve, reject) => {
			// get database data
			db.transaction((transaction) => {
				// work with requests
				transaction.executeSql(
					// sql query to create a task
					`INSERT INTO tasks (title, text, date, done, img) VALUES (?, ?, ?, ?, ?)`,
					// pass the required parameters in the arguments array
					[title, text, date, 0, img],
					// callback with successfully received data. In insertId is the new id value from the database
					(_, resultSet) => resolve(resultSet.insertId),
					// errors
					(_, error) => reject(error)
				);
			});
		});
	}

	// task update method
	static toggleDone(id, done) {
		// return new promise
		return new Promise((resolve, reject) => {
			// get database data
			db.transaction((transaction) => {
				// work with requests
				transaction.executeSql(
					// sql query to update the task
					"UPDATE tasks SET done = ? WHERE id = ?",
					// passing parameters for the request
					// if true, then change to zero and vice versa
					[done ? 0 : 1, id],
					// success
					resolve,
					// error
					(_, error) => reject(error)
				);
			});
		});
	}

	// task deletion method
	static removeTask(id) {
		// return new promise
		return new Promise((resolve, reject) => {
			// get database data
			db.transaction((transaction) => {
				// work with requests
				transaction.executeSql(
					// sql query to delete a task
					"DELETE FROM tasks WHERE id = ?",
					// passing parameters for the request
					[id],
					// success
					resolve,
					// error
					(_, error) => reject(error)
				);
			});
		});
	}
}


// References:
// https://docs.expo.dev/versions/latest/sdk/sqlite/
// https://medium.com/infinitbility/react-native-sqlite-storage-422503634dd2
// https://stackoverflow.com/questions/56657354/new-promise-is-not-working-with-db-transaction
// https://gist.github.com/GendelfLugansk/db31d7742c4dbc3d6d768fa525474aff
// https://www.tabnine.com/code/javascript/functions/expo-sqlite/SQLTransaction/executeSql
// https://snyk.io/advisor/npm-package/react-native-sqlite-storage/functions/react-native-sqlite-storage.openDatabase
// https://www.tabnine.com/code/javascript/functions/expo-sqlite/WebSQLDatabase/transaction
// https://forum.ionicframework.com/t/sqlite-database-already-open-data-db/67180

// END - code was developed with the help of documentation and research materials described in "References" section.
