import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../screens/auth/SignIn';
import SignUpScreen from '../screens/auth/SignUp';
import 'react-native-gesture-handler';
import HomeScreen from '../screens/home/Home';
import BottomNavigation from './BottomNavigation';
import RoundFirstScreen from '../screens/roundFirst/RoundFirst';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" >
                <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
                <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="BottomNavigation" component={BottomNavigation} options={{ headerShown: false }} />
                {/* <Stack.Screen name="RoundFirstScreen" component={RoundFirstScreen} options={{ headerShown: false }} /> */}

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;