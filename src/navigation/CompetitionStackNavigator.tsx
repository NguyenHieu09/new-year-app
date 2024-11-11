import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CompetitionScreen from '../screens/competition/Competition';
import RoundFirstScreen from '../screens/roundFirst/RoundFirst';
import SupermarketScreen from '../screens/supermarket/Supermarket';
import EnvelopeScreen from '../screens/envelope/Envelope';
import AnswerQuestionScreen from '../screens/answerQuestion/AnswerQuestion';
import TetCompetitionScreen from '../screens/roundSecond/RoundSecond';
import RoundSecondScreen from '../screens/roundSecond/RoundSecond';
import ScrewScreen from '../screens/screw/Screw';
import StartGameScreen from '../screens/startGame/StartGame';

const CompetitionStack = createStackNavigator();

const CompetitionStackNavigator = () => {
    return (
        <CompetitionStack.Navigator screenOptions={{ headerShown: false }}>
            <CompetitionStack.Screen name="Competition" component={CompetitionScreen} />
            <CompetitionStack.Screen name="RoundFirstScreen" component={RoundFirstScreen} />
            <CompetitionStack.Screen name="SupermarketScreen" component={SupermarketScreen} />
            <CompetitionStack.Screen name="EnvelopeScreen" component={EnvelopeScreen} />
            <CompetitionStack.Screen name="AnswerQuestionScreen" component={AnswerQuestionScreen} />
            <CompetitionStack.Screen name="RoundSecondScreen" component={RoundSecondScreen} />
            <CompetitionStack.Screen name="ScrewScreen" component={ScrewScreen} />
            <CompetitionStack.Screen name="StartGameScreen" component={StartGameScreen} />

        </CompetitionStack.Navigator>
    );
};

export default CompetitionStackNavigator;
