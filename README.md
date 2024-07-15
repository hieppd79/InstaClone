# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup)

- jdk : 17
- node : v18.18.2

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
npx react-native start --reset-cache
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# make sure you've already start emulator or connected to real device
npx react-native run-android
```

### For iOS

```bash
# make sure you've already start emulator or connected to real device
npx react-native run-ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Debugger?

Flipper is the worst debugger, heavy, cumbersome, and difficult to maintain, so I recommend using [Reactotron](https://github.com/infinitered/reactotron), everything is already set up, you just need to download and use it.

## Congratulations! :tada:

You've successfully. :partying_face:
