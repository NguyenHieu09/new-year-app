import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../redux-toolkit/store';
import { register } from '../../redux-toolkit/slice/UserSlice';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@/src/type/RootStackParamList';
import { SafeAreaView } from 'react-native-safe-area-context';

const backgroundImage = require('../../../assets/image/dn-dk.png');

const SignUpScreen = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch<AppDispatch>();
    const { status, error } = useSelector((state: RootState) => state.auth);
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

    const handleRegister = () => {
        if (fullName && email && password) {
            dispatch(register({ fullName, email, password }))
                .unwrap()
                .then(() => {
                    console.log('Đăng ký thành công');
                    navigation.navigate('Home');
                })
                .catch((err) => {
                    console.error('Lỗi đăng ký:', err);
                });
        } else {
            alert("Vui lòng điền đầy đủ thông tin.");
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ImageBackground source={backgroundImage} style={[styles.background, { width: screenWidth, height: screenHeight }]} resizeMode="cover">
                <View style={styles.container}>
                    <Text style={styles.header}>Đăng Ký</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Họ và tên"
                        value={fullName}
                        onChangeText={setFullName}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Mật khẩu"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />

                    <TouchableOpacity style={styles.button} onPress={handleRegister}>
                        <Text style={styles.buttonText}>Đăng Ký</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                        <Text style={styles.linkText}>Bạn đã có tài khoản? Đăng Nhập</Text>
                    </TouchableOpacity>

                    {status === 'loading' && <Text style={styles.loadingText}>Đang đăng ký...</Text>}
                    {status === 'failed' && <Text style={styles.errorText}>{error}</Text>}
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
        padding: 16,
        justifyContent: 'center',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 12,
        borderRadius: 8,
        marginBottom: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
    button: {
        backgroundColor: '#C2030B',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 16,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    linkText: {
        color: '#C2030B',
        fontSize: 16,
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
    loadingText: {
        marginTop: 8,
        color: 'blue',
        textAlign: 'center',
    },
    errorText: {
        marginTop: 8,
        color: 'red',
        textAlign: 'center',
    },
});

export default SignUpScreen;