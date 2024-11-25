import { RootState } from '@/src/redux-toolkit/store';
import { RootStackParamList } from '@/src/type/RootStackParamList';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, Dimensions, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

const backgroundImage = require('../../../assets/image/banVit.png');
const centerImage = require('../../../assets/image/tranNha.png');

const tuyet = require('../../../assets/image/tuyet.png');

const frameAvatar = require('../../../assets/image/frameAvatar.png');
const frameAvatar1 = require('../../../assets/image/frameAvatar1.png');
const avatar = require('../../../assets/image/face2.png');
const avatarOtherUser = require('../../../assets/image/face1.png');
const vs = require('../../../assets/image/vs.png');
const clock = require('../../../assets/image/clock.png');


const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const GameAnhKimScreen = () => {
    const [visibleImages, setVisibleImages] = useState([true, true, true]);
    const [dinhCount, setDinhCount] = useState(0);
    const [dinhCountOtherUser, setDinhCountOtherUser] = useState(0); // Trạng thái điểm của người chơi kia
    const [timeLeft, setTimeLeft] = useState(10); // Thời gian bắt đầu là 60 giây
    const [gameOver, setGameOver] = useState(false);
    const route = useRoute<RouteProp<RootStackParamList, 'GameAnhKimScreen'>>();
    const { opponent } = route.params;
    const me = useSelector((state: RootState) => state.auth.user);
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();


    const [position, setPosition] = useState<{ x: number; y: number } | null>(null);

    const [isPressing, setIsPressing] = useState(false); // Trạng thái nhấn

    const handlePressIn = (event: any) => {
        const { locationX, locationY } = event.nativeEvent;

        if (timeLeft > 0) {
            setPosition({ x: locationX, y: locationY }); // Lấy vị trí nhấn
            setIsPressing(true); // Hiển thị ảnh
            setDinhCount(prev => prev + 1); // Tăng số đinh
        }

    };

    const handlePressOut = () => {
        setIsPressing(false); // Ẩn ảnh khi nhả tay
    };


    useEffect(() => {
        // Giảm thời gian mỗi giây
        if (timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft(prevTime => prevTime - 1);
            }, 1000);

            // Dọn dẹp khi component bị hủy hoặc thời gian hết
            return () => clearInterval(timer);
        } else {
            setGameOver(true);
            navigation.navigate('ScoreScreen', {
                score1: dinhCount,
                score2: dinhCountOtherUser,
            });
            // Alert.alert('Kết quả', `Số đinh của bạn: ${dinhCount}\nSố đinh của đối thủ: ${dinhCountOtherUser}`);
        }
    }, [timeLeft]);

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const secondsLeft = seconds % 60;
        return `${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;
    };


    useEffect(() => {
        if (timeLeft % 1 === 0 && timeLeft !== 0) {
            setDinhCountOtherUser(prev => prev + 3);
        }
    }, [timeLeft]);

    return (
        <SafeAreaView style={styles.safeArea}>
            <ImageBackground source={backgroundImage} style={[styles.background, { width: screenWidth, height: screenHeight }]} resizeMode="cover">
                <View style={styles.container}>
                    <View style={{ width: '90%', left: -10, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <ImageBackground source={frameAvatar} style={{ width: 140, height: 70, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} imageStyle={{ width: 140, height: 70, resizeMode: 'contain' }}>
                                <Image source={avatar} style={{ width: 50, height: 50, resizeMode: 'contain', marginHorizontal: 5 }} />
                                <Text style={{ color: '#ffeb9d', fontSize: 20, marginLeft: 5, bottom: -16, fontWeight: '800' }}>{dinhCount}</Text>
                            </ImageBackground>
                            <Text style={styles.name}>{me?.fullName}</Text>
                        </View>
                        <Image source={vs} style={{ width: 60, resizeMode: 'contain', bottom: -15 }} />
                        <View>
                            <ImageBackground source={frameAvatar1} style={{ width: 140, height: 70, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }} imageStyle={{ width: 140, resizeMode: 'contain' }}>
                                <Text style={{ color: '#ffeb9d', fontSize: 20, bottom: -16, fontWeight: '800', marginRight: 5 }}>{dinhCountOtherUser}</Text>
                                <Image source={avatarOtherUser} style={{ marginRight: 8, width: 50, height: 50, resizeMode: 'contain' }} />
                            </ImageBackground>
                            <Text style={styles.name}>{opponent.fullName}</Text>
                        </View>
                    </View>

                    <Text style={{ fontFamily: 'Signika-Bold', fontSize: 18, marginBottom: 8, color: '#ffffff', }}>THÁNH ÁNH KIM</Text>
                    <ImageBackground source={centerImage} style={styles.frame} imageStyle={styles.frameImage}>
                        <ImageBackground source={clock} style={{ justifyContent: 'center', alignItems: 'center', width: 100, height: 50 }} imageStyle={styles.clock} >
                            <Text style={styles.time}>{formatTime(timeLeft)}</Text>
                        </ImageBackground>
                        <View style={styles.imageRow}>
                            <TouchableOpacity
                                activeOpacity={1}
                                style={styles.touchable}
                                onPressIn={handlePressIn}
                                onPressOut={handlePressOut}>
                                {isPressing && position && (
                                    <Image
                                        source={tuyet}
                                        style={[
                                            styles.motchi,
                                            { left: position.x, top: position.y - 60 },
                                        ]}
                                    />
                                )}
                            </TouchableOpacity>
                        </View>
                        <View style={styles.textContainer}>
                            {/* <Image source={mayKhoan} style={styles.image} />
                            <Image source={tuiDinh} style={styles.tuiDinh} /> */}
                        </View>
                    </ImageBackground>
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
        justifyContent: 'flex-end',
        alignItems: 'center',
        bottom: 10
    },
    frame: {
        width: '100%',
        height: '68%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    frameImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    imageRow: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        paddingLeft: 40,
        paddingRight: 32,
        // backgroundColor: 'blue',
    },
    textContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',


    },
    motchi: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
        position: 'absolute', // Đảm bảo hình ảnh được định vị chính xác
    },
    touchableArea: {
        width: 200,
        height: 200,
        position: 'absolute',
        backgroundColor: 'red',
    },

    name: {
        color: '#FFFFFF',
        fontSize: 14,
        fontFamily: 'Signika-Bold',
        textAlign: 'center',
    },
    tuiDinh: {
        width: 120,
        height: 100,
        resizeMode: 'contain',
    },
    clock: {
        width: 100,
        height: 50,
        resizeMode: 'contain',
    },
    time: {
        textAlign: 'center',
        marginLeft: 10,
        marginTop: 5,
        color: '#fff3b9',
        fontSize: 16,
        fontFamily: 'Signika-Bold',
    },
    randomImage: {
        position: 'absolute',
        bottom: 100,
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    touchable: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',

    },
});

export default GameAnhKimScreen;
