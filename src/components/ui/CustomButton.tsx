import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface CustomButtonProps extends TouchableOpacityProps {
    title: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, style, ...props }) => {
    return (
        <TouchableOpacity {...props}>
            <LinearGradient colors={['#fff700', '#ffcc00', '#ff9900']} style={[styles.button, style]}>
                <Text style={styles.buttonText}>{title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 3,
        borderRadius: 20,
        paddingHorizontal: 20,
    },
    buttonText: {
        color: '#cc0000',
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'Signika-Bold',
    },
});

export default CustomButton;