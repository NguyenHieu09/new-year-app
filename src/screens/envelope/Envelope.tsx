import CustomButton from '@/src/components/ui/CustomButton';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const backgroundImage = require('../../../assets/image/dapNhanh.png');
const banner = require('../../../assets/image/banner.png');


const EnvelopeScreen = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <LinearGradient
                colors={['#DC1920', '#A60006']}
                start={{ x: 0.5, y: 0.5 }}
                end={{ x: 0.5, y: 1 }}
                style={styles.container}
            >
                <Text style={styles.header}>THÁNH LÌ XÌ</Text>
                <ImageBackground source={backgroundImage} style={styles.background} imageStyle={styles.frameImage}>
                    <View style={styles.container}>
                        <Text style={[styles.text, { margin: 15, }]}>Đáp nhanh tranh lì xì</Text>
                        <View style={{ paddingVertical: 10, justifyContent: 'center', backgroundColor: 'rgba(200, 180, 130, 0.5)' }}>
                            <View style={{ marginHorizontal: 26 }}>
                                <Text style={[styles.text, { fontSize: 18 }]}>Nhiệm vụ</Text>
                                <Text style={{ color: '#333333' }}>
                                    Trả lời đúng và nhanh nhất 5 câu hỏi bạn sẽ chiến thắng!
                                </Text>
                            </View>
                        </View>

                        <Image source={banner} style={styles.banner} />
                        <CustomButton title='Tìm đối thủ' style={styles.button} />
                        <View style={{ width: '90%', backgroundColor: '#b0050b', borderWidth: 2, borderColor: '#fff613', borderRadius: 10 }}>
                            <Text style={styles.message}>
                                Lưu ý: Người chơi chiến thắng sẽ nhận được{' '}
                                <Text style={[styles.highlightedNumber, { fontWeight: '700' }]}> +1 li xì</Text>
                                {' '}
                                . Mỗi người chơi chỉ nhận được{' '}
                                <Text style={styles.highlightedNumber}> 1 lượt chơi 1 ngày.</Text>
                                {' '}

                            </Text>
                        </View>

                    </View>

                </ImageBackground>

            </LinearGradient>
        </SafeAreaView>


    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
        // justifyContent: 'center',
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
        width: 260,
        // height: 500,
        resizeMode: 'contain'
    },
    button: {
        height: 40,
        margin: 20
    },
    message: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        padding: 10,
        // marginBottom: 10,
    },
    text: {
        color: '#C2030B',
        fontSize: 20,
        fontFamily: 'Signika-SemiBold',

    },
    highlightedNumber: {
        color: '#FFD700', // Ví dụ màu vàng cho số 11
        // fontSize: 22, // Tăng kích thước cho nổi bật hơn nếu cần

    },
});

export default EnvelopeScreen;
