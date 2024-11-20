import React, { useState } from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import VoucherCard from '@/src/components/liXiVang/VoucherCard';
import CustomText from '../ui/CustomText';
import LotteryCard from './LotteryCard';

// Define an interface for the GiftList component props
interface LotteryDrawProps {
    category: string;
}

interface Gift {
    id: number;
    code: string;
    image: any;
    status: string;
}

// Quà tặng cho KỲ QUAY SỐ 1
const giftsRound1 = [
    { id: 1, code: "MBO1C 568356", image: require("../../../assets/image/ticket.png"), status: "Chưa nhận" },
    { id: 2, code: "MBO1C 568356", image: require("../../../assets/image/ticket.png"), status: "Đã nhận" },
    { id: 3, code: "MBO1C 568356", image: require("../../../assets/image/ticket.png"), status: "Chưa nhận" },
];

// Quà tặng cho KỲ QUAY SỐ 2
const giftsRound2 = [
    { id: 4, code: "MBO1C 568356", image: require("../../../assets/image/ticket.png"), status: "Đã nhận" },
    { id: 5, code: "MBO1C 568356", image: require("../../../assets/image/ticket.png"), status: "Chưa nhận" },
    { id: 6, code: "MBO1C 568356", image: require("../../../assets/image/ticket.png"), status: "Đã nhận" },
    { id: 7, code: "MBO1C 568356", image: require("../../../assets/image/ticket.png"), status: "Chưa nhận" },
    { id: 8, code: "MBO1C 568356", image: require("../../../assets/image/ticket.png"), status: "Đã nhận" }
];

const LotteryDraw: React.FC<LotteryDrawProps> = ({ category }) => {
    const [selectedButton, setSelectedButton] = useState<number>(0);
    const [round1Gifts, setRound1Gifts] = useState<Gift[]>(giftsRound1);
    const [round2Gifts, setRound2Gifts] = useState<Gift[]>(giftsRound2);

    const handleButtonPress = (index: number) => {
        setSelectedButton(index);
    };

    const handleGiftPress = (id: number) => {
        if (selectedButton === 0) {
            setRound1Gifts((prev) =>
                prev.map((gift) =>
                    gift.id === id && gift.status === "Chưa nhận"
                        ? { ...gift, status: "Đã nhận" }
                        : gift
                )
            );
        } else {
            setRound2Gifts((prev) =>
                prev.map((gift) =>
                    gift.id === id && gift.status === "Chưa nhận"
                        ? { ...gift, status: "Đã nhận" }
                        : gift
                )
            );
        }
    };

    const currentGifts = selectedButton === 0 ? round1Gifts : round2Gifts;


    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5, backgroundColor: '#ffebb9', borderRadius: 10 }}>
                <TouchableOpacity
                    style={[styles.button, selectedButton === 0 && styles.selectedButton]}
                    onPress={() => handleButtonPress(0)}
                >
                    <CustomText style={[styles.text, selectedButton === 0 && styles.selectedText]}>KỲ QUAY SỐ 1</CustomText>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, selectedButton === 1 && styles.selectedButton]}
                    onPress={() => handleButtonPress(1)}
                >
                    <CustomText style={[styles.text, selectedButton === 1 && styles.selectedText]}>KỲ QUAY SỐ 2</CustomText>
                </TouchableOpacity>
            </View>

            <FlatList
                data={currentGifts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.voucherContainer} onPress={() => handleGiftPress(item.id)}>
                        <LotteryCard
                            title={item.code}
                            status={item.status}
                            image={item.image}
                        />
                    </TouchableOpacity>
                )}
                numColumns={3} // Đảm bảo có 3 cột
                columnWrapperStyle={styles.columnWrapper}
            />

            {/* <View style={styles.totalContainer}>
                <CustomText style={styles.total}>Tổng số quà chưa nhận thưởng là: </CustomText>
                <CustomText style={[styles.total, { color: '#c2030b' }]}>{currentGifts.length}</CustomText>
            </View> */}
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
        // justifyContent: 'space-between', // Căn giữa cột
    },
    voucherContainer: {
        flex: 1,
        paddingHorizontal: 6,
        maxWidth: '33%',
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
    button: {
        width: '50%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffebb9',
        borderRadius: 10,
    },
    selectedButton: {
        backgroundColor: '#C1030C', // Màu nền khi nút được chọn
    },
    text: {
        color: '#C4040B',
        fontSize: 18,
        fontFamily: 'Signika-Bold',
    },
    selectedText: {
        color: '#FFFFFF', // Màu chữ khi nút được chọn
    },
});

export default LotteryDraw;


