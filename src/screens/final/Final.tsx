

// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, Dimensions } from 'react-native';
// import { useNavigation, NavigationProp } from '@react-navigation/native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { RootStackParamList } from '@/src/type/RootStackParamList';
// import AttendanceModal from '@/src/components/modal/Attendance';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import CustomButton from '@/src/components/ui/CustomButton';
// import TabCK from '@/src/components/tabCK/TabCK';

// const backgroundImage = require('../../../assets/image/BXH.png');
// const centerImage = require('../../../assets/image/frameCK.png');

// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

// const FinalScreen = () => {
//     const [opacity, setOpacity] = useState(1);
//     const [modalVisible, setModalVisible] = useState(false);
//     const navigation = useNavigation<NavigationProp<RootStackParamList>>();



//     // Hàm xử lý các sự kiện nhấn nút trong TabCK
//     const handleProvincePress = () => {
//         console.log('Tỉnh');
//     };

//     const handleNationwidePress = () => {
//         console.log('Toàn quốc');
//     };

//     const handleFinalPress = () => {
//         console.log('Chung kết');
//     };

//     return (
//         <SafeAreaView style={styles.safeArea}>
//             <ImageBackground source={backgroundImage} style={[styles.background, { width: screenWidth, height: screenHeight }]} resizeMode="cover">
//                 <View style={styles.container}>
//                     <Text style={{ fontFamily: 'Signika-Bold', fontSize: 24, marginTop: 10, color: '#fee892' }}>ĐẠI HỘI TRANH TÀI</Text>
//                     <ImageBackground source={centerImage} style={styles.frame} imageStyle={styles.frameImage}>
//                         <TabCK

//                             onProvincePress={handleProvincePress}
//                             onNationwidePress={handleNationwidePress}
//                             onFinalPress={handleFinalPress}
//                         />

//                     </ImageBackground>
//                 </View>
//             </ImageBackground >
//         </SafeAreaView >
//     );
// };

// const styles = StyleSheet.create({
//     safeArea: {
//         flex: 1,
//     },
//     background: {
//         flex: 1,
//     },
//     container: {
//         flex: 1,
//         // justifyContent: 'center',
//         alignItems: 'center',
//     },
//     frame: {
//         marginTop: 50,
//         width: '100%',
//         height: '82%',
//         // justifyContent: 'center',
//         alignItems: 'center',

//     },
//     frameImage: {
//         width: '100%',
//         height: '100%',
//         resizeMode: 'contain',
//     },

// });

// export default FinalScreen;

import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TabCK from '@/src/components/tabCK/TabCK';

const backgroundImage = require('../../../assets/image/BXH.png');
const centerImage = require('../../../assets/image/frameCK.png');
const hang1 = require('../../../assets/image/vang.png');
const hang2 = require('../../../assets/image/bac.png');
const face1 = require('../../../assets/image/face1.png');
const face2 = require('../../../assets/image/face2.png');

const xepHang1 = require('../../../assets/image/xep1.png');
const xepHang2 = require('../../../assets/image/xep2.png');
const xepHang = require('../../../assets/image/xephang.png');


const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const FinalScreen = () => {
    const handleProvincePress = () => {
        console.log('Tỉnh');
    };

    const handleNationwidePress = () => {
        console.log('Toàn quốc');
    };

    const handleFinalPress = () => {
        console.log('Chung kết');
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ImageBackground
                source={backgroundImage}
                style={[styles.background, { width: screenWidth, height: screenHeight }]}
                resizeMode="cover"
            >
                <View style={styles.container}>
                    <Text style={styles.title}>BẢNG XẾP HẠNG</Text>
                    <ImageBackground
                        source={centerImage}
                        style={styles.frame}
                        imageStyle={styles.frameImage}
                    >
                        <View style={styles.rankRow}>
                            {/* Hạng 1 */}
                            <ImageBackground source={hang1} style={styles.rankBox} imageStyle={styles.rankImage}>
                                <ImageBackground source={face1} style={styles.faceImage} />
                                <Text style={styles.rankText}>Nguyễn Hoàng
                                    Đăng Khoa</Text>
                            </ImageBackground>

                            {/* Hạng 2 */}
                            <ImageBackground source={hang2} style={[styles.rankBox,]} imageStyle={[styles.rankImage, { marginTop: 10 }]}>
                                <ImageBackground source={face2} style={[styles.faceImage,]} />
                                <Text style={[styles.rankText, { color: '#333333' }]}>Nguyễn Thị{'\n'}Khánh Linh</Text>

                            </ImageBackground>
                        </View>

                        <ImageBackground source={xepHang1} style={[styles.rank1]} imageStyle={styles.rank1Image}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <ImageBackground source={face2} style={[styles.avatar]} />
                                <Text style={[styles.rankText, { color: '#FFE933' }]}>Nguyễn Thị Khánh Linh</Text>
                                <Text style={{ color: 'white', fontFamily: 'Signika-Bold' }}>999</Text>
                                <Text style={{ color: 'white', fontFamily: 'Signika-Bold', marginHorizontal: 11 }}>Lì xì</Text>
                            </View>

                        </ImageBackground>

                        <ImageBackground source={xepHang2} style={[styles.rank1]} imageStyle={styles.rank1Image}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <ImageBackground source={face2} style={[styles.avatar]} />
                                <Text style={[styles.rankText, { color: '#FFE933' }]}>Nguyễn Thị Khánh Linh</Text>
                                <Text style={{ color: 'white', fontFamily: 'Signika-Bold' }}>999</Text>
                                <Text style={{ color: 'white', fontFamily: 'Signika-Bold', marginHorizontal: 11 }}>Lì xì</Text>
                            </View>

                        </ImageBackground>

                        <ImageBackground source={xepHang} style={[styles.rank1]} imageStyle={styles.rank1Image}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ marginHorizontal: 25, fontSize: 18, color: 'white', fontFamily: 'Signika-Bold' }}>3</Text>
                                <ImageBackground source={face2} style={[styles.avatar]} />
                                <Text style={[styles.rankText, { color: '#FFE933' }]}>Nguyễn Thị Khánh Linh</Text>
                                <Text style={{ color: 'white', fontFamily: 'Signika-Bold' }}>999</Text>
                                <Text style={{ color: 'white', fontFamily: 'Signika-Bold', marginHorizontal: 11 }}>Lì xì</Text>
                            </View>

                        </ImageBackground>

                        <ImageBackground source={xepHang} style={[styles.rank1]} imageStyle={styles.rank1Image}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ marginHorizontal: 25, fontSize: 18, color: 'white', fontFamily: 'Signika-Bold' }}>4</Text>

                                <ImageBackground source={face2} style={[styles.avatar]} />

                                <Text style={[styles.rankText, { color: '#FFE933' }]}>Nguyễn Thị Khánh Linh</Text>
                                <Text style={{ color: 'white', fontFamily: 'Signika-Bold' }}>999</Text>
                                <Text style={{ color: 'white', fontFamily: 'Signika-Bold', marginHorizontal: 11 }}>Lì xì</Text>
                            </View>

                        </ImageBackground>
                        <ImageBackground source={xepHang} style={[styles.rank1]} imageStyle={styles.rank1Image}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ marginHorizontal: 25, fontSize: 18, color: 'white', fontFamily: 'Signika-Bold' }}>5</Text>

                                <ImageBackground source={face2} style={[styles.avatar]} />
                                <Text style={[styles.rankText, { color: '#FFE933' }]}>Nguyễn Thị Khánh Linh</Text>
                                <Text style={{ color: 'white', fontFamily: 'Signika-Bold' }}>999</Text>
                                <Text style={{ color: 'white', fontFamily: 'Signika-Bold', marginHorizontal: 11 }}>Lì xì</Text>
                            </View>

                        </ImageBackground>
                        <ImageBackground source={xepHang} style={[styles.rank1]} imageStyle={styles.rank1Image}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ marginHorizontal: 25, fontSize: 18, color: 'white', fontFamily: 'Signika-Bold' }}>48</Text>

                                <ImageBackground source={face2} style={[styles.avatar]} />
                                <Text style={[styles.rankText, { color: '#FFE933' }]}>Nguyễn Thị Khánh Linh</Text>
                                <Text style={{ color: 'white', fontFamily: 'Signika-Bold' }}>999</Text>
                                <Text style={{ color: 'white', fontFamily: 'Signika-Bold', marginHorizontal: 11 }}>Lì xì</Text>
                            </View>

                        </ImageBackground>

                    </ImageBackground>

                    <TabCK
                        onProvincePress={handleProvincePress}
                        onNationwidePress={handleNationwidePress}
                        onFinalPress={handleFinalPress}
                        style={styles.tabCK}
                    />

                </View>
            </ImageBackground >
        </SafeAreaView >
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
        alignItems: 'center',
    },
    title: {
        fontFamily: 'Signika-Bold',
        fontSize: 24,
        marginTop: 10,
        color: '#fee892',
    },
    frame: {
        marginTop: 70,
        width: 340,
        height: 520, // Điều chỉnh chiều cao để tạo không gian cho TabCK
        alignItems: 'center',
        overflow: 'visible', // Cho phép phần tử vượt ra ngoài
        // backgroundColor: 'blue',
    },
    frameImage: {
        width: 340,
        height: 520,
        resizeMode: 'contain',
    },
    tabCK: {
        position: 'absolute', // Định vị tuyệt đối
        top: '12%', // Đẩy TabCK xuống dưới 80% của chiều cao frame

    },
    rankRow: {
        flexDirection: 'row', // Đặt các phần tử cùng hàng
        justifyContent: 'center', // Căn khoảng cách giữa các hạng
        alignItems: 'flex-end', // Căn giữa theo trục dọc
        marginVertical: 20, // Khoảng cách với phần trên
        width: '100%', // Chiếm toàn bộ chiều rộng khung
        // backgroundColor: 'blue',


    },
    rankBox: {
        width: 120, // Kích thước của từng hạng
        height: 120,
        alignItems: 'center', // Căn giữa nội dung theo trục ngang
        justifyContent: 'flex-end', // Căn giữa nội dung theo trục dọc

    },
    rankImage: {
        resizeMode: 'contain', // Đảm bảo ảnh vừa với khung

    },
    faceImage: {
        width: 60, // Kích thước ảnh face
        height: 50,
        marginBottom: 8, // Khoảng cách giữa ảnh face và text
        resizeMode: 'contain', // Đảm bảo ảnh vừa với khung
    },
    rankText: {
        paddingHorizontal: 10,
        fontFamily: 'Signika-Bold', // Font chữ
        fontSize: 12, // Kích thước chữ
        color: '#ffffff', // Màu chữ
        textAlign: 'center', // Căn giữa chữ
    },
    rank1Image: {
        width: 290,
        height: 50,
        resizeMode: 'contain'

    },
    rank1: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        // backgroundColor: 'blue',
        width: 290,
        height: 50,
        marginBottom: 5,
    },
    avatar: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    }

});

export default FinalScreen;
