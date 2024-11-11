
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface CustomButtonProps extends TouchableOpacityProps {
    title: string;
    subtitle?: string;
    colors?: string[];
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, subtitle, colors = ['#fff700', '#ffcc00', '#ff9900'], style, ...props }) => {
    return (
        <TouchableOpacity {...props}>
            <View style={[styles.borderContainer, style]}>
                <LinearGradient colors={colors} style={styles.button}>
                    <Text style={styles.buttonText}>{title}</Text>
                    {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
                </LinearGradient>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    borderContainer: {
        borderRadius: 20,
        borderColor: '#fcd804', // Màu viền
        borderWidth: 2,
    },
    button: {
        padding: 3,
        borderRadius: 18, // Giảm đi một chút so với borderContainer để thấy viền rõ hơn
        paddingHorizontal: 20,
    },
    buttonText: {
        color: '#cc0000',
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'Signika-Bold',
    },
    subtitle: {
        color: '#cc0000',
        fontSize: 14,
        textAlign: 'center',
        fontFamily: 'Signika-SemiBold',
    },
});

export default CustomButton;

