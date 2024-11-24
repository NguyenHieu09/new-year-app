import { RootStackParamList } from '@/src/type/RootStackParamList';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, ImageBackground, Image } from 'react-native';
import CustomButton from '../ui/CustomButton';

interface ReceiveGiftModalProps {
    visible: boolean;
    onClose: () => void;
}

const backgroundImage = require('../../../assets/image/nhanLoc.png');
const chivang = require('../../../assets/image/motchi.png');
const ticket = require('../../../assets/image/ve.png');


const ReceiveGiftModal: React.FC<ReceiveGiftModalProps> = ({ visible, onClose }) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handlePress = () => {
        onClose();
        // navigation.navigate('BottomNavigation');
    };


    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <ImageBackground
                    source={backgroundImage}
                    style={styles.background}
                    imageStyle={{ width: 330 }}
                    resizeMode="contain"
                >
                    <View style={styles.contentContainer}>
                        <Text style={styles.title}>LỘC TỚI NGẬP TRÀN</Text>
                        <Text style={styles.subtitle}>1 Chỉ vàng PNJ 9.999{"\n"}1 Mã số may mắn</Text>
                        <View style={styles.imagesRow}>
                            <Image source={chivang} style={styles.image} />
                            <Image source={ticket} style={styles.image} />
                        </View>
                        <Text style={styles.description}>
                            Chúc mừng thánh lắc,{"\n"}
                            rinh lộc mát tay anh em ơi!{"\n"}
                            tích cực săn thêm lượt lắc thôi nào!
                        </Text>
                        <CustomButton
                            title="Chia sẻ"
                            onPress={handlePress}
                            style={styles.button}
                        />
                        <CustomButton
                            title="Nhận lộc"
                            onPress={handlePress}
                            style={styles.button}
                        />
                    </View>
                </ImageBackground>

            </View>


        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    background: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 330,
        height: 530,

    },
    contentContainer: {
        marginTop: 110,
        // padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'white'
    },
    title: {

        fontSize: 18,
        fontFamily: 'Signika-Bold',
        color: '#FFE933',
        textAlign: 'center',

    },
    subtitle: {
        fontSize: 16,
        color: '#FFFFFF',
        textAlign: 'center',

    },
    description: {
        fontSize: 14,
        color: '#FFFFFF',
        textAlign: 'center',
        fontFamily: 'Signika-semibold',

        // lineHeight: 20, // Tăng khoảng cách dòng
    },
    imagesRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    image: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginHorizontal: 5,
    },
    button: {
        borderRadius: 20,
        width: 130,
        height: 38,
        justifyContent: 'center',
        marginTop: 10,
    },
});


export default ReceiveGiftModal;