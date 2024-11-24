

import CustomButton from '@/src/components/ui/CustomButton';
import { RootStackParamList } from '@/src/type/RootStackParamList';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const backgroundImage = require('../../../assets/image/win.png');
const logo = require('../../../assets/image/logo.png');
// const centerImage = require('../../../assets/image/logo.png');

import { RouteProp, useRoute } from '@react-navigation/native';

const ScoreScreen = () => {
    const route = useRoute<RouteProp<RootStackParamList, 'ScoreScreen'>>();
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const { score1, score2 } = route.params;

    const getResultMessage = () => {
        if (score1 > score2) {
            return 'Chúc mừng!\nBạn đã chiến thắng! 🎉';
        } else if (score1 < score2) {
            return 'Rất tiếc, bạn đã thua.\nHãy thử lại nhé! 😢';
        } else {
            return 'Hòa rồi!\nMột trận đấu rất cân tài cân sức! 🤝';
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <LinearGradient
                colors={['#DC1920', '#A60006']}
                start={{ x: 0.5, y: 0.5 }}
                end={{ x: 0.5, y: 1 }}
                style={styles.container}
            >
                <Text style={styles.header}>THÁNH LÌ XÌ</Text>
                <Image source={logo} resizeMode='contain' style={{ width: 200, height: 50, marginBottom: 20 }} />
                <ImageBackground source={backgroundImage} style={styles.background} imageStyle={styles.frameImage}>
                    <View style={styles.container}>
                        <Text style={styles.scoreText}>
                            {getResultMessage()}
                            {/* Bạn đạt {score1} điểm và đối thủ {score2} điểm */}
                        </Text>
                        {/* <Text style={styles.resultMessage}>
                            {getResultMessage()}
                        </Text> */}
                        <Text style={{ textAlign: 'center', marginTop: 5, fontSize: 16 }}>
                            Tích cực tham gia mỗi ngày để
                            có thêm nhiều lì xì nhé!
                        </Text>

                        <View style={styles.buttonContainer}>
                            <CustomButton
                                title="Chia sẻ"
                                style={styles.button}
                                onPress={() => navigation.navigate('RoundSecondScreen')}
                            />
                            <CustomButton
                                title="Nhận lộc"
                                style={styles.button}
                                onPress={() => navigation.navigate('RoundSecondScreen')}

                            />
                        </View>
                    </View>
                </ImageBackground>
            </LinearGradient>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 15,
        alignItems: 'center',
    },
    header: {
        fontSize: 22,
        color: '#fef2ba',
        margin: 16,
        fontFamily: 'Signika-Bold',
        textTransform: 'uppercase',
    },
    background: {
        width: '90%',
        height: '80%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    frameImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    scoreText: {
        fontSize: 18,
        fontFamily: 'Signika-Bold',
        // marginBottom: 5,
        textAlign: 'center',
        color: '#C2030B'
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-end',  // Đặt các nút xuống cuối ảnh
        alignItems: 'center',

    },
    button: {
        borderRadius: 20,
        marginBottom: 10,
        width: 160,
        height: 40,
    },
    cancelButton: {
        backgroundColor: '#f4a261', // Màu nền cho nút hủy (nếu cần thay đổi)
    },
    resultMessage: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#DC1920',
        marginVertical: 10,
    },

});

export default ScoreScreen;
