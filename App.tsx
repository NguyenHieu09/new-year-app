import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import store from './src/redux-toolkit/store';
import SignInScreen from './src/screens/auth/SignIn';


export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>

        <SignInScreen />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});