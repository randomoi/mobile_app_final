// import everything as a variable from expo font
import * as Font from "expo-font";

// connect database
import { DB } from "./db";

// START - code was developed with the help of documentation and research materials described in "References" section.

// export the function
export async function bootstrap() {
	// wrapped in try catch to catch errors
	try {
		// wait for elements to load
		await Font.loadAsync({
			"open-bold": require("../assets/fonts/OpenSans-Bold.ttf"),
			"open-regular": require("../assets/fonts/OpenSans-Regular.ttf"),
		});
		// wait for the database to load
		await DB.init();
		// notification that everything is fine
		console.log("Database started...");
	} catch (e) {
		// notification for errors
		console.log("Error: ", e);
	}
}

// References:
// https://docs.expo.dev/versions/latest/sdk/sqlite/
// https://medium.com/infinitbility/react-native-sqlite-storage-422503634dd2
// https://github.com/expo/expo/issues/4217
// https://stackoverflow.com/questions/67250982/fonts-loading-but-i-need-to-use-font-loadasync
// https://www.tabnine.com/code/javascript/functions/expo-font/loadAsync
// https://snyk.io/advisor/npm-package/expo-font/functions/expo-font.loadAsync
// https://dev.to/somedood/the-proper-way-to-write-async-constructors-in-javascript-1o8c
// https://blog.logrocket.com/using-sqlite-with-react-native/
// https://aboutreact.com/example-of-sqlite-database-in-react-native/

// END - code was developed with the help of documentation and research materials described in "References" section.
