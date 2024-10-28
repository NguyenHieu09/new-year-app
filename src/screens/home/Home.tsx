import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { RootStackParamList } from '@/src/type/RootStackParamList';

const backgroundImage = require('../../../assets/image/dn-dk.png');
const centerImage = require('../../../assets/image/laclocvang.png');
const frameImage = require('../../../assets/image/trangchu.png');

const HomeScreen = () => {
    const [opacity, setOpacity] = useState(1);
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
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
                <TouchableOpacity
                    onPressIn={() => setOpacity(0.8)}  // Giảm opacity khi nhấn
                    onPressOut={() => setOpacity(1)}  // Khôi phục opacity khi thả
                    onPress={() => navigation.navigate('SignIn')}
                >
                    <LinearGradient
                        colors={['#fff700', '#ffcc00', '#ff9900']}
                        style={[styles.button, { opacity }]}
                    >
                        <Text style={styles.buttonText}>Tham gia ngay</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
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
    button: {
        padding: 8,
        borderRadius: 20,
        paddingHorizontal: 20
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