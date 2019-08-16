import React, { useRef } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { Content, Button, Icon, Input, Item, Spinner, Text } from 'native-base';
import { NavigationScreenComponent, NavigationScreenProps, NavigationStackScreenOptions } from 'react-navigation';
import firebase from 'react-native-firebase';

interface IProps extends NavigationScreenProps<{}> { }

const { height: deviceHeight, width: deviceWidth } = Dimensions.get('window');
const Login: NavigationScreenComponent = (props: IProps) => {
  const emailRef = useRef(null);
  const passwordRef = useRef<any>(null);
  return (
    <Content style={styles.scrollContainer} contentContainerStyle={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../resources/logo.png')} style={styles.logo} resizeMode={'contain'} />
      </View>
      <Item regular style={styles.item}>
        <Input
          placeholder="Seu E-mail"
          returnKeyType={'next'}
          ref={emailRef}
          keyboardType={'email-address'}
          onSubmitEditing={() => {
            passwordRef.current._root.focus();
          }}
        />
      </Item>
      <Item regular style={styles.item}>
        <Input
          placeholder="Password"
          style={styles.input}
          returnKeyType={'done'}
          ref={passwordRef}
        />
      </Item>
      <Button block style={styles.loginButton}>
        <Text>LOGIN</Text>
      </Button>
    </Content>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    marginLeft: 20,
    marginRight: 20,
    marginVertical: 5,
  },
  loginButton: {
    flex: 1,
    margin: 20,
    backgroundColor: '#4A4B99',
  },
  verticalAlign: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  logoContainer: {
    marginTop: deviceHeight * 0.18,
    marginBottom: deviceHeight * 0.04,
    backgroundColor: '#725B66',
  },
  logo: {
    height: 200,
    width: 200,
  },
});

Login.navigationOptions = (screenProps: NavigationScreenProps): NavigationStackScreenOptions => {
  return {
    header: null,
  };
};

export default Login;
