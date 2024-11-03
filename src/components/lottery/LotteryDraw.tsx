import React from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import VoucherCard from '@/src/components/liXiVang/VoucherCard';
import CustomText from '../ui/CustomText';

// Define an interface for the GiftList component props
interface LotteryDrawProps {
    category: string;
}

const allGifts = [
    { id: '1', image: require('../../../assets/image/ticket.png'), title: 'Bộ quà tặng spa', quantity: 2, status: 'Chưa nhận', category: 'Quà tặng' },
    { id: '2', image: require('../../../assets/image/ticket.png'), title: 'Thẻ quà tặng 300K', quantity: 10, status: 'Đã nhận', category: 'Quà tặng' },
    { id: '3', image: require('../../../assets/image/ticket.png'), title: 'Sách hướng dẫn nấu ăn', quantity: 5, status: 'Chưa nhận', category: 'Quà tặng' },
    { id: '4', image: require('../../../assets/image/ticket.png'), title: 'Máy xay sinh tố', quantity: 3, status: 'Chưa nhận', category: 'Quà tặng' },
    { id: '5', image: require('../../../assets/image/ticket.png'), title: 'Bộ đồ uống cao cấp', quantity: 4, status: 'Đã nhận', category: 'Quà tặng' },
    { id: '6', image: require('../../../assets/image/ticket.png'), title: 'Voucher ăn uống 200K', quantity: 1, status: 'Chưa nhận', category: 'Quà tặng' },
];

const LotteryDraw: React.FC<LotteryDrawProps> = ({ category }) => {

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#ffebb9' }}>
                <TouchableOpacity
                >
                    <CustomText >KỲ QUAY SỐ 1</CustomText>
                </TouchableOpacity>
                <TouchableOpacity
                >
                    <CustomText >KỲ QUAY SỐ 2</CustomText>
                </TouchableOpacity>
            </View>


            <FlatList
                data={allGifts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.voucherContainer}>
                        <VoucherCard
                            title={item.title}
                            quantity={item.quantity}
                            status={item.status}
                            image={item.image}
                        />
                    </View>
                )}
                numColumns={3}
                columnWrapperStyle={styles.columnWrapper}
            />
            <View style={styles.totalContainer}>
                <CustomText style={styles.total}>Tổng số quà chưa nhận thưởng là: </CustomText>
                <CustomText style={[styles.total, { color: '#c2030b' }]}>{allGifts.length}</CustomText>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff9e1',
        width: 360,
        borderRadius: 15,
        borderColor: '#FFD700',
        borderWidth: 2,
    },
    columnWrapper: {
        justifyContent: 'space-between',
    },
    voucherContainer: {
        flex: 1,
        paddingHorizontal: 5,
    },
    total: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#732f2f',
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
});

export default LotteryDraw;
