import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { AppDispatch, RootState } from '../../redux-toolkit/store';
import { login } from '../../redux-toolkit/slice/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@/src/type/RootStackParamList';

const backgroundImage = require('../../../assets/image/dn-dk.png');

const SignInScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch<AppDispatch>();
    const { status, error } = useSelector((state: RootState) => state.auth);
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handleSignIn = () => {
        if (email && password) {
            dispatch(login({ email, password }))
                .unwrap()
                .then(() => {
                    console.log('Đăng nhập thành công');
                    navigation.navigate('Home');
                })
                .catch((err) => {
                    console.error('Lỗi đăng nhập:', err);
                });
        } else {
            console.log("Vui lòng điền đầy đủ thông tin.");
        }
    };

    useEffect(() => {
        if (error) {
            console.error('Lỗi:', error);
        }
    }, [error]);

    return (
        <ImageBackground source={backgroundImage} style={styles.background} resizeMode="cover">
            <View style={styles.container}>
                <Text style={styles.header}>Đăng Nhập</Text>

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
                <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                    <Text style={styles.buttonText}>
                        {status === 'loading' ? 'Đang đăng nhập...' : 'Đăng Nhập'}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.linkText}>Bạn chưa có tài khoản? Đăng Ký</Text>
                </TouchableOpacity>

                {status === 'failed' && <Text style={styles.errorText}>{error}</Text>}
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
    errorText: {
        marginTop: 8,
        color: 'red',
        textAlign: 'center',
    },
});

export default SignInScreen;