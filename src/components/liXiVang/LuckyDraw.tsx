


import React, { useState } from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import VoucherCard from '@/src/components/liXiVang/VoucherCard';
import CustomText from '../ui/CustomText';

interface LuckyDrawProps {
    category: string;
}

const initialData = [
    { id: '1', image: require('../../../assets/image/phieu.png'), title: 'Phiếu mua hàng 500K', quantity: 5, status: 'Đã nhận', category: 'Lì xì vàng' },
    { id: '2', image: require('../../../assets/image/phieu.png'), title: 'Phiếu mua hàng 200K', quantity: 4, status: 'Đã nhận', category: 'Lì xì vàng' },
    { id: '3', image: require('../../../assets/image/phieu.png'), title: 'Phiếu mua hàng 100K', quantity: 3, status: 'Chưa nhận', category: 'Lì xì vàng' },
    { id: '4', image: require('../../../assets/image/motchi.png'), title: 'Bộ đôi phụ kiện Vĩnh Tường', quantity: 1, status: 'Chưa nhận', category: 'Lì xì vàng' },
    { id: '5', image: require('../../../assets/image/motchi.png'), title: 'Một chỉ vàng PNJ 9999', quantity: 1, status: 'Chưa nhận', category: 'Lì xì vàng' },
    { id: '6', image: require('../../../assets/image/NUACHI.png'), title: 'Nửa chỉ vàng PNJ 9999', quantity: 1, status: 'Chưa nhận', category: 'Lì xì vàng' },
    { id: '7', image: require('../../../assets/image/phieu.png'), title: 'Phiếu mua hàng 300K', quantity: 2, status: 'Đã nhận', category: 'Lắc lộc vàng' },
    { id: '8', image: require('../../../assets/image/phieu.png'), title: 'Phiếu mua hàng 100K', quantity: 1, status: 'Đã nhận', category: 'Lắc lộc vàng' },
    { id: '9', image: require('../../../assets/image/motchi.png'), title: 'Bộ đôi tai nghe Bluetooth', quantity: 1, status: 'Chưa nhận', category: 'Lắc lộc vàng' },
    { id: '10', image: require('../../../assets/image/motchi.png'), title: 'Đồng hồ thông minh', quantity: 1, status: 'Chưa nhận', category: 'Lắc lộc vàng' },
];

const LuckyDraw: React.FC<LuckyDrawProps> = ({ category }) => {
    const [data, setData] = useState(initialData);

    const handleUpdateStatus = (id: string) => {
        setData((prevData) =>
            prevData.map((item) =>
                item.id === id && item.status === 'Chưa nhận'
                    ? { ...item, status: 'Đã nhận' }
                    : item
            )
        );
    };

    const filteredData = data.filter((item) => item.category === category);
    const unclaimedItems = filteredData.filter(item => item.status === 'Chưa nhận'); // Lọc các mục chưa nhận
    const totalUnclaimed = unclaimedItems.reduce((total, item) => total + item.quantity, 0); // Tính tổng số lượng quà chưa nhận

    return (
        <View style={styles.container}>
            <FlatList
                data={filteredData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.voucherContainer}
                        onPress={() => handleUpdateStatus(item.id)}
                    >
                        <VoucherCard
                            title={item.title}
                            quantity={item.quantity}
                            status={item.status}
                            image={item.image}
                        />
                    </TouchableOpacity>
                )}
                numColumns={3}
                columnWrapperStyle={styles.columnWrapper}
            />
            <View style={styles.totalContainer}>
                <CustomText style={styles.total}>Tổng số quà chưa nhận thưởng là: </CustomText>
                <CustomText style={[styles.total, { color: '#c2030b' }]}>
                    {/* {filteredData.filter((item) => item.status === 'Chưa nhận').length} */}
                    {totalUnclaimed}
                </CustomText>
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

export default LuckyDraw;

