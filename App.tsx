import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import store from './src/redux-toolkit/store';
import SignInScreen from './src/screens/auth/SignIn';
import './src/config/firebaseConfig';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Navigation from './src/navigation/navigation';


export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
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