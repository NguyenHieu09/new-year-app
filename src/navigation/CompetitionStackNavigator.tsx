import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CompetitionScreen from '../screens/competition/Competition';
import RoundFirstScreen from '../screens/roundFirst/RoundFirst';
import SupermarketScreen from '../screens/supermarket/Supermarket';
import EnvelopeScreen from '../screens/envelope/Envelope';

const CompetitionStack = createStackNavigator();

const CompetitionStackNavigator = () => {
    return (
        <CompetitionStack.Navigator screenOptions={{ headerShown: false }}>
            <CompetitionStack.Screen name="Competition" component={CompetitionScreen} />
            <CompetitionStack.Screen name="RoundFirstScreen" component={RoundFirstScreen} />
            <CompetitionStack.Screen name="SupermarketScreen" component={SupermarketScreen} />
            <CompetitionStack.Screen name="EnvelopeScreen" component={EnvelopeScreen} />
            {/* Thêm các màn hình khác vào đây */}
        </CompetitionStack.Navigator>
    );
};

export default CompetitionStackNavigator;