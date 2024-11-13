// import CustomButton from '@/src/components/ui/CustomButton';
// import { RootStackParamList } from '@/src/type/RootStackParamList';
// import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
// import { LinearGradient } from 'expo-linear-gradient';
// import React from 'react';
// import { View, Text, StyleSheet, ImageBackground, Image, Dimensions } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';

// const backgroundImage1 = require('../../../assets/image/bannerVit.png');
// const banner = require('../../../assets/image/FrameTranhTai.png');
// const backgroundImage = require('../../../assets/image/VitKhoan.png');

// const data = [{
//     banner: require('../../../assets/image/FrameTranhTai.png'),
//     title: 'THÁNH ÁNH KIM',
//     description: 'Khám phá ngôi nhà lấp lánh ngay nào! Chạm liên tục vào trần Ánh Kim, chạm càng nhanh điểm càng cao, bạn sẽ chiến thắng đối thủ!',
//     time: '12:00 - 13:00 | 18:00 - 20:00',
//     type: 'bắn vít'
// },
// {
//     banner: require('../../../assets/image/FrameTranhTai.png'),
//     title: 'THỬ TÀI BẮN VÍT',
//     description: 'Vận dụng tài bắn vít siêu đỉnh: chạm liên tục',
//     type: 'ánh kim'
// }
// ]

// // const { width: screenWidth, height: screenHeight } = Dimensions.get('window');


// const ScrewScreen = () => {
//     const navigation = useNavigation<NavigationProp<RootStackParamList>>();
//     const route = useRoute<RouteProp<RootStackParamList, 'ScrewScreen'>>();
//     const { type } = route.params;

//     return (
//         <SafeAreaView style={styles.safeArea}>
//             <ImageBackground source={backgroundImage} style={[styles.backgroundContainer, { width: '100%', height: '100%' }]} resizeMode="cover">

//                 <Text style={styles.header}>TẾT TRANH TÀI</Text>
//                 <ImageBackground source={backgroundImage1} style={styles.background} imageStyle={styles.frameImage}>
//                     <View style={styles.container}>
//                         <Text style={[styles.text, { marginBottom: 10, }]}>THỬ TÀI BẮN VÍT</Text>
//                         <View style={{ paddingVertical: 10, justifyContent: 'center', marginBottom: 10, }}>
//                             <View style={{ marginHorizontal: 30 }}>
//                                 {/* <Text style={[styles.text, { fontSize: 18 }]}>Nhiệm vụ</Text> */}
//                                 <Text style={{ color: '#333333' }}>
//                                     Vận dụng tài bắn vít siêu đỉnh: chạm liên tục vào màn hình, chạm càng nhanh điểm càng cao, bạn sẽ chiến thắng đối thủ!

//                                 </Text>
//                             </View>
//                         </View>

//                         <Image source={banner} style={styles.banner} />
//                         <CustomButton title='Tìm đối thủ' style={styles.button} onPress={() => navigation.navigate('AnswerQuestionScreen')} />
//                         <View style={{ width: '90%', backgroundColor: '#b0050b', borderWidth: 2, borderColor: '#fff613', borderRadius: 10, bottom: 0, padding: 10 }}>
//                             <Text style={styles.message}>
//                                 Lưu ý: Khung giờ mỗi ngày cho phép thi đấu
//                             </Text>
//                             <Text style={[styles.highlightedNumber, { fontWeight: '700' }]}> 12:00 - 13:00 | 18:00 - 20:00</Text>

//                         </View>

//                     </View>

//                 </ImageBackground>


//             </ImageBackground>
//         </SafeAreaView >


//     );
// };

// const styles = StyleSheet.create({
//     safeArea: {
//         flex: 1,

//     },
//     backgroundContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         bottom: -10,
//     },
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     title: {
//         fontSize: 24,
//         color: '#FFF',
//         fontWeight: 'bold',
//     },
//     background: {
//         width: '85%',
//         height: '85%',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     frameImage: {
//         width: '100%',
//         height: '100%',
//         resizeMode: 'contain',
//     },
//     header: {
//         fontSize: 22,
//         color: '#fef2ba',
//         margin: 16,
//         fontFamily: 'Signika-Bold',
//         textTransform: 'uppercase',
//     },
//     banner: {

//         width: 330,
//         // height: 500,
//         resizeMode: 'contain'
//     },
//     button: {
//         height: 40,
//         margin: 20
//     },
//     message: {
//         color: 'white',
//         fontSize: 14,
//         textAlign: 'center',

//     },
//     text: {
//         color: '#C2030B',
//         fontSize: 20,
//         fontFamily: 'Signika-SemiBold',

//     },
//     highlightedNumber: {
//         textAlign: 'center',
//         color: '#fff', // Ví dụ màu vàng cho số 11
//         // fontSize: 22, // Tăng kích thước cho nổi bật hơn nếu cần

//     },
// });

// export default ScrewScreen;

import CustomButton from '@/src/components/ui/CustomButton';
import { RootStackParamList } from '@/src/type/RootStackParamList';
import { NavigationProp, useNavigation, RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const backgroundImage = require('../../../assets/image/VitKhoan.png');

const data = [
    {
        backgroundImage1: require('../../../assets/image/imageAnhKim.png'),
        banner: require('../../../assets/image/FrameAnhKim.png'),
        title: 'THÁNH ÁNH KIM',
        description: 'Khám phá ngôi nhà lấp lánh ngay nào! Chạm liên tục vào trần Ánh Kim, chạm càng nhanh điểm càng cao, bạn sẽ chiến thắng đối thủ!',
        time: '12:00 - 13:00 | 18:00 - 20:00',
        type: 'ánh kim'
    },
    {
        backgroundImage1: require('../../../assets/image/bannerVit.png'),
        banner: require('../../../assets/image/FrameTranhTai.png'),
        title: 'THỬ TÀI BẮN VÍT',
        description: 'Vận dụng tài bắn vít siêu đỉnh: chạm liên tục vào màn hình, chạm càng nhanh điểm càng cao, bạn sẽ chiến thắng đối thủ!',
        time: '12:00 - 13:00 | 18:00 - 20:00',

        type: 'bắn vít',
    }
];

const ScrewScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const route = useRoute<RouteProp<RootStackParamList, 'ScrewScreen'>>();
    const { type } = route.params;


    // Lọc dữ liệu dựa trên type
    const currentData = data.find(item => item.type === type);

    return (
        <SafeAreaView style={styles.safeArea}>
            <ImageBackground source={backgroundImage} style={[styles.backgroundContainer, { width: '100%', height: '100%' }]} resizeMode="cover">
                <Text style={styles.header}>TẾT TRANH TÀI</Text>
                <ImageBackground source={currentData?.backgroundImage1} style={styles.background} imageStyle={styles.frameImage}>
                    <View style={styles.container}>
                        <Text style={[styles.text, { marginBottom: 10 }]}>
                            {currentData?.title || 'Chưa có dữ liệu'}
                        </Text>
                        <View style={{ paddingVertical: 10, justifyContent: 'center', marginBottom: 10 }}>
                            <View style={{ marginHorizontal: 30 }}>
                                <Text style={{ color: '#333333' }}>
                                    {currentData?.description || 'Mô tả không có sẵn.'}
                                </Text>
                            </View>
                        </View>

                        <Image source={currentData?.banner} style={styles.banner} />
                        <CustomButton title='Tìm đối thủ' style={styles.button} onPress={() => navigation.navigate('StartGameScreen')} />
                        <View style={{ width: '90%', backgroundColor: '#b0050b', borderWidth: 2, borderColor: '#fff613', borderRadius: 10, bottom: 0, padding: 10 }}>
                            <Text style={styles.message}>Lưu ý: Khung giờ mỗi ngày cho phép thi đấu</Text>
                            <Text style={[styles.highlightedNumber, { fontWeight: '700' }]}>
                                {currentData?.time || 'Không có thời gian'}
                            </Text>
                        </View>
                    </View>
                </ImageBackground>
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
        justifyContent: 'center',
        alignItems: 'center',
        bottom: -10,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        color: '#FFF',
        fontWeight: 'bold',
    },
    background: {
        width: '85%',
        height: '85%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    frameImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    header: {
        fontSize: 22,
        color: '#fef2ba',
        margin: 16,
        fontFamily: 'Signika-Bold',
        textTransform: 'uppercase',
    },
    banner: {
        width: 330,
        resizeMode: 'contain'
    },
    button: {
        height: 40,
        margin: 20
    },
    message: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center',
    },
    text: {
        color: '#C2030B',
        fontSize: 20,
        fontFamily: 'Signika-SemiBold',
    },
    highlightedNumber: {
        textAlign: 'center',
        color: '#fff',
    },
});

export default ScrewScreen;
