import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState, AppDispatch } from '../../redux-toolkit/store';
import { register } from '../../redux-toolkit/slice/UserSlice';

const RegisterScreen = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch<AppDispatch>();
    const { status, error } = useSelector((state: RootState) => state.auth);

    const handleRegister = () => {
        if (fullName && email && password) {
            dispatch(register({ fullName, email, password }));
        } else {
            alert("Please fill in all fields.");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Register</Text>

            <TextInput
                style={styles.input}
                placeholder="Full Name"
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
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <Button title="Register" onPress={handleRegister} />

            {status === 'loading' && <Text style={styles.loadingText}>Registering...</Text>}
            {status === 'failed' && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
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

export default RegisterScreen;