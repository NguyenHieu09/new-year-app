import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/home/Home';
import SignInScreen from '../screens/auth/SignIn';
import SignUpScreen from '../screens/auth/SignUp';
import { Image, Text } from 'react-native';
import GoldenScreen from '../screens/golden/Golden';
import { getMultiFactorResolver } from 'firebase/auth';
import CompetitionScreen from '../screens/competition/Competition';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconSource;

                    if (route.name === 'Lắc lộc vàng') {
                        iconSource = require('../../assets/image/phoneIcon.png');
                    } else if (route.name === 'Lì xì vàng') {
                        iconSource = require('../../assets/image/baolixiicon.png');
                    } else if (route.name === 'Kho lộc') {
                        iconSource = require('../../assets/image/kholocicon.png');
                    }

                    return iconSource ? (
                        <Image
                            source={iconSource}
                            style={{ width: size, height: size }}
                        />
                    ) : null;
                },
                tabBarLabel: ({ focused }) => {
                    let labelColor = 'red';
                    let labelText = route.name;

                    return (
                        <Text style={{ color: labelColor, fontSize: 16, paddingBottom: 5, fontFamily: 'Signika-Bold' }}>
                            {labelText}
                        </Text>
                    );
                },
                tabBarActiveTintColor: '#C2030B',
                tabBarInactiveTintColor: '#C2030B',
                tabBarActiveBackgroundColor: '#FFD233',
                tabBarStyle: {
                    height: 60,
                },
            })}
        >
            <Tab.Screen name="Lắc lộc vàng" component={GoldenScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Lì xì vàng" component={CompetitionScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Kho lộc" component={SignUpScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
    );

};

export default BottomNavigation;