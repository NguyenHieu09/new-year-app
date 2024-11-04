
import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import CustomText from '../ui/CustomText';

interface HeaderProps {
    onLuckyShakePress: () => void;
    onLuckyCodePress: () => void;
    onLuckyDrawPress: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLuckyShakePress, onLuckyCodePress, onLuckyDrawPress }) => {
    // Thiết lập mặc định cho activeButton là 'luckyShake'
    const [activeButton, setActiveButton] = useState<string>('luckyShake');

    // Hàm để xử lý việc nhấn nút
    const handlePress = (buttonName: string, onPress: () => void) => {
        setActiveButton(buttonName); // Cập nhật nút đang được nhấn
        onPress(); // Gọi hàm onPress được truyền vào
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.button, activeButton === 'luckyShake' && styles.activeButton]}
                onPress={() => handlePress('luckyShake', onLuckyShakePress)}
            >
                <CustomText style={[styles.buttonText, activeButton === 'luckyShake' && styles.activeButtonText]}>Lắc lộc vàng</CustomText>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, activeButton === 'luckyDraw' && styles.activeButton]}
                onPress={() => handlePress('luckyDraw', onLuckyDrawPress)}
            >
                <CustomText style={[styles.buttonText, activeButton === 'luckyDraw' && styles.activeButtonText]}>Lì xì vàng</CustomText>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, activeButton === 'luckyCode' && styles.activeButton]}
                onPress={() => handlePress('luckyCode', onLuckyCodePress)}
            >
                <CustomText style={[styles.buttonText, activeButton === 'luckyCode' && styles.activeButtonText]}>Mã số {`\n`} may mắn</CustomText>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',

        backgroundColor: '#fff9e1',
        width: 360,
        borderRadius: 10,
        marginVertical: 10,
    },
    button: {
        backgroundColor: '#fff9e1',
        padding: 6,
        borderRadius: 8,
        flex: 1,
        alignItems: 'center',
        margin: 5,
        justifyContent: 'center',

    },
    activeButton: {
        backgroundColor: '#C0392B', // Màu sắc mới khi nút được nhấn
    },
    buttonText: {
        color: '#C0392B', // Màu sắc văn bản mặc định
        fontSize: 18,
        fontFamily: 'Signika-Bold',
        textAlign: 'center',
    },
    activeButtonText: {
        color: '#ffffff', // Màu sắc văn bản mới khi nút được nhấn
    },
});

export default Header;
