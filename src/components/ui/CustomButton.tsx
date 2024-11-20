
// import React from 'react';
// import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps, View } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';

// interface CustomButtonProps extends TouchableOpacityProps {
//     title: string;
//     subtitle?: string;
//     colors?: string[];
// }

// const CustomButton: React.FC<CustomButtonProps> = ({ title, subtitle, colors = ['#fff700', '#ffcc00', '#ff9900'], style, ...props }) => {
//     return (
//         <TouchableOpacity {...props}>

//             <LinearGradient colors={colors} style={styles.button}>
//                 <View style={[styles.borderContainer, style]}>
//                     <Text style={styles.buttonText}>{title}</Text>
//                     {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
//                 </View>
//             </LinearGradient>

//         </TouchableOpacity>
//     );
// };

// const styles = StyleSheet.create({
//     borderContainer: {
//         borderRadius: 20,
//         borderColor: '#fcd804',
//         borderWidth: 2,
//     },
//     button: {
//         padding: 3,
//         borderRadius: 18,
//         paddingHorizontal: 20,
//     },
//     buttonText: {
//         color: '#cc0000',
//         fontSize: 20,
//         textAlign: 'center',
//         fontFamily: 'Signika-Bold',
//     },
//     subtitle: {
//         color: '#cc0000',
//         fontSize: 14,
//         textAlign: 'center',
//         fontFamily: 'Signika-SemiBold',
//     },
// });

// export default CustomButton;

import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface CustomButtonProps extends TouchableOpacityProps {
    title: string;
    subtitle?: string;
    // colors?: string[];
    colors?: [string, string, ...string[]];
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, subtitle, colors = ['#fff700', '#ffcc00', '#ff9900'], style, ...props }) => {
    return (
        <TouchableOpacity {...props} style={[styles.borderContainer, style]}>
            <LinearGradient colors={colors} style={styles.button}>
                <View style={styles.content}>
                    <Text style={styles.buttonText}>{title}</Text>
                    {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    borderContainer: {
        borderRadius: 20,
        borderColor: '#fcd804', // Màu viền
        borderWidth: 2, // Độ rộng viền
        width: '100%',
    },
    button: {
        flex: 1,
        borderRadius: 18,
        padding: 3,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {

        justifyContent: 'center',
        alignItems: 'center',
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
        marginTop: -5,
    },
});

export default CustomButton;
