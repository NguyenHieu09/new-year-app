
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
    },
    {
        backgroundImage1: require('../../../assets/image/bannerVit.png'),
        banner: require('../../../assets/image/FrameAnhKim.png'),
        title: 'ANH HÙNG SIÊU BẢO VỆ',
        description: "Trở thành anh hùng bảo vệ màn hình: chạm nhanh và chính xác để bảo vệ lớp chống thấm khỏi nguy cơ bị xuyên thủng, điểm càng cao, bạn càng bất bại trước đối thủ!",
        time: '12:00 - 13:00 | 18:00 - 20:00',
        type: 'anh hùng',
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
                {currentData ? (
                    <ImageBackground source={currentData.backgroundImage1} style={styles.background} imageStyle={styles.frameImage}>
                        <View style={styles.container}>
                            <Text style={[styles.text, { marginBottom: 10 }]}>
                                {currentData.title}
                            </Text>
                            <View style={{ paddingVertical: 10, justifyContent: 'center', marginBottom: 10 }}>
                                <View style={{ marginHorizontal: 30 }}>
                                    <Text style={{ color: '#333333', textAlign: 'center' }}>
                                        {currentData.description}
                                    </Text>
                                </View>
                            </View>

                            <Image source={currentData.banner} style={styles.banner} />

                            <CustomButton title='Tìm đối thủ' style={styles.button} onPress={() => navigation.navigate('StartGameScreen', { type: currentData.type })} />
                            <View style={{ width: '90%', backgroundColor: '#b0050b', borderWidth: 2, borderColor: '#fff613', borderRadius: 10, bottom: 0, padding: 10 }}>
                                <Text style={styles.message}>Lưu ý: Khung giờ mỗi ngày cho phép thi đấu</Text>
                                <Text style={[styles.highlightedNumber, { fontWeight: '700' }]}>
                                    {currentData.time}
                                </Text>
                            </View>
                        </View>
                    </ImageBackground>
                ) : (
                    <Text style={styles.text}>Không có dữ liệu cho loại: {type}</Text>
                )}
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
        width: 300,
        resizeMode: 'contain'
    },
    button: {
        height: 40,
        margin: 20
    },
    message: {
        color: 'white',
        fontSize: 13,
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
