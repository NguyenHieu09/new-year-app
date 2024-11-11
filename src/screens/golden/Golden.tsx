import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, Dimensions } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@/src/type/RootStackParamList';
import AttendanceModal from '@/src/components/modal/attendance';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '@/src/components/ui/CustomButton';
import CustomText from '@/src/components/ui/CustomText';

const backgroundImage = require('../../../assets/image/Tranglac1.png');
const centerImage = require('../../../assets/image/POSE.png');

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const GoldenScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <SafeAreaView style={styles.safeArea}>
            <ImageBackground source={backgroundImage} style={[styles.background, { width: screenWidth, height: screenHeight }]} resizeMode="cover">
                <View style={styles.container}>
                    <View style={styles.centerImageContainer}>
                        <Image source={centerImage} style={styles.centerImage} />
                    </View>
                    <View style={styles.buttonContainer}>
                        <CustomText style={styles.number}>Bạn có 11 lượt lắc</CustomText>
                        <CustomButton
                            title="Lắc 1 lượt"
                            onPress={() => setModalVisible(true)}
                            style={styles.button}
                        />
                        <CustomButton
                            title="Lắc 10 lượt"
                            onPress={() => setModalVisible(true)}
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
        justifyContent: 'center',
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
    },
    number: {
        fontSize: 18,
        marginTop: 20,
    },
    // button: {
    //     borderRadius: 20,
    //     marginTop: 5,
    //     width: 150
    // },
    button: {
        borderRadius: 20,
        marginTop: 5,
        width: 150,
        height: 38,
        justifyContent: 'center',
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
});

export default GoldenScreen;