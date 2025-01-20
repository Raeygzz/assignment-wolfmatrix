# Wolfmatrix Home Assignment Template

This is a Wlfmatrix Application.

## Prerequisite

To build and run the project following cli is necessary

- [Node](https://nodejs.org/en)
- [Expo Go](https://expo.dev/go)
- [expo-cli](https://github.com/expo/expo-cli)

## Folder Structure

- app &gt; `Main folder`
- assets &gt; `Resources; fonts, images, svg`
- components &gt; `Reusable Components`
- constants &gt; `Constant values`
- hooks &gt; `Reusable hooks`
- services &gt; `Mock / Api call, Localization, Notification`
- types &gt; `Generic types`
- utils &gt; `Reusable function`
- validations &gt; `Form validations`

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

```
# <Add variables>
```

## Setup Android/iOS/Web app

Clone the project & go to the project directory then install dependencies using

```bash
npm install
or
yarn install
```

## Run Locally

```bash
yarn start
or
npm start
```

and after that

Scan the QR Code on terminal from `expo go` app (which you can download from play or app store) or from camera app

## Script

#### Expo, EAS

```bash
"yarn:clear": "yarn start --reset-cache",

"ci": "yarn tsc && yarn lint",

"installPackage": "npx expo install package-name",

"expoDoctor": "npx expo-doctor",

"expoDoctor:help": "npx expo-doctor --help",

"start": "npx expo start -c",

"start:devClient": "npx expo start --clear --dev-client",

"start:port:devClient": "npx expo start --port 61005 --clear --dev-client",

"prebuild": "npx expo prebuild",

"upgrade:dependencies": "npx expo install --fix",

"prebuild:android:with:emulator": "npx expo run:android",

"prebuild:ios:with:simulator": "npx expo run:ios",

"pkg:check": "npx expo install --check",

"pkg:fix": "npx expo install --fix",

"prebuild": "yarn expo prebuild",

"eas:build:configure": "eas build:configure",

"local:build": "eas build --local --profile <development|preview|production> --platform <android|ios> --non-interactive --clear-cache",

"dev:build": "eas build --profile development --platform android",

"local:android:build": "yarn expo run:android --variant debug",

"web:build": "npx expo export -p web",
```

## Dependencies

```
"@expo-google-fonts/hanken-grotesk": "^0.2.3",
"@expo/vector-icons": "^14.0.2",
"@react-native-async-storage/async-storage": "^2.1.0",
"@react-native-community/netinfo": "11.4.1",
"@react-navigation/bottom-tabs": "^7.2.0",
"@react-navigation/native": "^7.0.14",
"@reduxjs/toolkit": "^2.5.0",
"axios": "^1.7.9",
"expo": "~52.0.25",
"expo-blur": "~14.0.2",
"expo-constants": "~17.0.4",
"expo-dev-client": "~5.0.9",
"expo-font": "~13.0.3",
"expo-haptics": "~14.0.1",
"expo-linking": "~7.0.4",
"expo-router": "~4.0.16",
"expo-splash-screen": "~0.29.20",
"expo-status-bar": "~2.0.1",
"expo-symbols": "~0.2.1",
"expo-system-ui": "~4.0.7",
"expo-web-browser": "~14.0.2",
"formik": "^2.4.6",
"nativewind": "^4.1.23",
"react": "18.3.1",
"react-dom": "18.3.1",
"react-native": "0.76.6",
"react-native-gesture-handler": "~2.20.2",
"react-native-reanimated": "^3.16.7",
"react-native-safe-area-context": "^5.1.0",
"react-native-screens": "~4.4.0",
"react-native-web": "~0.19.13",
"react-native-webview": "13.12.5",
"react-redux": "^9.2.0",
"tailwindcss": "^3.4.17",
"yup": "^1.6.1"
```

## devDependencies

```
"@babel/core": "^7.25.2",
"@types/jest": "^29.5.12",
"@types/react": "~18.3.12",
"@types/react-test-renderer": "^18.3.0",
"axios-mock-adapter": "^2.1.0",
"eslint": "^8.57.0",
"eslint-config-expo": "~8.0.1",
"jest": "^29.2.1",
"jest-expo": "~52.0.3",
"prettier": "^3.4.2",
"react-test-renderer": "18.3.1",
"typescript": "^5.3.3"
```

## Tech Stack

- [react-native](https://reactnative.dev/)
- [expo](https://docs.expo.dev)
- [eas](https://expo.dev/eas)

# ToDos

1. Install the plugin(Prettier - Code formatter) on vs code.
2. While searching "Format on save" on Preference -> Settings, "Format on Save" is displayed. Click on the checkbox to apply prettier on save.

## Authors

- [@ReganTimsina](https://github.com/Raeygzz/familyTree)
