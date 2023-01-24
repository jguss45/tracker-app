import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context } from '../context/AuthContext';


const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(Context);


  return (
    <View style={styles.container}>
      <NavigationEvents
        onWillFocus={clearErrorMessage} //runs when about to arrive at this screen
        //onDidFocus={() => {}} //runs when you arrive to screen
        //onWillBlur={() => {}} //runs when about to leave screen
        //onDidBlur={() => {}} //runs when you leave screen
      />
      <AuthForm
        headerText = "Sign in to Your Account"
        errorMessage = {state.errorMessage}
        submitButtonText = "Sign In"
        onSubmit = {signin}

      />
      <NavLink
        text = "Don't have an account? Sign up instead"
        routeName = 'Signup'
      />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  },
});

export default SigninScreen;
