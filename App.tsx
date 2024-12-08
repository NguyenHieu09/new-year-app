// import React from 'react';
// import { Provider } from 'react-redux';
// import { StatusBar } from 'expo-status-bar';
// import { ActivityIndicator, StyleSheet, View } from 'react-native';
// import store from './src/redux-toolkit/store';
// import SignInScreen from './src/screens/auth/SignIn';
// import './src/config/firebaseConfig';
// import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// import Navigation from './src/navigation/Navigation';
// import { useFonts } from 'expo-font';


// export default function App() {

//   const [fontsLoaded] = useFonts({
//     'Signika-Light': require('./assets/font/static/Signika-Light.ttf'),
//     'Signika-Regular': require('./assets/font/static/Signika-Regular.ttf'),
//     'Signika-Medium': require('./assets/font/static/Signika-Medium.ttf'),
//     'Signika-SemiBold': require('./assets/font/static/Signika-SemiBold.ttf'),
//     'Signika-Bold': require('./assets/font/static/Signika-Bold.ttf'),
//   });

//   if (!fontsLoaded) {
//     return <ActivityIndicator size="large" />;
//   }
//   return (
//     <Provider store={store}>
//       <SafeAreaProvider>
//         <Navigation />
//       </SafeAreaProvider>
//     </Provider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import store from './src/redux-toolkit/store';
import './src/config/firebaseConfig';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/navigation/Navigation';

SplashScreen.preventAutoHideAsync(); // Ngăn màn hình chờ tự động ẩn

const loadFonts = async () => {
  await Font.loadAsync({
    'Signika-Light': require('./assets/font/static/Signika-Light.ttf'),
    'Signika-Regular': require('./assets/font/static/Signika-Regular.ttf'),
    'Signika-Medium': require('./assets/font/static/Signika-Medium.ttf'),
    'Signika-SemiBold': require('./assets/font/static/Signika-SemiBold.ttf'),
    'Signika-Bold': require('./assets/font/static/Signika-Bold.ttf'),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadAsyncFonts = async () => {
      try {
        await loadFonts();
        setFontsLoaded(true);
        await SplashScreen.hideAsync(); // Ẩn màn hình chờ sau khi phông chữ đã được tải
      } catch (error) {
        console.error('Error loading fonts:', error);
      }
    };

    loadAsyncFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
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