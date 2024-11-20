import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { RootStackParamList } from '@/src/type/RootStackParamList';
import AttendanceModal from '@/src/components/modal/attendance';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '@/src/components/ui/CustomButton';
import CounterComponent from '@/src/components/Counter/Counter';
import CustomText from '@/src/components/ui/CustomText';
import { Alert } from 'react-native';

const backgroundImage = require('../../../assets/image/doiLiXi.png');
const voucher100Image = require('../../../assets/image/100k.png');
const voucher50Image = require('../../../assets/image/50k.png');

const footerImage = require('../../../assets/image/GroupRed.png');
const footerCloudy = require('../../../assets/image/GroupCloudy.png');
const frameImage = require('../../../assets/image/frameLixi.png');

const SupermarketScreen = () => {
    const [userLixi, setUserLixi] = useState(110); // Số lượng lì xì hiện có của người dùng
    const [voucher50Count, setVoucher50Count] = useState(0); // Số lượng phiếu 50k muốn đổi
    const [voucher100Count, setVoucher100Count] = useState(0); // Số lượng phiếu 100k muốn đổi

    // const [selectedVoucher, setSelectedVoucher] = useState<string | null>(null); // Loại phiếu mua hàng được chọn
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    // const [opacity, setOpacity] = useState(1);
    // const [modalVisible, setModalVisible] = useState(false);
    // const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const handleExchange = () => {
        const requiredLixi = voucher50Count * 22 + voucher100Count * 44;
        if (userLixi >= requiredLixi) {

            setUserLixi(prev => prev - requiredLixi);
            Alert.alert(
                'Thành công',
                `Bạn đã đổi thành công: 
                - Phiếu 50k: ${voucher50Count} 
                - Phiếu 100k: ${voucher100Count}`
            );
            setVoucher50Count(0);
            setVoucher100Count(0);
        } else {
            Alert.alert('Lỗi', 'Bạn không đủ lì xì để đổi số lượng phiếu này.');
        }
    };
    return (
        <SafeAreaView style={styles.safeArea}>
            <ImageBackground source={backgroundImage} style={styles.background} resizeMode="cover">

                <View style={styles.container}>
                    <Text style={styles.header}>Siêu thị phụ kiện</Text>

                    <ImageBackground source={frameImage} style={styles.frame} imageStyle={styles.frameImage}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={voucher100Image} />
                                <Text style={{ color: '#FFFFFF' }}>(Còn lại: 2500)</Text>

                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <CustomText style={styles.text}>Phiếu mua hàng {`\n`} 100k</CustomText>
                                <Text style={{ color: '#FFFFFF', marginBottom: 10 }}>Yêu cầu: 44 lì xì</Text>
                                {/* <CounterComponent /> */}
                                <CounterComponent count={voucher100Count} setCount={setVoucher100Count} />

                            </View>
                        </View>
                    </ImageBackground>
                    <ImageBackground source={frameImage} style={styles.frame} imageStyle={styles.frameImage}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={voucher50Image} />
                                <Text style={{ color: '#FFFFFF' }}>(Còn lại: 5000)</Text>

                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <CustomText style={styles.text}>Phiếu mua hàng {`\n`} 50k</CustomText>
                                <Text style={{ color: '#FFFFFF', marginBottom: 10 }}>Yêu cầu: 22 lì xì</Text>
                                {/* <CounterComponent /> */}
                                <CounterComponent count={voucher50Count} setCount={setVoucher50Count} />
                            </View>

                        </View>
                    </ImageBackground>

                    <ImageBackground source={footerImage} style={styles.footer} imageStyle={styles.footerImage}>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', zIndex: 1, }}>
                            <CustomText style={styles.number}>
                                Bạn đang có{' '}
                                <Text style={styles.highlightedNumber}>{userLixi}</Text>
                                {' '}lì xì
                            </CustomText>

                            <CustomButton title='Đổi ngay' style={styles.button} onPress={handleExchange} />


                        </View>


                        <Image source={footerCloudy} style={[styles.footerImage, styles.overlayImage]} />

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
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'green'
    },
    header: {
        fontSize: 22,
        color: '#C2030B',
        marginTop: 16,
        fontFamily: 'Signika-Bold',
        textTransform: 'uppercase',
    },
    button: {
        width: 120,
        height: 40,
        // padding: 8,
        // borderRadius: 20,
        // paddingHorizontal: 20
    },

    buttonText: {
        color: '#cc0000',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    centerImage: {
        width: '100%',
        resizeMode: 'contain',
    },
    frame: {
        marginTop: 20,
        // backgroundColor: 'red',
        width: 300,
        height: 220,

        justifyContent: 'center',
        alignItems: 'center',
    },
    frameImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    frameText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 20,
    },
    footer: {
        top: 20,
        width: '100%',
        height: 120,
        // position: 'absolute',
        // bottom: -35,
    },
    footerImage: {
        width: '100%',
        height: '140%',
        resizeMode: 'cover',
    },
    overlayImage: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: 80,
        resizeMode: 'cover',
    },
    text: {
        color: '#fff0ac',
        fontSize: 18,
        fontFamily: 'Signika-Bold',
        textAlign: 'center',
        marginBottom: 5
    },
    number: {
        margin: 8,
        fontSize: 18,
        color: '#fff',
        fontFamily: 'Signika-Bold'
    },
    highlightedNumber: {
        color: '#FFD700', // Ví dụ màu vàng cho số 11
        fontSize: 22, // Tăng kích thước cho nổi bật hơn nếu cần
        fontFamily: 'Signika-Bold'
    },
});

export default SupermarketScreen;


