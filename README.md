# PG Application Frontend

## Overview

Welcome to the PG Application Frontend, a React Native application built using Expo. This application aims to streamline the work processes for PGs by digitizing their tasks and workflows.

## Installation Instructions

To install and run the application, please ensure Node.js is installed on your system. You can download Node.js from [here](https://nodejs.org/en/). Follow the steps below to set up the application:

1. **Clone the Repository**
    ```shell
    git clone https://github.com/yasharya2901/app-frontend-pg-react-native.git
    ```
2. **Navigate to the Project Directory**
    ```shell
    cd app-frontend-pg-react-native
    ```
3. **Install Dependencies**
    ```shell
    npm install
    ```
4. **Start the Application**
    ```shell
    npx expo start -c
    ```

    If the default port is in use, you can specify an alternative port:
    ```shell
    npx expo start -c --port 19000
    ```

    For viewing the application on a physical device while on a public network, use the tunnel option:
    ```shell
    npx expo start -c --tunnel
    ```

    This will generate a QR code, which can be scanned using the [Expo Go](https://expo.dev/go) app on your mobile device.

5. **Run the Application**
    Follow the options displayed in the terminal to run the application on an emulator or a physical device.

## Contributing

We welcome contributions to the PG Application Frontend. To contribute, please fork the repository and submit a pull request. Pull requests will be reviewed by the maintainers and merged if deemed appropriate.

## Tech Stack

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/go)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [NativeWind](https://www.nativewind.dev/)

For further assistance or inquiries, please feel free to reach out. Thank you for contributing to the PG Application Frontend!

# Additional NativeWind/TailWind Setup

To ensure seamless integration and functionality of NativeWind/TailWind classes in your React Native components, follow the steps below to update your VSCode configuration. This setup is essential for ensuring that the props in your components styled with NativeWind/TailWind work as expected.

## Step-by-Step Guide

1. **Open VSCode Settings**:
   - Press `Ctrl + ,` to open the settings in VSCode.

2. **Search for Tailwind Settings**:
   - In the settings search bar, type `tailwind`.

3. **Edit Tailwind CSS Experimental Config File**:
   - Locate the setting `Tailwind CSS › Experimental: Config File`.
   - Click on `Edit in settings.json`.

4. **Update `settings.json`**:
   - Add the following JSON object to your `settings.json` file:
     ```json
     "tailwindCSS.classAttributes": [
       "class",
       "className",
       "ngClass",
       "class:list",
       ".*Styles*"
     ]
     ```

5. **Naming Convention for Props**:
   - Ensure that all props of custom components requiring NativeWind/TailWind classes end with `Styles`. For example, use `buttonStyles`, `textStyles`, etc.

By following these steps, you will ensure that NativeWind/TailWind classes work correctly with the props in your React Native components. This setup will improve your development experience in VSCode and help maintain consistency in your project.
