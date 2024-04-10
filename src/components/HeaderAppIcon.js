// import components from react
import React from 'react'
// import the component from react native
import { Platform } from 'react-native'
// import components from react-navigation-header-buttons
import { HeaderButton } from 'react-navigation-header-buttons'
// import icons
import { MaterialCommunityIcons } from '@expo/vector-icons'
// import colors
import { THEME } from '../theme'

// START - code was developed with the help of documentation and research materials described in "References" section.

// export component
export const HeaderAppIcon = props => (
  <HeaderButton
    // accept props
    {...props}
    testID="mock-header-icon" // added this for testing
		// size
    iconSize={24}
		// icon library
    IconComponent={MaterialCommunityIcons}
		// color: on android white on ios main color
    color={Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR}
  />
)
// References:
// https://github.com/akveo/react-native-ui-kitten/issues/1705
// https://stackoverflow.com/questions/56636280/how-to-style-react-icons
// https://github.com/oblador/react-native-vector-icons
// https://blog.logrocket.com/react-native-vector-icons-fonts-react-native-app-ui/
// https://aboutreact.com/react-native-vector-icons/
// https://www.npmjs.com/package/react-navigation-header-buttons
// https://forums.expo.dev/t/assets-not-caching-in-production-critical/56575/4
// https://docs.nativebase.io/icon

// END - code was developed with the help of documentation and research materials described in "References" section.