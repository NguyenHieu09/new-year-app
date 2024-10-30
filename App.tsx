import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import store from './src/redux-toolkit/store';
import SignInScreen from './src/screens/auth/SignIn';
import './src/config/firebaseConfig';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Navigation from './src/navigation/Navigation';
import { useFonts } from 'expo-font';


export default function App() {

  const [fontsLoaded] = useFonts({
    'Signika-Light': require('./assets/font/static/Signika-Light.ttf'),
    'Signika-Regular': require('./assets/font/static/Signika-Regular.ttf'),
    'Signika-Medium': require('./assets/font/static/Signika-Medium.ttf'),
    'Signika-SemiBold': require('./assets/font/static/Signika-SemiBold.ttf'),
    'Signika-Bold': require('./assets/font/static/Signika-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }
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