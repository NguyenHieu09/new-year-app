import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Image, Dimensions } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@/src/type/RootStackParamList';
import { SafeAreaView } from 'react-native-safe-area-context';
import LuckyDraw from '@/src/components/liXiVang/LuckyDraw';
import CustomText from '@/src/components/ui/CustomText';
import Header from '@/src/components/liXiVang/Header';
import LotteryDraw from '@/src/components/lottery/LotteryDraw';

const backgroundImage = require('../../../assets/image/Kholoc.png');
const centerImage = require('../../../assets/image/logo.png');
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const StockScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [currentCategory, setCurrentCategory] = useState('Lắc lộc vàng'); // Mặc định là 'Lắc lộc vàng'

    const handleLuckyShakePress = () => {
        setCurrentCategory('Lắc lộc vàng');
    };

    const handleLuckyDrawPress = () => {
        setCurrentCategory('Lì xì vàng');
    };

    const handleLuckyCodePress = () => {
        setCurrentCategory('Mã Số May Mắn');
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ImageBackground source={backgroundImage} style={[styles.background, { width: screenWidth, height: screenHeight }]} resizeMode="cover">
                <View style={styles.container}>
                    <CustomText style={styles.title}>KHO LỘC</CustomText>
                    <Image source={centerImage} style={styles.centerImage} />
                    <Header
                        onLuckyShakePress={handleLuckyShakePress}
                        onLuckyCodePress={handleLuckyCodePress}
                        onLuckyDrawPress={handleLuckyDrawPress}
                    />
                    {currentCategory === 'Lắc lộc vàng' || currentCategory === 'Lì xì vàng' ? (
                        <LuckyDraw category={currentCategory} />
                    ) : (
                        <LotteryDraw category={currentCategory} />
                    )}
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    background: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 26,
        textAlign: 'center',
        marginBottom: 10,
        color: '#fef2ba',
        fontFamily: 'Signika-Bold'
    },
    centerImage: {
        width: '100%',
        resizeMode: 'contain',
    },
});

export default StockScreen;
