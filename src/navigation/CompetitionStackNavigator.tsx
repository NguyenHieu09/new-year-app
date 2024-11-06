import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CompetitionScreen from '../screens/competition/Competition';
import RoundFirstScreen from '../screens/roundFirst/RoundFirst';
import SupermarketScreen from '../screens/supermarket/Supermarket';

const CompetitionStack = createStackNavigator();

const CompetitionStackNavigator = () => {
    return (
        <CompetitionStack.Navigator screenOptions={{ headerShown: false }}>
            <CompetitionStack.Screen name="Competition" component={CompetitionScreen} />
            <CompetitionStack.Screen name="RoundFirstScreen" component={RoundFirstScreen} />
            <CompetitionStack.Screen name="SupermarketScreen" component={SupermarketScreen} />
            {/* Thêm các màn hình khác vào đây */}
        </CompetitionStack.Navigator>
    );
};

export default CompetitionStackNavigator;
