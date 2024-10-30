import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';

const CustomText: React.FC<TextProps> = ({ style, ...props }) => {
    return <Text style={[styles.text, style]} {...props} />;
};

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Signika-Regular',
    },
});

export default CustomText;