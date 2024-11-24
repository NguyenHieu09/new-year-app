import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, Dimensions } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@/src/type/RootStackParamList';
import AttendanceModal from '@/src/components/modal/Attendance';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '@/src/components/ui/CustomButton';
import CustomText from '@/src/components/ui/CustomText';

const backgroundImage = require('../../../assets/image/tranhTai.png');


const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const RoundSecondScreen = () => {

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <SafeAreaView style={styles.safeArea}>
            <ImageBackground source={backgroundImage} style={[styles.background, { width: screenWidth, height: screenHeight }]} resizeMode="cover">
                <View style={styles.container}>

                    <View style={styles.buttonContainer}>

                        <CustomButton
                            title="Thử tài bắn vít"
                            onPress={() => navigation.navigate('ScrewScreen', { type: 'bắn vít' })}
                            style={styles.button}
                        />
                        <CustomButton
                            title="Anh hùng siêu bảo vệ"
                            subtitle="Ra mắt vào ngày 08/11"
                            onPress={() => navigation.navigate('ScrewScreen', { type: 'anh hùng' })}
                            style={styles.button}
                        />
                        <CustomButton
                            title="Thánh ánh kim"
                            subtitle="Ra mắt vào ngày 08/11"
                            onPress={() => navigation.navigate('ScrewScreen', { type: 'ánh kim' })}
                            style={styles.button}
                        />
                    </View>

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
        justifyContent: 'center',
        alignItems: 'center',

    },
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 10,
    },
    centerImageContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        // backgroundColor: 'green',
    },
    buttonContainer: {
        // backgroundColor: 'green',
        alignItems: 'center',

        marginBottom: 20
    },
    number: {
        fontSize: 18,
        marginTop: 20,
        color: '#fff',
        fontFamily: 'Signika-Bold'
    },
    button: {
        borderRadius: 20,
        marginTop: 10,
        width: 230,
        height: 50,
        justifyContent: 'center',
    },
    buttonText: {
        color: '#cc0000',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    centerImage: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
        resizeMode: 'contain',
    },
    highlightedNumber: {
        color: '#FFD700', // Ví dụ màu vàng cho số 11
        fontSize: 22, // Tăng kích thước cho nổi bật hơn nếu cần
        fontFamily: 'Signika-Bold'
    },
});

export default RoundSecondScreen;