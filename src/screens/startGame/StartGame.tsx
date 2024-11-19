

// import CustomButton from '@/src/components/ui/CustomButton';
// import { RootState } from '@/src/redux-toolkit/store';
// import { RootStackParamList } from '@/src/type/RootStackParamList';
// import { findRandomOpponent } from '@/src/utils/findRandomOpponent ';
// import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
// import { LinearGradient } from 'expo-linear-gradient';
// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, ImageBackground, Image, Dimensions } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useSelector } from 'react-redux';

// const backgroundImage = require('../../../assets/image/timDoiThu.png');
// const user = require('../../../assets/image/avatar.png');
// const otherUser = require('../../../assets/image/avatarOtherUser.png');

// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

// const data = [
//     { type: 'câu hỏi', navigation: 'QuestionScreen', textScreen: 'Đáp nhanh tranh lì xì' },
//     { type: 'bắn vít', navigation: 'CompetitionScreen', textScreen: 'Thử tài bắn vít' },
//     { type: 'anh hùng', navigation: 'EnvelopeScreen', textScreen: 'Anh hùng siêu bảo vệ' },
//     { type: 'ánh kim', navigation: 'GoldenScreen', textScreen: 'Thánh ánh kim' },

// ]
// const StartGameScreen = () => {
//     const navigation = useNavigation<NavigationProp<RootStackParamList>>();
//     const me = useSelector((state: RootState) => state.auth.user);
//     const route = useRoute<RouteProp<RootStackParamList, 'StartGameScreen'>>();
//     const { type } = route.params || {};

//     const [opponent, setOpponent] = useState<any | null>(null); // Đối thủ
//     const [timer, setTimer] = useState(0);
//     const [error, setError] = useState<string | null>(null); // Thêm trạng thái lỗi

//     // Tìm đối thủ ngẫu nhiên
//     useEffect(() => {
//         if (me) {
//             findRandomOpponent(me.id)
//                 .then(setOpponent)
//                 .catch((err) => {
//                     setError(err.message); // Lưu thông báo lỗi vào state
//                     console.error(err); // In lỗi ra console
//                 });
//         }
//     }, [me]);

//     // Đếm thời gian
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setTimer((prev) => prev + 1);
//         }, 1000);
//         return () => clearInterval(interval);
//     }, []);

//     // Format timer display as mm:ss
//     const formatTime = (time: number) => {
//         const minutes = Math.floor(time / 60);
//         const seconds = time % 60;
//         return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
//     };

//     return (
//         <SafeAreaView style={styles.safeArea}>
//             <ImageBackground source={backgroundImage} style={[styles.backgroundContainer, { width: screenWidth, height: screenHeight }]} resizeMode="cover">
//                 <Text style={styles.header}>TẾT TRANH TÀI</Text>

//                 <View style={styles.text}>
//                     <Text style={styles.textScreen}>Đáp nhanh tranh lì xì</Text>
//                     <Text style={{ textAlign: 'center' }}>Sẵn sàng thách đấu!</Text>
//                 </View>

//                 {/* Hiển thị thông tin người chơi */}
//                 <View style={{ marginTop: 60, width: '70%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
//                     <View style={styles.user}>
//                         <Image source={user} style={styles.image} />
//                         <Text style={{
//                             color: '#C4040B', fontSize: 16, fontFamily: 'Signika-Bold', textShadowColor: '#FFFFFFD9',
//                             textShadowOffset: { width: 0.75, height: 0.75 },
//                             textShadowRadius: 0.5,
//                             textAlign: 'center',
//                         }}>{me?.fullName}</Text>
//                     </View>
//                     <View style={styles.user}>
//                         <Image source={opponent ? otherUser : user} style={styles.image} />
//                         <Text style={{
//                             color: '#f7eb4d', fontSize: 16, fontFamily: 'Signika-Bold', textShadowColor: '#1E0F00',
//                             textShadowOffset: { width: 0.75, height: 0.75 },
//                             textShadowRadius: 0.5,
//                             textAlign: 'center',
//                         }}>{opponent ? opponent.fullName : (error ? error : 'Đang tìm đối thủ...')}</Text>
//                     </View>
//                 </View>

//                 <Text style={{
//                     marginTop: 50, color: '#f8e39a', fontSize: 22, fontFamily: 'Signika-Bold',
//                     textAlign: 'center', marginBottom: 20
//                 }}>{formatTime(timer)}</Text>

//                 <CustomButton
//                     title="Chơi"
//                     onPress={() => navigation.navigate('QuestionScreen')}
//                     style={styles.button}
//                 />
//                 <CustomButton
//                     title="Hủy"
//                     onPress={() => navigation.navigate('SupermarketScreen')}
//                     style={[styles.button]}
//                     colors={['#ffffff', '#faecb6', '#faecb6',]}
//                 />
//             </ImageBackground>
//         </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({
//     safeArea: {
//         flex: 1,
//     },
//     backgroundContainer: {
//         flex: 1,
//         alignItems: 'center',
//         // bottom: -10,
//     },
//     header: {
//         fontSize: 22,
//         color: '#fef2ba',
//         margin: 16,
//         fontFamily: 'Signika-Bold',
//         textTransform: 'uppercase',
//         // marginTop: 50,
//     },
//     text: {
//         fontSize: 18,
//         color: '#fef2ba',
//         fontFamily: 'Signika-Bold',
//         textTransform: 'uppercase',
//         marginTop: 100,
//     },
//     image: {
//         width: 100,
//         height: 100,
//         resizeMode: 'contain'
//     },
//     user: {
//         width: 100,
//         alignItems: 'center',
//     },
//     button: {
//         borderRadius: 20,
//         marginTop: 10,
//         width: 160,
//         height: 40,
//     },
//     textScreen: {
//         color: '#C4040B',
//         fontSize: 18,
//         fontFamily: 'Signika-Bold',
//     }
// });

// export default StartGameScreen;



import CustomButton from '@/src/components/ui/CustomButton';
import { RootState } from '@/src/redux-toolkit/store';
import { RootStackParamList } from '@/src/type/RootStackParamList';
import { findRandomOpponent } from '@/src/utils/findRandomOpponent ';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

const backgroundImage = require('../../../assets/image/timDoiThu.png');
const user = require('../../../assets/image/avatar.png');
const otherUser = require('../../../assets/image/avatarOtherUser.png');

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const data = [
    { type: 'câu hỏi', navigation: 'QuestionScreen', textScreen: 'Đáp nhanh tranh lì xì' },
    { type: 'bắn vít', navigation: 'GameBanVitScreen', textScreen: 'Thử tài bắn vít' },
    { type: 'anh hùng', navigation: 'EnvelopeScreen', textScreen: 'Anh hùng siêu bảo vệ' },
    { type: 'ánh kim', navigation: 'EnvelopeScreen', textScreen: 'Thánh ánh kim' },
];

const StartGameScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const me = useSelector((state: RootState) => state.auth.user);
    const route = useRoute<RouteProp<RootStackParamList, 'StartGameScreen'>>();
    const { type } = route.params || {};

    const [opponent, setOpponent] = useState<any | null>(null); // Đối thủ
    const [timer, setTimer] = useState(0);
    const [error, setError] = useState<string | null>(null); // Thêm trạng thái lỗi

    // Tìm đối thủ ngẫu nhiên
    useEffect(() => {
        if (me) {
            findRandomOpponent(me.id)
                .then(setOpponent)
                .catch((err) => {
                    setError(err.message); // Lưu thông báo lỗi vào state
                    console.error(err); // In lỗi ra console
                });
        }
    }, [me]);

    // Đếm thời gian
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

    // Tìm thông tin màn hình dựa trên loại
    const screenInfo = data.find(item => item.type === type);

    return (
        <SafeAreaView style={styles.safeArea}>
            <ImageBackground source={backgroundImage} style={[styles.backgroundContainer, { width: screenWidth, height: screenHeight }]} resizeMode="cover">
                <Text style={styles.header}>TẾT TRANH TÀI</Text>

                <View style={styles.text}>
                    <Text style={styles.textScreen}>{screenInfo?.textScreen || 'Đáp nhanh tranh lì xì'}</Text>
                    <Text style={{ textAlign: 'center' }}>Sẵn sàng thách đấu!</Text>
                </View>

                {/* Hiển thị thông tin người chơi */}
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
                        <Image source={opponent ? otherUser : user} style={styles.image} />
                        <Text style={{
                            color: '#f7eb4d', fontSize: 16, fontFamily: 'Signika-Bold', textShadowColor: '#1E0F00',
                            textShadowOffset: { width: 0.75, height: 0.75 },
                            textShadowRadius: 0.5,
                            textAlign: 'center',
                        }}>{opponent ? opponent.fullName : (error ? error : 'Đang tìm đối thủ...')}</Text>
                    </View>
                </View>

                <Text style={{
                    marginTop: 50, color: '#f8e39a', fontSize: 22, fontFamily: 'Signika-Bold',
                    textAlign: 'center', marginBottom: 20
                }}>{formatTime(timer)}</Text>

                <CustomButton
                    title="Chơi"
                    onPress={() => {
                        if (screenInfo) {
                            // Ép kiểu screenInfo?.navigation là một trong các tên màn hình hợp lệ
                            navigation.navigate(screenInfo.navigation as keyof RootStackParamList, { opponent });
                        } else {
                            // Nếu không tìm thấy thông tin màn hình, có thể điều hướng đến một màn hình mặc định hoặc thông báo lỗi
                            console.error('Không tìm thấy màn hình tương ứng');
                        }
                    }}
                    style={styles.button}
                />


                <CustomButton
                    title="Hủy"
                    onPress={() => navigation.navigate('SupermarketScreen')}
                    style={[styles.button]}
                    colors={['#ffffff', '#faecb6', '#faecb6',]}
                />
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    backgroundContainer: {
        flex: 1,
        alignItems: 'center',
        // bottom: -10,
    },
    header: {
        fontSize: 22,
        color: '#fef2ba',
        margin: 16,
        fontFamily: 'Signika-Bold',
        textTransform: 'uppercase',
        // marginTop: 50,
    },
    text: {
        fontSize: 18,
        color: '#fef2ba',
        fontFamily: 'Signika-Bold',
        textTransform: 'uppercase',
        marginTop: 100,
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
    textScreen: {
        color: '#C4040B',
        fontSize: 18,
        fontFamily: 'Signika-Bold',
    }
});

export default StartGameScreen;

