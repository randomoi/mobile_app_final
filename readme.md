# DoSimple Mobile Application

## Table of Contents
1. [Overview](#overview)
2. [Iterative Design](#iterative-design)
3. [Quick Start Guide](#quick-start-guide)
   - [QR Codes and Links](#qr-codes-and-links)
   - [Troubleshooting](#troubleshooting)
4. [Development Notes](#development-notes)
5. [Running the Application Locally](#running-the-application-locally)
6. [Camera Feature Limitations](#camera-feature-limitations)
7. [Running Tests](#running-tests)
8. [Credits](#credits)

### **Overview**
The DoSimple Mobile Application is designed to enhance productivity with a simple and intuitive interface. 

<div style="border: 2px solid black; display: inline-block; padding: 5px;">
  <a href="https://www.youtube.com/watch?v=IAjaVFTO4FU" target="_blank">
    <img src="https://img.youtube.com/vi/IAjaVFTO4FU/0.jpg" alt="Demo Video" />
  </a>
</div>


### **Iterative Design**

Please review the contents of the "important_files" folder, which includes the following essential project resources: wireframes, mid-fidelity prototypes, high-fidelity prototypes, and the user flow diagram.

### **Quick Start Guide**

To get started, ensure you have installed the Expo Go app on your mobile device. Without it, the QR codes will not function. You can download Expo Go from the App Store (iOS) or Google Play Store (Android). Once installed, you can scan the provided QR codes to use the application.

#### QR Codes and Links

- **iOS Users:** Open this [Expo iOS link](exp://u.expo.dev/update/c7d806e7-bcf9-4296-8a4b-8ef203e1ee80) on your iOS device. If you prefer, you can scan this QR code: ![iOS QR Code](./assets/qrcodes/ios_qrcode.png)

- **Android Users:** Open this [Expo Adnroid link](exp://u.expo.dev/update/c03906f3-3af3-4637-b29d-55af7bcd903f) on your Android device, or use the QR code below: ![iOS QR Code](./assets/qrcodes/android_qrcode.png)

### **Troubleshooting**
If the clickable links do not work in a PDF format, refer to the Markdown file to copy and paste the links into your mobile browser. As the author does not have access to an Android device, the Android link has not been tested. If you encounter any issues, you can run the application locally.

### **Development Notes**

The project was primarily developed on macOS, but due to constraints with the "expo-camera" package, some development took place on a Windows environment. The original development environment lacked the resources to run Android Studio, hence the need for external assistance.

### **Running the Application Locally**

To run the application in a terminal, you need XCode or Android Studio installed to use the appropriate simulator/emulator. Follow these steps to run the application:


1. navigate to the project directory

        cd [XXX]

2. install node_modules (npm --version = 9.7.2)

        npm install

3. start expo by running the following command

        npx expo start

4. select "i" to run XCode simulator or "a" to run in Android Studio emulator

### **Camera Feature Limitations**
Note that the camera feature does not work on the XCode simulator. For more information, please refer to the [Expo documentation](https://docs.expo.dev/workflow/ios-simulator/).

### **Running Tests**

To execute all tests, use the command below:

        npx jest tests

To execute individual tests, use commands below:

        npx jest tests/HeaderAppIcon.test.js

        npx jest tests/ImageSelector.test.js

        npx jest tests/SuccessAlert.test.js

### **Credits**
1. [Logo Credit](https://www.freepik.com/free-vector/initial-letter-b-check-mark-logo-ideas-inspiration-logo-design-template-vector-illustration-isolated-white-background_21003339.htm#query=to%20do%20logo&position=1&from_view=search&track=ais)
2. [Emoji Party Face Credit](https://emojipedia.org/partying-face)
3. [Emoji Nerd Face Credit](https://emojipedia.org/nerd-face)

*Author: https://github.com/randomoi/*