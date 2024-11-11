import CustomButton from '@/src/components/ui/CustomButton';
import { RootState } from '@/src/redux-toolkit/store';
import { RootStackParamList } from '@/src/type/RootStackParamList';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

// const backgroundImage1 = require('../../../assets/image/bannerVit.png');

const backgroundImage = require('../../../assets/image/timDoiThu.png');
const user = require('../../../assets/image/avatar.png');
const otherUser = require('../../../assets/image/avatarOtherUser.png');

const data = [{
    banner: require('../../../assets/image/FrameTranhTai.png'),
    title: 'THÁNH ÁNH KIM',
    description: 'Khám phá ngôi nhà lấp lánh ngay nào! Chạm liên tục vào trần Ánh Kim, chạm càng nhanh điểm càng cao, bạn sẽ chiến thắng đối thủ!',
    time: '12:00 - 13:00 | 18:00 - 20:00',
    type: 'bắn vít'
},
{
    banner: require('../../../assets/image/FrameTranhTai.png'),
    title: 'THỬ TÀI BẮN VÍT',
    description: 'Vận dụng tài bắn vít siêu đỉnh: chạm liên tục',
    type: 'ánh kim'
}
]

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');


const StartGameScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    // const route = useRoute<RouteProp<RootStackParamList, 'ScrewScreen'>>();
    // const { type } = route.params;
    const me = useSelector((state: RootState) => state.auth.user);

    const [timer, setTimer] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => prev + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // Format timer display as mm:ss
    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ImageBackground source={backgroundImage} style={[styles.backgroundContainer, { width: screenWidth, height: screenHeight }]} resizeMode="cover">


                <Text style={styles.header}>TẾT TRANH TÀI</Text>

                <View style={styles.text}>
                    <Text style={{
                        color: '#C4040B', fontSize: 18,
                        fontFamily: 'Signika-Bold',

                    }}>Đáp nhanh tranh lì xì</Text>
                    <Text style={{ textAlign: 'center' }}>Sẵn sàng thách đấu!</Text>
                </View>
                <View style={{ marginTop: 60, width: '70%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={styles.user}>
                        <Image source={user} style={styles.image} />
                        <Text style={{
                            color: '#C4040B', fontSize: 16, fontFamily: 'Signika-Bold', textShadowColor: '#FFFFFFD9',
                            textShadowOffset: { width: 0.75, height: 0.75 },
                            textShadowRadius: 0.5,
                            textAlign: 'center',
                        }}>{me?.fullName}</Text>
                    </View>
                    <View style={styles.user}>
                        <Image source={otherUser} style={styles.image} />
                        <Text style={{
                            color: '#f7eb4d', fontSize: 16, fontFamily: 'Signika-Bold', textShadowColor: '#1E0F00',
                            textShadowOffset: { width: 0.75, height: 0.75 },
                            textShadowRadius: 0.5,
                            textAlign: 'center',
                        }}>Nguyễn Trần Ngọc Hân</Text>
                    </View>
                </View>
                <Text style={{
                    marginTop: 50, color: '#f8e39a', fontSize: 22, fontFamily: 'Signika-Bold',
                    textAlign: 'center', marginBottom: 20
                }}>{formatTime(timer)}</Text>

                <CustomButton
                    title="Chơi"
                    onPress={() => navigation.navigate('EnvelopeScreen')}
                    style={styles.button}
                />
                <CustomButton
                    title="Hủy"
                    onPress={() => navigation.navigate('SupermarketScreen')}
                    style={[styles.button]}
                    colors={['#ffffff', '#faecb6', '#faecb6',]}
                />

            </ImageBackground>
        </SafeAreaView >


    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,

    },
    backgroundContainer: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        bottom: -10,
    },
    header: {
        fontSize: 22,
        color: '#fef2ba',
        margin: 16,
        fontFamily: 'Signika-Bold',
        textTransform: 'uppercase',
        marginTop: 50,
    },
    text: {
        fontSize: 18,
        color: '#fef2ba',
        fontFamily: 'Signika-Bold',
        textTransform: 'uppercase',
        marginTop: 130,
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },
    user: {
        width: 100,

        alignItems: 'center',
    },
    button: {
        borderRadius: 20,
        marginTop: 10,
        width: 160,
        height: 40,
    },
});

export default StartGameScreen;