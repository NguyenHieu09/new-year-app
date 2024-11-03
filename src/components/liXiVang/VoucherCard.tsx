

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import CustomText from '../ui/CustomText';

interface VoucherCardProps {
    title: string;
    quantity: number;
    status: string;
    image: any;
}

const VoucherCard: React.FC<VoucherCardProps> = ({ title, quantity, status, image }) => {
    // Đặt màu sắc cho trạng thái
    const statusColor = status === 'Đã nhận' ? '#2E8718' : '#C2030B';

    return (
        <View style={styles.cardContainer}>
            <Image

                source={image}
                style={styles.image}
            />

            <CustomText style={styles.title}>{title}</CustomText>
            <View style={styles.dashedLine} />
            <View >
                <CustomText style={styles.quantity}>Số lượng: {quantity}</CustomText>

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
        paddingVertical: 6,
        marginTop: 10,
        width: 105,
        // marginVertical: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#FFD700',

    },
    image: {
        width: 60,
        marginBottom: 5,
        resizeMode: 'contain'
    },
    title: {
        fontSize: 13,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
        color: '#732F2F'
    },
    quantity: {
        color: '#732F2F',

    },

    statusText: {
        textAlign: 'center',
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

export default VoucherCard;
