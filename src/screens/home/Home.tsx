import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { RootStackParamList } from '@/src/type/RootStackParamList';
import AttendanceModal from '@/src/components/modal/attendance';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '@/src/components/ui/CustomButton';

const backgroundImage = require('../../../assets/image/dn-dk.png');
const centerImage = require('../../../assets/image/laclocvang.png');
const frameImage = require('../../../assets/image/trangchu.png');

const HomeScreen = () => {
    const [opacity, setOpacity] = useState(1);
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <SafeAreaView style={styles.safeArea}>
            <ImageBackground source={backgroundImage} style={styles.background} resizeMode="cover">
                <View style={styles.container}>
                    <Image source={centerImage} style={styles.centerImage} />
                    <ImageBackground source={frameImage} style={styles.frame} imageStyle={styles.frameImage}>
                        <Text style={styles.frameText}>
                            Lắc chắt chiu từng lượt{'\n'}
                            Nhận ngay 1 phần quà{'\n'}
                            Lắc tới bến chục lượt{'\n'}
                            Nhận một lúc 10 phần quà!
                        </Text>
                    </ImageBackground>

                    <CustomButton
                        title="Tham gia ngay"
                        onPress={() => setModalVisible(true)}
                        style={styles.button}
                    />
                    <AttendanceModal
                        visible={modalVisible}
                        onClose={() => setModalVisible(false)}
                    />
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
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    // button: {
    //     padding: 8,
    //     borderRadius: 20,
    //     paddingHorizontal: 20
    // },
    button: {
        borderRadius: 20,
        marginTop: 10,
        width: 200,
        height: 50,
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
        resizeMode: 'contain',
    },
    frame: {
        width: '90%',
        height: 'auto',
        resizeMode: 'contain',
        marginBottom: 16,
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
});

export default HomeScreen;