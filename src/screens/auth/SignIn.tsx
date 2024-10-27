// import React, { useState, useEffect } from 'react';
// import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
// import { AppDispatch, RootState } from '../../redux-toolkit/store';
// import { login } from '../../redux-toolkit/slice/UserSlice';
// import { useDispatch, useSelector } from 'react-redux';

// const SignInScreen = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const dispatch = useDispatch<AppDispatch>();
//     const { user, status, error } = useSelector((state: RootState) => state.auth);

//     const handleSignIn = () => {
//         if (email && password) {
//             dispatch(login({ email, password }))
//                 .unwrap()
//                 .then(() => {
//                     console.log('Sign in successful');
//                 })
//                 .catch((err) => {
//                     console.error('Sign in error:', err);
//                 });
//         } else {
//             console.log("Please fill in both fields.");
//         }
//     };

//     useEffect(() => {
//         if (error) {
//             console.error('Error:', error);
//         }
//     }, [error]);

//     return (
//         <View style={styles.container}>
//             <Text style={styles.header}>Sign In</Text>

//             <TextInput
//                 style={styles.input}
//                 placeholder="Email"
//                 value={email}
//                 onChangeText={setEmail}
//                 keyboardType="email-address"
//             />
//             <TextInput
//                 style={styles.input}
//                 placeholder="Password"
//                 value={password}
//                 onChangeText={setPassword}
//                 secureTextEntry
//             />

//             <Button title="Sign In" onPress={handleSignIn} />

//             {status === 'loading' && <Text style={styles.loadingText}>Signing in...</Text>}
//             {status === 'failed' && <Text style={styles.errorText}>{error}</Text>}
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 16,
//         justifyContent: 'center',
//     },
//     header: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 16,
//         textAlign: 'center',
//     },
//     input: {
//         borderWidth: 1,
//         borderColor: '#ccc',
//         padding: 12,
//         borderRadius: 8,
//         marginBottom: 16,
//     },
//     loadingText: {
//         marginTop: 8,
//         color: 'blue',
//         textAlign: 'center',
//     },
//     errorText: {
//         marginTop: 8,
//         color: 'red',
//         textAlign: 'center',
//     },
// });

// export default SignInScreen;

import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { AppDispatch, RootState } from '../../redux-toolkit/store';
import { login } from '../../redux-toolkit/slice/UserSlice';
import { useDispatch, useSelector } from 'react-redux';

const SignInScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch<AppDispatch>();
    const { user, status, error } = useSelector((state: RootState) => state.auth);

    const handleSignIn = () => {
        if (email && password) {
            dispatch(login({ email, password }))
                .unwrap()
                .then(() => {
                    console.log('Sign in successful');
                })
                .catch((err) => {
                    console.error('Sign in error:', err);
                });
        } else {
            console.log("Please fill in both fields.");
        }
    };

    useEffect(() => {
        if (error) {
            console.error('Error:', error);
        }
    }, [error]);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Sign In</Text>

            {user ? (
                <View style={styles.userInfo}>
                    <Text style={styles.userText}>Welcome, {user.fullName}</Text>
                    <Text style={styles.userText}>Email: {user.email}</Text>
                </View>
            ) : (
                <>
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
                    <Button title="Sign In" onPress={handleSignIn} />
                </>
            )}

            {status === 'loading' && <Text style={styles.loadingText}>Signing in...</Text>}
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
    userInfo: {
        alignItems: 'center',
    },
    userText: {
        fontSize: 18,
        marginBottom: 8,
    },
});

export default SignInScreen;