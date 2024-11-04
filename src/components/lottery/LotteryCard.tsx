

// import React from 'react';
// import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
// import CustomText from '../ui/CustomText';

// interface LotteryCardProps {
//     title: string;
//     status: string;
//     image: any;
// }

// const LotteryCard: React.FC<LotteryCardProps> = ({ title, status, image }) => {
//     // Đặt màu sắc cho trạng thái
//     const statusColor = status === 'Đã nhận' ? '#2E8718' : '#C2030B';

//     return (
//         <View style={styles.cardContainer}>
//             <ImageBackground source={image} imageStyle={styles.backgroundImage}>
//                 <CustomText style={styles.title}>{title}</CustomText>

//             </ImageBackground>


//             <View style={styles.dashedLine} />
//             <View >


//                 <CustomText style={styles.quantity}>Trạng thái:</CustomText>
//                 <CustomText style={[styles.statusValue, { color: statusColor }]}>{status}</CustomText>

//             </View>

//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     cardContainer: {
//         backgroundColor: '#ffe3ac',
//         borderRadius: 8,
//         paddingVertical: 6,
//         marginTop: 10,
//         width: 105,
//         // marginVertical: 10,
//         alignItems: 'center',
//         borderWidth: 1,
//         borderColor: '#FFD700',

//     },
//     backgroundImage: {

//         width: 80,

//         height: 40,
//         resizeMode: 'cover',
//         marginBottom: 5,
//     },
//     image: {
//         width: 60,
//         marginBottom: 5,
//         resizeMode: 'contain'
//     },
//     title: {
//         fontSize: 13,
//         fontWeight: 'bold',
//         marginBottom: 5,
//         textAlign: 'center',
//         color: '#732F2F'
//     },
//     quantity: {
//         color: '#732F2F',

//     },

//     statusText: {
//         textAlign: 'center',
//     },
//     statusValue: {
//         textAlign: 'center',
//     },
//     dashedLine: {
//         borderBottomColor: '#732F2F',
//         borderBottomWidth: 1,
//         borderStyle: 'dashed',
//         width: '100%',
//         marginVertical: 5,
//     },
// });

// export default LotteryCard;

import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import CustomText from '../ui/CustomText';

interface LotteryCardProps {
    title: string;
    status: string;
    image: any;
}

const LotteryCard: React.FC<LotteryCardProps> = ({ title, status, image }) => {
    const statusColor = status === 'Đã nhận' ? '#2E8718' : '#C2030B';

    return (
        <View style={styles.cardContainer}>
            <ImageBackground source={image} style={styles.backgroundImage} imageStyle={styles.imageStyle}>
                <View style={styles.titleContainer}>
                    <CustomText style={styles.title}>{title}</CustomText>
                </View>
            </ImageBackground>

            <View style={styles.dashedLine} />
            <View>
                <CustomText style={styles.quantity}>Trạng thái:</CustomText>
                <CustomText style={[styles.statusValue, { color: statusColor }]}>{status}</CustomText>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#ffe3ac',
        borderRadius: 8,
        padding: 6,
        marginTop: 10,
        width: 105,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#FFD700',
        overflow: 'hidden',
    },
    backgroundImage: {
        resizeMode: 'contain',
        width: '100%',
        height: 60,  // Đặt chiều cao cố định cho background để không bị tràn
        justifyContent: 'center',  // Căn giữa nội dung bên trong
        alignItems: 'center',
        marginBottom: 5,

    },
    imageStyle: {
        resizeMode: 'cover',
    },
    titleContainer: {

        paddingHorizontal: 4,
        paddingVertical: 2,
        borderRadius: 4,
    },
    title: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#732F2F',
        textAlign: 'center',
    },
    quantity: {
        color: '#732F2F',
    },
    statusValue: {
        textAlign: 'center',
    },
    dashedLine: {
        borderBottomColor: '#732F2F',
        borderBottomWidth: 1,
        borderStyle: 'dashed',
        width: '100%',
        marginVertical: 5,
    },
});

export default LotteryCard;
