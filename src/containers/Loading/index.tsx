import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Spinner } from 'native-base';
import { NavigationScreenComponent, NavigationScreenProps, NavigationStackScreenOptions } from 'react-navigation';
import firebase from 'react-native-firebase';

interface IProps extends NavigationScreenProps<{}> { }

const Loading: NavigationScreenComponent = (props: IProps) => {

  React.useEffect(() => {
    const { navigate } = props.navigation;
    console.log('Entered in Loading');
    firebase.auth().onAuthStateChanged((user) => {
      // if (user) {
      //   firebase.auth().signOut();
      // }
      navigate(user ? 'Main' : 'Login');
    });
  });

  return (
    <View style={styles.container}>
      <Spinner color="#4A4B99" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

Loading.navigationOptions = (screenProps: NavigationScreenProps): NavigationStackScreenOptions => {
  return {
    header: null,
  };
};

export default Loading;
