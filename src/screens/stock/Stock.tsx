
// // import React, { useState } from 'react';
// // import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView, Dimensions } from 'react-native';
// // import { useNavigation, NavigationProp } from '@react-navigation/native';
// // import { LinearGradient } from 'expo-linear-gradient';
// // import { RootStackParamList } from '@/src/type/RootStackParamList';
// // import AttendanceModal from '@/src/components/modal/attendance';
// // import { SafeAreaView } from 'react-native-safe-area-context';
// // import CustomButton from '@/src/components/ui/CustomButton';
// // import LuckyDraw from '@/src/components/liXiVang/LuckyDraw';
// // import VoucherCard from '@/src/components/liXiVang/VoucherCard';
// // import CustomText from '@/src/components/ui/CustomText';
// // import Header from '@/src/components/liXiVang/Header';

// // const backgroundImage = require('../../../assets/image/Kholoc.png');
// // const centerImage = require('../../../assets/image/logo.png');
// // const frameImage = require('../../../assets/image/trangchu.png');
// // const motChi = require('../../../assets/image/motchi.png');
// // const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

// // const StockScreen = () => {
// //     const [opacity, setOpacity] = useState(1);
// //     const [modalVisible, setModalVisible] = useState(false);
// //     const navigation = useNavigation<NavigationProp<RootStackParamList>>();

// //     return (
// //         <SafeAreaView style={styles.safeArea}>
// //             <ImageBackground source={backgroundImage} style={[styles.background, { width: screenWidth, height: screenHeight }]} resizeMode="cover">
// //                 <View style={styles.container}>
// //                     <CustomText style={styles.title}>KHO LỘC</CustomText>
// //                     <Image source={centerImage} style={styles.centerImage} />
// //                     <Header />
// //                     <View style={styles.tabContainer}>

// //                         {/* <CustomText style={styles.tab}>Lắc lộc vàng</CustomText>
// //                         <CustomText style={styles.tab}>Lì xì vàng</CustomText>
// //                         <CustomText style={styles.tab}>Mã số may mắn</CustomText> */}
// //                     </View>

// //                     <LuckyDraw />


// //                 </View>
// //             </ImageBackground>
// //         </SafeAreaView>
// //     );
// // };

// // const styles = StyleSheet.create({
// //     safeArea: {
// //         flex: 1,
// //     },
// //     background: {
// //         flex: 1,
// //     },
// //     container: {
// //         flex: 1,
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //         padding: 16,
// //     },
// //     header: {
// //         fontSize: 24,
// //         fontWeight: 'bold',
// //         marginBottom: 16,
// //     },
// //     button: {
// //         padding: 8,
// //         borderRadius: 20,
// //         paddingHorizontal: 20
// //     },
// //     buttonText: {
// //         color: '#cc0000',
// //         fontSize: 22,
// //         fontWeight: 'bold',
// //         textAlign: 'center',
// //     },
// //     centerImage: {
// //         width: '100%',
// //         resizeMode: 'contain',
// //     },


// //     title: {
// //         fontSize: 24,
// //         textAlign: 'center',
// //         marginBottom: 10,
// //         color: '#FFF2B0',
// //         fontFamily: 'Signika-Bold'
// //     },
// //     subTitle: {
// //         fontSize: 18,
// //         textAlign: 'center',
// //         marginBottom: 20,
// //     },
// //     tabContainer: {
// //         flexDirection: 'row',
// //         justifyContent: 'space-around',
// //         marginBottom: 20,
// //     },
// //     tab: {
// //         fontSize: 16,
// //         fontWeight: 'bold',
// //         color: '#FF0000',
// //     },
// //     scrollContainer: {
// //         flex: 1,
// //     },
// //     itemContainer: {
// //         backgroundColor: '#FFFFFF',
// //         borderRadius: 10,
// //         padding: 10,
// //         marginBottom: 10,
// //         alignItems: 'center',
// //     },
// //     image: {
// //         width: 80,
// //         height: 80,
// //         marginBottom: 10,
// //     },
// //     itemText: {
// //         fontSize: 16,
// //         fontWeight: 'bold',
// //     },
// //     detail: {
// //         fontSize: 14,
// //         color: '#555',
// //     },
// //     total: {
// //         fontSize: 18,
// //         fontWeight: 'bold',
// //         textAlign: 'center',
// //         marginTop: 20,
// //     },
// // });

// // export default StockScreen;

// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView, Dimensions } from 'react-native';
// import { useNavigation, NavigationProp } from '@react-navigation/native';
// import { RootStackParamList } from '@/src/type/RootStackParamList';
// import AttendanceModal from '@/src/components/modal/attendance';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import LuckyDraw from '@/src/components/liXiVang/LuckyDraw';
// import CustomText from '@/src/components/ui/CustomText';
// import Header from '@/src/components/liXiVang/Header';

// const backgroundImage = require('../../../assets/image/Kholoc.png');
// const centerImage = require('../../../assets/image/logo.png');
// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

// const StockScreen = () => {
//     const navigation = useNavigation<NavigationProp<RootStackParamList>>();
//     const [currentCategory, setCurrentCategory] = useState('Lì xì vàng');

//     const handleLuckyShakePress = () => {
//         console.log('Lắc Lộc Vàng pressed');
//         setCurrentCategory('Lắc lộc vàng'); // Cập nhật category thành 'Lắc lộc vàng'
//     };

//     const handleLuckyDrawPress = () => {
//         console.log('Lì xì vàng pressed');
//         setCurrentCategory('Lì xì vàng'); // Cập nhật category thành 'Lì xì vàng'
//     };


//     // Hàm xử lý khi nhấn nút "Mã Số May Mắn"
//     const handleLuckyCodePress = () => {
//         // Thực hiện hành động cho nút Mã Số May Mắn
//         console.log('Mã Số May Mắn pressed');
//         // Có thể điều hướng đến một màn hình khác
//         // navigation.navigate('LuckyCodeScreen');
//     };



//     return (
//         <SafeAreaView style={styles.safeArea}>
//             <ImageBackground source={backgroundImage} style={[styles.background, { width: screenWidth, height: screenHeight }]} resizeMode="cover">
//                 <View style={styles.container}>
//                     <CustomText style={styles.title}>KHO LỘC</CustomText>
//                     <Image source={centerImage} style={styles.centerImage} />
//                     {/* Gọi Header và truyền hàm xử lý */}
//                     <Header onLuckyShakePress={handleLuckyShakePress} onLuckyCodePress={handleLuckyCodePress} onLuckyDrawPress={handleLuckyDrawPress} />
//                     <LuckyDraw category={currentCategory} />
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
//         padding: 16,
//     },
//     title: {
//         fontSize: 26,
//         textAlign: 'center',
//         marginBottom: 10,
//         color: '#fef2ba',
//         fontFamily: 'Signika-Bold'
//     },
//     centerImage: {
//         width: '100%',
//         resizeMode: 'contain',
//     },
// });

// export default StockScreen;

// StockScreen.tsx
import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Image, Dimensions } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@/src/type/RootStackParamList';
import { SafeAreaView } from 'react-native-safe-area-context';
import LuckyDraw from '@/src/components/liXiVang/LuckyDraw';
// import LotteryDraw from '@/src/components/liXiVang/LotteryDraw';
import CustomText from '@/src/components/ui/CustomText';
import Header from '@/src/components/liXiVang/Header';
import LotteryDraw from '@/src/components/lottery/LotteryDraw';

const backgroundImage = require('../../../assets/image/Kholoc.png');
const centerImage = require('../../../assets/image/logo.png');
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const StockScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [currentCategory, setCurrentCategory] = useState('Lì xì vàng');

    const handleLuckyShakePress = () => {
        setCurrentCategory('Lắc lộc vàng');
    };

    const handleLuckyDrawPress = () => {
        setCurrentCategory('Lì xì vàng');
    };

    const handleLuckyCodePress = () => {
        setCurrentCategory('Mã Số May Mắn');
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ImageBackground source={backgroundImage} style={[styles.background, { width: screenWidth, height: screenHeight }]} resizeMode="cover">
                <View style={styles.container}>
                    <CustomText style={styles.title}>KHO LỘC</CustomText>
                    <Image source={centerImage} style={styles.centerImage} />
                    <Header
                        onLuckyShakePress={handleLuckyShakePress}
                        onLuckyCodePress={handleLuckyCodePress}
                        onLuckyDrawPress={handleLuckyDrawPress}
                    />
                    {currentCategory === 'Lắc lộc vàng' || currentCategory === 'Lì xì vàng' ? (
                        <LuckyDraw category={currentCategory} />
                    ) : (
                        <LotteryDraw category={currentCategory} />

                    )}
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
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 26,
        textAlign: 'center',
        marginBottom: 10,
        color: '#fef2ba',
        fontFamily: 'Signika-Bold'
    },
    centerImage: {
        width: '100%',
        resizeMode: 'contain',
    },
});

export default StockScreen;
