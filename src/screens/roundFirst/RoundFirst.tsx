import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, Dimensions } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@/src/type/RootStackParamList';
import AttendanceModal from '@/src/components/modal/attendance';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '@/src/components/ui/CustomButton';
import CustomText from '@/src/components/ui/CustomText';

const backgroundImage = require('../../../assets/image/liXiVang.png');


const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const RoundFirstScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <SafeAreaView style={styles.safeArea}>
            <ImageBackground source={backgroundImage} style={[styles.background, { width: screenWidth, height: screenHeight }]} resizeMode="cover">
                <View style={styles.container}>

                    <View style={styles.buttonContainer}>
                        <CustomText style={styles.number}>
                            Bạn đang có{' '}
                            <Text style={styles.highlightedNumber}>11</Text>
                            {' '}lì xì
                        </CustomText>
                        {/* <CustomText style={styles.number}>Bạn đang có 11 lì xì</CustomText> */}
                        <CustomButton
                            title="Thánh lì xì"
                            onPress={() => navigation.navigate('EnvelopeScreen')}
                            style={styles.button}
                        />
                        <CustomButton
                            title="Siêu thị phụ kiện"
                            onPress={() => navigation.navigate('SupermarketScreen')}
                            style={styles.button}
                        />
                    </View>

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
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 10,
    },
    centerImageContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        // backgroundColor: 'green',
    },
    buttonContainer: {
        // backgroundColor: 'green',
        alignItems: 'center',

        marginBottom: 40
    },
    number: {
        fontSize: 18,
        marginTop: 20,
        color: '#fff',
        fontFamily: 'Signika-Bold'
    },
    button: {
        borderRadius: 20,
        marginTop: 10,
        width: 190,
        height: 40,
    },
    buttonText: {
        color: '#cc0000',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    centerImage: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
        resizeMode: 'contain',
    },
    highlightedNumber: {
        color: '#FFD700', // Ví dụ màu vàng cho số 11
        fontSize: 22, // Tăng kích thước cho nổi bật hơn nếu cần
        fontFamily: 'Signika-Bold'
    },
});

export default RoundFirstScreen;