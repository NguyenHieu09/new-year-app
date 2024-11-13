import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, Dimensions } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@/src/type/RootStackParamList';
import AttendanceModal from '@/src/components/modal/attendance';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '@/src/components/ui/CustomButton';
import CustomText from '@/src/components/ui/CustomText';
import { RootState } from '@/src/redux-toolkit/store';
import { useSelector } from 'react-redux';
import { findRandomOpponent } from '@/src/utils/findRandomOpponent ';

const backgroundImage = require('../../../assets/image/dapNhanhLiXi.png');
const centerImage = require('../../../assets/image/avatar.png');

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const AnswerQuestionScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const user = useSelector((state: RootState) => state.auth.user);
    const [opponent, setOpponent] = useState<any | null>(null);
    const [timer, setTimer] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => prev + 1);
        }, 1000);

        const timeout = setTimeout(() => {
            navigation.navigate('StartGameScreen');
        }, 10000); // 10 giây = 10000 milliseconds

        // Đảm bảo clearTimeout chỉ được gọi khi component unmount
        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [navigation]);


    // Format timer display as mm:ss
    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ImageBackground source={backgroundImage} style={[styles.background, { width: screenWidth, height: screenHeight }]} resizeMode="cover">
                <View style={styles.container}>


                    <View style={styles.centerImageContainer}>
                        <View style={{ alignItems: 'center', }}>
                            <Text style={{ color: '#FFE933', fontSize: 18, fontFamily: 'Signika-SemiBold' }}>Đáp nhanh tranh lì xì</Text>
                            <Text style={{ color: '#FFF', fontSize: 17, fontFamily: 'Signika-Regular', marginBottom: 20 }}>Đang tìm đối thủ</Text>
                        </View>

                        <Image source={centerImage} style={styles.centerImage} />
                        <Text style={styles.avatar}>{user?.fullName}</Text>
                        <View>
                            <Text style={[styles.avatar, { marginTop: 45, fontSize: 24 }]}>{formatTime(timer)}</Text>
                        </View>
                    </View>


                    <View style={styles.tooltip}>
                        <Text style={styles.buttonText}>Lưu ý: Người chơi trả lời đúng và nhanh hơn sẽ chiến thắng và nhận được +11 xì</Text>
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
        // justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    centerImageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'green',
    },
    tooltip: {
        width: '90%',
        backgroundColor: '#feeda5',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#f87e4a',
        bottom: 10,
    },
    number: {
        fontSize: 18,
        marginTop: 20,
    },
    button: {
        borderRadius: 20,
        marginTop: 5,
        width: 150
    },
    buttonText: {
        color: '#c2030b',
        fontSize: 16,
        // fontWeight: 'bold',
        // textAlign: 'center',
    },
    centerImage: {
        width: 190,
        height: undefined,
        aspectRatio: 1,
        resizeMode: 'contain',
    },
    avatar: {
        textAlign: 'center',
        width: 120,
        color: '#fff2b1',
        fontSize: 20,
        fontFamily: 'Signika-Bold',
    }
});

export default AnswerQuestionScreen;