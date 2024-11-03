

// import React from 'react';
// import { View, FlatList, StyleSheet, Text } from 'react-native';
// import VoucherCard from '@/src/components/liXiVang/VoucherCard'; // Import VoucherCard
// import CustomText from '../ui/CustomText';


// // const data = [
// //     { id: '1', image: require('../../../assets/image/phieu.png'), title: 'Phiếu mua hàng 500K', quantity: 5, status: 'Đã nhận' },
// //     { id: '2', image: require('../../../assets/image/phieu.png'), title: 'Phiếu mua hàng 200K', quantity: 4, status: 'Đã nhận' },
// //     { id: '3', image: require('../../../assets/image/phieu.png'), title: 'Phiếu mua hàng 100K', quantity: 3, status: 'Chưa nhận' },
// //     { id: '4', image: require('../../../assets/image/motchi.png'), title: 'Bộ đôi phụ kiện Vĩnh Tường', quantity: 1, status: 'Chưa nhận' },
// //     { id: '5', image: require('../../../assets/image/motchi.png'), title: 'Một chỉ vàng PNJ 9999', quantity: 1, status: 'Chưa nhận' },
// //     { id: '6', image: require('../../../assets/image/NUACHI.png'), title: 'Nửa chỉ vàng PNJ 9999', quantity: 1, status: 'Chưa nhận' },
// // ];

// const data = [
//     // Dữ liệu cho Lì xì vàng
//     { id: '1', image: require('../../../assets/image/phieu.png'), title: 'Phiếu mua hàng 500K', quantity: 5, status: 'Đã nhận', category: 'Lì xì vàng' },
//     { id: '2', image: require('../../../assets/image/phieu.png'), title: 'Phiếu mua hàng 200K', quantity: 4, status: 'Đã nhận', category: 'Lì xì vàng' },
//     { id: '3', image: require('../../../assets/image/phieu.png'), title: 'Phiếu mua hàng 100K', quantity: 3, status: 'Chưa nhận', category: 'Lì xì vàng' },
//     { id: '4', image: require('../../../assets/image/motchi.png'), title: 'Bộ đôi phụ kiện Vĩnh Tường', quantity: 1, status: 'Chưa nhận', category: 'Lì xì vàng' },
//     { id: '5', image: require('../../../assets/image/motchi.png'), title: 'Một chỉ vàng PNJ 9999', quantity: 1, status: 'Chưa nhận', category: 'Lì xì vàng' },
//     { id: '6', image: require('../../../assets/image/NUACHI.png'), title: 'Nửa chỉ vàng PNJ 9999', quantity: 1, status: 'Chưa nhận', category: 'Lì xì vàng' },

//     // Dữ liệu cho Lắc lộc vàng
//     { id: '7', image: require('../../../assets/image/phieu.png'), title: 'Phiếu mua hàng 300K', quantity: 2, status: 'Đã nhận', category: 'Lắc lộc vàng' },
//     { id: '8', image: require('../../../assets/image/phieu.png'), title: 'Phiếu mua hàng 100K', quantity: 1, status: 'Đã nhận', category: 'Lắc lộc vàng' },
//     { id: '9', image: require('../../../assets/image/motchi.png'), title: 'Bộ đôi tai nghe Bluetooth', quantity: 1, status: 'Chưa nhận', category: 'Lắc lộc vàng' },
//     { id: '10', image: require('../../../assets/image/motchi.png'), title: 'Đồng hồ thông minh', quantity: 1, status: 'Chưa nhận', category: 'Lắc lộc vàng' },
// ];



// const LuckyDraw = () => {
//     return (
//         <View style={styles.container}>
//             <FlatList
//                 data={data}
//                 keyExtractor={(item) => item.id}
//                 renderItem={({ item }) => (
//                     <View style={styles.voucherContainer}>
//                         <VoucherCard
//                             title={item.title}
//                             quantity={item.quantity}
//                             status={item.status}
//                             image={item.image}
//                         />
//                     </View>
//                 )}
//                 numColumns={3} // Số cột
//                 columnWrapperStyle={styles.columnWrapper}
//             />
//             <View style={styles.totalContainer}>
//                 <CustomText style={styles.total}>Tổng số quà chưa nhận thưởng là: </CustomText>
//                 <CustomText style={[styles.total, { color: '#c2030b' }]}>110</CustomText>
//             </View>
//             {/* <Text style={styles.total}>Tổng số quà chưa nhận thưởng là: 110</Text> */}
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff9e1',
//         width: 360,
//         borderRadius: 15,
//         borderColor: '#FFD700',
//         borderWidth: 2,
//     },
//     columnWrapper: {
//         justifyContent: 'space-between',
//     },
//     voucherContainer: {
//         flex: 1,
//         paddingHorizontal: 5,
//         backgroundColor: '#fff9e1',
//         // justifyContent: 'center',
//         // alignItems: 'center',
//     },
//     total: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         textAlign: 'center',
//         color: '#732f2f'
//     },
//     totalContainer: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         margin: 10,
//     }
// });

// export default LuckyDraw;

import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import VoucherCard from '@/src/components/liXiVang/VoucherCard';
import CustomText from '../ui/CustomText';

// Define an interface for the LuckyDraw component props
interface LuckyDrawProps {
    category: string; // Specify that category is a string
}

const allData = [
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
    const filteredData = allData.filter(item => item.category === category); // Lọc dữ liệu theo loại

    return (
        <View style={styles.container}>
            <FlatList
                data={filteredData}
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
                <CustomText style={[styles.total, { color: '#c2030b' }]}>
                    {filteredData.length}
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
