


import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, ImageBackground, Animated, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '@/src/components/ui/CustomButton';
import CustomText from '@/src/components/ui/CustomText';
import AttendanceModal from '@/src/components/modal/Attendance';
import { Accelerometer } from 'expo-sensors';
import ReceiveGiftModal from '@/src/components/modal/ReceiveGift';

const backgroundImage = require('../../../assets/image/Tranglac1.png');
const centerImage = require('../../../assets/image/POSE.png');

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const GoldenScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [shakeCount, setShakeCount] = useState(0);
    const [isShaking, setIsShaking] = useState(false);
    const shakeAnimation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        let subscription: any;

        if (isShaking) {
            Accelerometer.setUpdateInterval(100);

            subscription = Accelerometer.addListener(({ x, y, z }) => {
                const totalForce = Math.sqrt(x * x + y * y + z * z);

                if (totalForce > 1.78) {
                    setShakeCount((prevCount) => prevCount + 1);
                    Animated.sequence([
                        Animated.timing(shakeAnimation, {
                            toValue: 1,
                            duration: 50,
                            useNativeDriver: true,
                        }),
                        Animated.timing(shakeAnimation, {
                            toValue: -1,
                            duration: 50,
                            useNativeDriver: true,
                        }),
                        Animated.timing(shakeAnimation, {
                            toValue: 0,
                            duration: 50,
                            useNativeDriver: true,
                        }),
                    ]).start();
                }
            });

            setTimeout(() => {
                subscription && subscription.remove();
                setIsShaking(false);
                setModalVisible(true); // Hiển thị modal sau khi lắc
            }, 6000);
        }

        return () => subscription && subscription.remove();
    }, [isShaking]);

    const handleShake = () => {
        setShakeCount(0);
        setIsShaking(true);
    };

    const shakeStyle = {
        transform: [
            {
                translateX: shakeAnimation.interpolate({
                    inputRange: [-1, 1],
                    outputRange: [-10, 10],
                }),
            },
        ],
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ImageBackground
                source={backgroundImage}
                style={[styles.background, { width: screenWidth, height: screenHeight }]}
                resizeMode="cover"
            >
                <View style={styles.container}>
                    <View style={styles.centerImageContainer}>
                        <Animated.Image source={centerImage} style={[styles.centerImage, shakeStyle]} />
                    </View>
                    <View style={styles.buttonContainer}>
                        <CustomText style={styles.number}>Bạn có 11 lượt lắc</CustomText>
                        <CustomButton title="Lắc 1 lượt" onPress={handleShake} style={styles.button} />
                        <CustomButton
                            title="Lắc 10 lượt"
                            onPress={() => setModalVisible(true)} // Mở modal thử nghiệm
                            style={styles.button}
                        />
                    </View>
                </View>
                {modalVisible && (
                    <ReceiveGiftModal visible={modalVisible} onClose={() => setModalVisible(false)} />
                )}
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    centerImageContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buttonContainer: {
        alignItems: 'center',
    },
    number: {
        fontSize: 18,
        marginTop: 20,
    },
    button: {
        borderRadius: 20,
        marginTop: 5,
        width: 150,
        height: 38,
        justifyContent: 'center',
    },
    centerImage: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
        resizeMode: 'contain',
    },
});

export default GoldenScreen;
