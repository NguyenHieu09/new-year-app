// import React, { useState } from 'react';
// import { View, StyleSheet, TouchableOpacity } from 'react-native';
// import CustomText from '../ui/CustomText';

// interface HeaderProps {
//     onProvincePress: () => void;
//     onNationwidePress: () => void;
//     onFinalPress: () => void;
// }

// const TabCK: React.FC<HeaderProps> = ({ onProvincePress, onNationwidePress, onFinalPress }) => {
//     const [activeButton, setActiveButton] = useState<string>('Tỉnh');

//     // Hàm để xử lý việc nhấn nút
//     const handlePress = (buttonName: string, onPress: () => void) => {
//         setActiveButton(buttonName); // Cập nhật nút đang được nhấn
//         onPress(); // Gọi hàm onPress được truyền vào
//     };

//     return (
//         <View style={styles.container}>
//             <TouchableOpacity
//                 style={[styles.button, activeButton === 'Tỉnh' && styles.activeButton]}
//                 onPress={() => handlePress('Tỉnh', onProvincePress)}
//             >
//                 <CustomText style={[styles.buttonText, activeButton === 'Tỉnh' && styles.activeButtonText]}>Tỉnh</CustomText>
//             </TouchableOpacity>
//             <TouchableOpacity
//                 style={[styles.button, activeButton === 'Toàn quốc' && styles.activeButton]}
//                 onPress={() => handlePress('Toàn quốc', onNationwidePress)}
//             >
//                 <CustomText style={[styles.buttonText, activeButton === 'Toàn quốc' && styles.activeButtonText]}>Toàn quốc</CustomText>
//             </TouchableOpacity>
//             <TouchableOpacity
//                 style={[styles.button, activeButton === 'Chung kết' && styles.activeButton]}
//                 onPress={() => handlePress('Chung kết', onFinalPress)}
//             >
//                 <CustomText style={[styles.buttonText, activeButton === 'Chung kết' && styles.activeButtonText]}>Chung kết</CustomText>
//             </TouchableOpacity>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flexDirection: 'row',
//         backgroundColor: '#fff9e1',
//         width: 300,
//         borderRadius: 10,
//         marginVertical: 10,
//     },
//     button: {
//         backgroundColor: '#fff9e1',
//         padding: 6,
//         borderRadius: 8,
//         flex: 1,
//         alignItems: 'center',
//         margin: 5,
//         justifyContent: 'center',
//     },
//     activeButton: {
//         backgroundColor: '#C0392B', // Màu sắc mới khi nút được nhấn
//     },
//     buttonText: {
//         color: '#C0392B', // Màu sắc văn bản mặc định
//         fontSize: 18,
//         fontFamily: 'Signika-Bold',
//         textAlign: 'center',
//     },
//     activeButtonText: {
//         color: '#ffffff', // Màu sắc văn bản mới khi nút được nhấn
//     },
// });

// export default TabCK;

import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import CustomText from '../ui/CustomText';

interface HeaderProps {
    onProvincePress: () => void;
    onNationwidePress: () => void;
    onFinalPress: () => void;
    style?: StyleProp<ViewStyle>; // Thêm thuộc tính style
}

const TabCK: React.FC<HeaderProps> = ({ onProvincePress, onNationwidePress, onFinalPress, style }) => {
    const [activeButton, setActiveButton] = useState<string>('Tỉnh');

    // Hàm để xử lý việc nhấn nút
    const handlePress = (buttonName: string, onPress: () => void) => {
        setActiveButton(buttonName); // Cập nhật nút đang được nhấn
        onPress(); // Gọi hàm onPress được truyền vào
    };

    return (
        <View style={[styles.container, style]}>
            <TouchableOpacity
                activeOpacity={1}
                style={[styles.button, activeButton === 'Tỉnh' && styles.activeButton]}
                onPress={() => handlePress('Tỉnh', onProvincePress)}
            >
                <CustomText style={[styles.buttonText, activeButton === 'Tỉnh' && styles.activeButtonText]}>
                    Tỉnh
                </CustomText>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={1}
                style={[styles.button, activeButton === 'Toàn quốc' && styles.activeButton]}
                onPress={() => handlePress('Toàn quốc', onNationwidePress)}
            >
                <CustomText style={[styles.buttonText, activeButton === 'Toàn quốc' && styles.activeButtonText]}>
                    Toàn quốc
                </CustomText>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={1}
                style={[styles.button, activeButton === 'Chung kết' && styles.activeButton]}
                onPress={() => handlePress('Chung kết', onFinalPress)}
            >
                <CustomText style={[styles.buttonText, activeButton === 'Chung kết' && styles.activeButtonText]}>
                    Chung kết
                </CustomText>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // backgroundColor: '#fff9e1',
        width: 300,
        borderRadius: 10,
        marginVertical: 10,
    },
    button: {
        backgroundColor: '#fff9e1',
        padding: 5,
        paddingVertical: 8,
        borderRadius: 8,
        flex: 1,
        alignItems: 'center',
        marginVertical: 5,
        justifyContent: 'center',
        // borderWidth: 1
    },
    activeButton: {
        backgroundColor: '#b7080f', // Màu sắc mới khi nút được nhấn
    },
    buttonText: {
        color: '#9b5a17', // Màu sắc văn bản mặc định
        fontSize: 18,
        fontFamily: 'Signika-Bold',
        textAlign: 'center',
    },
    activeButtonText: {
        color: '#ffe933', // Màu sắc văn bản mới khi nút được nhấn
    },
});

export default TabCK;

