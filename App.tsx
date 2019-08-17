import React from 'react';
import { Container, StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import TaskScreen from './src/containers/TaskScreen';
import Home from './src/containers/Home';
import firebase from 'react-native-firebase';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import Loading from './src/containers/Loading';
import Login from './src/containers/Login';
import { StatusBar } from 'react-native';

/**
 * @todo create keystore
 * @todo integrate with CodePush
 * @todo integrate with Fastlane
 * @todo complete Readme
 * @todo integrate with HockeyApp
 * @todo login screen
 * @todo login integration with Firebase
 */
const MainNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    },
  },
  TaskScreen: {
    screen: TaskScreen,
    navigationOptions: {
      header: null,
    },
  },
});

const LoginNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
});

const AppNavigator = createSwitchNavigator(
  {
    Loading: {
      screen: Loading,
      navigationOptions: {
        header: null,
      },
    },
    Login: LoginNavigator,
    Main: MainNavigator,
  },
  {
    initialRouteName: 'Loading',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  componentDidMount = async () => {
    const fcmToken = await firebase.messaging().getToken();
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      // user has permissions
    } else {
      // user doesn't have permission
    }
    try {
      await firebase.messaging().requestPermission();
      // User has authorised
    } catch (error) {
      // User has rejected permissions
    }
    if (fcmToken) {
      // user has a device token
      // this.onTokenRefreshListener = firebase.messaging().onTokenRefresh(fcmToken => {
      //   // Process your token as required
      // });
    } else {
      // user doesn't have a device token yet
    }
  };

  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Container>
          <StatusBar barStyle={'dark-content'} backgroundColor={'#FFFFFF'} />
          <AppContainer />
        </Container>
      </StyleProvider>
    );
  }
}
