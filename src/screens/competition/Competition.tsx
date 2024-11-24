

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, Dimensions } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { RootStackParamList } from '@/src/type/RootStackParamList';
import AttendanceModal from '@/src/components/modal/Attendance';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '@/src/components/ui/CustomButton';

const backgroundImage = require('../../../assets/image/compettion.png');
const centerImage = require('../../../assets/image/Frame2.png');
const nuaChi = require('../../../assets/image/NUACHI.png');
const motChi = require('../../../assets/image/motchi.png');
const phieu = require('../../../assets/image/phieu.png');

const vong1 = require('../../../assets/image/vong1.png');
const vong2 = require('../../../assets/image/vong2.png');
const chungket = require('../../../assets/image/chungket.png');



const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const CompetitionScreen = () => {
    const [opacity, setOpacity] = useState(1);
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <SafeAreaView style={styles.safeArea}>
            <ImageBackground source={backgroundImage} style={[styles.background, { width: screenWidth, height: screenHeight }]} resizeMode="cover">
                <View style={styles.container}>
                    <Text style={{ fontFamily: 'Signika-Bold', fontSize: 24, marginBottom: 10, color: '#A60006' }}>ĐẠI HỘI TRANH TÀI</Text>
                    <ImageBackground source={centerImage} style={styles.frame} imageStyle={styles.frameImage}>
                        <Text style={styles.header}>GIÁ TRỊ GIẢI THƯỞNG KỲ CHUNG KẾT</Text>
                        <View style={styles.imageRow}>
                            <View style={{ marginTop: 40, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ marginBottom: 20, color: '#FFF2B0', fontFamily: 'Signika-Bold' }}>01 Giải Nhì</Text>
                                <Image source={nuaChi} style={styles.nuaChi} />
                                <Text style={{ fontSize: 12, textAlign: 'center', color: '#fff', fontFamily: 'Signika-SemiBold' }}>NỬA CHỈ VÀNG {`\n`}
                                    PNJ 9.999</Text>

                            </View>
                            <View style={{ position: 'absolute', top: 5, left: 140, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ marginBottom: 10, color: '#FFF2B0', fontFamily: 'Signika-Bold' }}>01 Giải Nhất</Text>
                                <Image source={motChi} style={styles.motchi} />
                                <Text style={{ fontSize: 12, paddingTop: 30, textAlign: 'center', color: '#fff', fontFamily: 'Signika-SemiBold' }}>MỘT CHỈ VÀNG {`\n`}
                                    PNJ 9.999</Text>

                            </View>
                            <View style={{ marginTop: 40, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ marginBottom: 20, color: '#FFF2B0', fontFamily: 'Signika-Bold' }}>01 Giải Ba</Text>
                                <Image source={phieu} style={styles.nuaChi} />
                                <Text style={{ fontSize: 12, textAlign: 'center', color: '#fff', fontFamily: 'Signika-SemiBold' }}>PHIẾU MUA HÀNG {`\n`} 500K</Text>

                            </View>
                        </View>
                        <View style={styles.textContainer}>
                            <TouchableOpacity style={[styles.round, { position: 'absolute', top: 20, right: 60 }]} onPress={() => navigation.navigate('FinalScreen')}>
                                <Image source={chungket} style={styles.imageRound3} />
                                <Text style={{ textAlign: 'center', color: '#FFE933', fontFamily: 'Signika-SemiBold' }} >15-12-2021</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.round, { position: 'absolute', left: 65 }]} onPress={() => navigation.navigate('RoundSecondScreen')}>
                                <Image source={vong2} style={styles.image} />
                                <Text style={{ textAlign: 'center', color: '#FFE933', fontFamily: 'Signika-SemiBold' }}>Tết tranh {`\n`} tài</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.round, { position: 'absolute', right: 65, bottom: 20 }]} onPress={() => navigation.navigate('RoundFirstScreen')}>
                                <Image source={vong1} style={styles.image} />
                                <Text style={{ textAlign: 'center', color: '#FFE933', fontFamily: 'Signika-Bold' }}>
                                    Đáp nhanh {`\n`}
                                    tranh lì xì</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    frame: {
        width: '100%',
        height: '85%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    frameImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    imageRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingLeft: 40,
        paddingRight: 32,
    },
    textContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    frameText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 20,
    },
    nuaChi: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    motchi: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    header: {
        fontSize: 15,
        fontFamily: 'Signika-Bold',
        marginTop: 15,
        color: '#FFF2B0'
    },
    image: {
        width: 80,
        height: 110,
        resizeMode: 'contain',
    },
    imageRound3: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
    },
    round: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default CompetitionScreen;

// import React, { useState } from 'react';
// import { View, Text, StyleSheet, ImageBackground, Image, Dimensions } from 'react-native';
// import { useNavigation, NavigationProp } from '@react-navigation/native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { RootStackParamList } from '@/src/type/RootStackParamList';
// import AttendanceModal from '@/src/components/modal/attendance';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import CustomButton from '@/src/components/ui/CustomButton';

// const backgroundImage = require('../../../assets/image/compettion.png');
// const centerImage = require('../../../assets/image/Frame2.png');
// const nuaChi = require('../../../assets/image/NUACHI.png');
// const motChi = require('../../../assets/image/motchi.png');
// const vong1 = require('../../../assets/image/vong1.png');
// const vong2 = require('../../../assets/image/vong2.png');
// const chungket = require('../../../assets/image/chungket.png');

// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

// const CompetitionScreen = () => {
//     const [modalVisible, setModalVisible] = useState(false);
//     const navigation = useNavigation<NavigationProp<RootStackParamList>>();

//     return (
//         <SafeAreaView style={styles.safeArea}>
//             <ImageBackground source={backgroundImage} style={[styles.background, { width: screenWidth, height: screenHeight }]} resizeMode="cover">
//                 <View style={styles.container}>
//                     <ImageBackground source={centerImage} style={styles.frame} imageStyle={styles.frameImage}>
//                         <Text style={styles.header}>GIÁ TRỊ GIẢI THƯỞNG KỲ CHUNG KẾT</Text>
//                         <View style={styles.imageRow}>
//                             <View style={{ marginTop: 40, justifyContent: 'center', alignItems: 'center' }}>
//                                 <Text style={{ marginBottom: 20, color: '#FFF2B0', fontFamily: 'Signika-Bold' }}>01 Giải Nhì</Text>
//                                 <Image source={nuaChi} style={styles.nuaChi} />
//                                 <Text style={{ textAlign: 'center', color: '#fff', fontFamily: 'Signika-SemiBold' }}>NỬA CHỈ VÀNG {`\n`} PNJ 9.999</Text>
//                             </View>
//                             <View style={{ marginBottom: 30, justifyContent: 'center', alignItems: 'center' }}>
//                                 <Text style={{ marginBottom: 10, color: '#FFF2B0', fontFamily: 'Signika-Bold' }}>01 Giải Nhất</Text>
//                                 <Image source={motChi} style={styles.motchi} />
//                                 <Text style={{ paddingTop: 20, textAlign: 'center', color: '#fff', fontFamily: 'Signika-SemiBold' }}>MỘT CHỈ VÀNG {`\n`} PNJ 9.999</Text>
//                             </View>
//                             <View style={{ marginTop: 40, justifyContent: 'center', alignItems: 'center' }}>
//                                 <Text style={{ marginBottom: 20, color: '#FFF2B0', fontFamily: 'Signika-Bold' }}>01 Giải Ba</Text>
//                                 <Image source={nuaChi} style={styles.nuaChi} />
//                                 <Text style={{ textAlign: 'center', color: '#fff', fontFamily: 'Signika-SemiBold' }}>PHIẾU MUA HÀNG {`\n`} 500K</Text>
//                             </View>
//                         </View>
//                         <View style={styles.textContainer}>
//                             <View style={[styles.round, { marginLeft: 100 }]}>
//                                 <Image source={chungket} style={styles.imageRound3} />
//                                 <Text style={{ textAlign: 'center', color: '#fff', fontFamily: 'Signika-SemiBold' }}>15-12-2021</Text>
//                             </View>
//                             <View style={[styles.round, styles.vong2Container]}>
//                                 <Image source={vong2} style={styles.vong2Image} />
//                                 <Text style={{ textAlign: 'center', color: '#fff', fontFamily: 'Signika-SemiBold' }}>Tết tranh {`\n`} tài</Text>
//                             </View>
//                             <View style={[styles.round, styles.vong1Container]}>
//                                 <Image source={vong1} style={styles.vong1Image} />
//                                 <Text style={{ textAlign: 'center', color: '#fff', fontFamily: 'Signika-SemiBold' }}>
//                                     Đáp nhanh {`\n`}
//                                     tranh lì xì</Text>
//                             </View>
//                         </View>
//                     </ImageBackground>
//                 </View>
//             </ImageBackground>
//         </SafeAreaView>
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
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     frame: {
//         width: '100%',
//         height: '85%',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     frameImage: {
//         width: '100%',
//         height: '100%',
//         resizeMode: 'contain',
//     },
//     imageRow: {
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         width: '100%',
//         paddingHorizontal: 32,
//     },
//     textContainer: {
//         flex: 2,
//         justifyContent: 'center',
//         alignItems: 'center',
//         width: '100%',
//     },
//     frameText: {
//         color: '#fff',
//         fontSize: 18,
//         fontWeight: 'bold',
//         textAlign: 'center',
//         padding: 20,
//     },
//     nuaChi: {
//         width: 50,
//         height: 50,
//         resizeMode: 'contain',
//     },
//     motchi: {
//         width: 50,
//         height: 50,
//         resizeMode: 'contain',
//     },
//     header: {
//         fontSize: 15,
//         fontFamily: 'Signika-Bold',
//         marginTop: 15,
//         color: '#FFF2B0'
//     },
//     image: {
//         width: 80,
//         height: 110,
//         resizeMode: 'contain',
//     },
//     imageRound3: {
//         width: 100,
//         height: 80,
//         resizeMode: 'contain',
//     },
//     round: {
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     vong2Container: {
//         position: 'absolute',

//         left: 65,
//         // marginRight: 130,
//     },
//     vong2Image: {
//         width: 90, // Điều chỉnh kích thước riêng cho vong2
//         height: 110,
//         resizeMode: 'contain',
//     },
//     vong1Container: {
//         marginLeft: 120,
//         marginBottom: 100,
//     },
//     vong1Image: {
//         width: 80,
//         height: 110,
//         resizeMode: 'contain',
//     },
// });

// export default CompetitionScreen;