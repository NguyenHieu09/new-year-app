


import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TabCK from '@/src/components/tabCK/TabCK';

const backgroundImage = require('../../../assets/image/BXH.png');
const centerImage = require('../../../assets/image/frameCK.png');
const hang1 = require('../../../assets/image/vang.png');
const hang2 = require('../../../assets/image/bac.png');
const face1 = require('../../../assets/image/face1.png');
const face2 = require('../../../assets/image/face2.png');

const xepHang1 = require('../../../assets/image/xep1.png');
const xepHang2 = require('../../../assets/image/xep2.png');
const xepHang = require('../../../assets/image/xephang.png');
const hangCuaToi = require('../../../assets/image/cuaToi.png');


const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

type RankDataKey = 'Tỉnh' | 'Toàn quốc' | 'Chung kết';

const rankData: Record<RankDataKey, { xepHang: number; thanhVien: string; liXi: number }[]> = {
    "Tỉnh": [
        {
            xepHang: 1,
            thanhVien: "Nguyễn Hoàng Đăng Khoa",
            liXi: 999
        },
        {
            xepHang: 2,
            thanhVien: "Nguyễn Thị Khánh Linh",
            liXi: 80
        },
        {
            "xepHang": 3,
            "thanhVien": "Phạm Văn Nam",
            "liXi": 65
        },
        {
            "xepHang": 4,
            "thanhVien": "Trần Minh Phú",
            "liXi": 54
        },
        {
            "xepHang": 5,
            "thanhVien": "Lê Thị Thu Hằng",
            "liXi": 30
        },
        // {
        //     xepHang: 6,
        //     thanhVien: "Nguyễn Thị Trung Hiếu",
        //     liXi: 12
        // }
    ],
    "Toàn quốc": [
        {
            xepHang: 1,
            thanhVien: "Nguyễn Hoàng Đăng Khoa",
            liXi: 999
        },
        {
            xepHang: 2,
            thanhVien: "Nguyễn Thị Khánh Linh",
            liXi: 80
        },
        {
            xepHang: 3,
            thanhVien: "Lê Thị Quỳnh Trâm",
            liXi: 72
        },
        {
            xepHang: 4,
            thanhVien: "Đoàn Phước Đức",
            liXi: 68
        },
        {
            xepHang: 5,
            thanhVien: "Đinh Quang Trung",
            liXi: 46
        },
        // {
        //     xepHang: 6,
        //     thanhVien: "Nguyễn Thị Trung Hiếu",
        //     liXi: 12
        // }
    ],
    "Chung kết": [
        {
            xepHang: 1,
            thanhVien: "Nguyễn Hoàng Đăng Khoa",
            liXi: 999
        },
        {
            xepHang: 2,
            thanhVien: "Nguyễn Thị Khánh Linh",
            liXi: 80
        },
        {
            xepHang: 3,
            thanhVien: "Lê Thị Quỳnh Trâm",
            liXi: 72
        },
        {
            "xepHang": 4,
            "thanhVien": "Phạm Thị Thảo My",
            "liXi": 65
        },
        {
            "xepHang": 5,
            "thanhVien": "Trần Công Minh",
            "liXi": 50
        },
        // {
        //     xepHang: 6,
        //     thanhVien: "Nguyễn Thị Trung Hiếu",
        //     liXi: 12
        // }
    ]
}

const FinalScreen = () => {
    const [selectedTab, setSelectedTab] = useState<RankDataKey>('Tỉnh'); // Tab được chọn

    const handleProvincePress = () => {
        setSelectedTab('Tỉnh');
    };

    const handleNationwidePress = () => {
        setSelectedTab('Toàn quốc');
    };

    const handleFinalPress = () => {
        setSelectedTab('Chung kết');
    };

    const renderRankData = () => {
        return rankData[selectedTab].map((item, index) => {
            if (item.xepHang === 1) {
                return (
                    <ImageBackground key={index} source={xepHang1} style={[styles.rank1]} imageStyle={styles.rank1Image}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <ImageBackground source={face2} style={[styles.avatar, { left: 20 }]} />
                            <Text style={[styles.rankText, { color: '#FFE933', }]}>{item.thanhVien}</Text>
                            <Text style={{ color: 'white', fontFamily: 'Signika-Bold' }}>{item.liXi}</Text>
                            <Text style={{ color: 'white', fontFamily: 'Signika-Bold', marginHorizontal: 9 }}>Lì xì</Text>
                        </View>
                    </ImageBackground>
                );
            } else if (item.xepHang === 2) {
                return (
                    <ImageBackground key={index} source={xepHang2} style={[styles.rank1]} imageStyle={styles.rank1Image}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <ImageBackground source={face2} style={[styles.avatar, {}]} />
                            <Text style={[styles.rankText, { color: '#FFE933', left: -10 }]}>{item.thanhVien}</Text>
                            <Text style={{ color: 'white', fontFamily: 'Signika-Bold' }}>{item.liXi}</Text>
                            <Text style={{ color: 'white', fontFamily: 'Signika-Bold', marginHorizontal: 9 }}>Lì xì</Text>
                        </View>
                    </ImageBackground>
                );
            } else {
                return (
                    <ImageBackground key={index} source={xepHang} style={[styles.rank1]} imageStyle={styles.rank1Image}>
                        <View style={styles.rankContainer}>
                            <Text style={styles.rankNumber}>{item.xepHang}</Text>
                            <ImageBackground source={face2} style={[styles.avatar, { left: 16 }]} />
                            <Text style={[styles.rankText, { color: '#FFE933' }]}>{item.thanhVien}</Text>
                            <Text style={{ color: 'white', fontFamily: 'Signika-Bold', right: -15 }}>{item.liXi}</Text>
                            <Text style={{ color: 'white', fontFamily: 'Signika-Bold', marginHorizontal: 11 }}>Lì xì</Text>
                        </View>
                    </ImageBackground>
                );
            }
        });
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ImageBackground
                source={backgroundImage}
                style={[styles.background, { width: screenWidth, height: screenHeight }]}
                resizeMode="cover"
            >
                <View style={styles.container}>
                    <Text style={styles.title}>BẢNG XẾP HẠNG</Text>
                    <ImageBackground
                        source={centerImage}
                        style={styles.frame}
                        imageStyle={styles.frameImage}
                    >
                        <View style={styles.rankRow}>
                            {/* Hạng 1 */}
                            {rankData[selectedTab][0] && (
                                <ImageBackground source={hang1} style={styles.rankBox} imageStyle={styles.rankImage}>
                                    <ImageBackground source={face1} style={styles.faceImage} />
                                    <Text style={[styles.rankText, { width: 100, }]}>{rankData[selectedTab][0].thanhVien}</Text>
                                </ImageBackground>
                                // <ImageBackground source={hang1} style={styles.rankBox} imageStyle={styles.rankImage}>
                                //     <ImageBackground source={face1} style={styles.faceImage} />
                                //     <Text style={styles.rankText}>{rankData[selectedTab][0].thanhVien}</Text>
                                // </ImageBackground>
                            )}

                            {/* Hạng 2 */}
                            {rankData[selectedTab][1] && (
                                <ImageBackground source={hang2} style={[styles.rankBox,]} imageStyle={[styles.rankImage, { marginTop: 10 }]}>
                                    <ImageBackground source={face2} style={[styles.faceImage,]} />
                                    <Text style={[styles.rankText, { color: '#333333', width: 100, }]}>{rankData[selectedTab][1].thanhVien}</Text>

                                </ImageBackground>
                            )}
                        </View>

                        {renderRankData()}

                        <ImageBackground source={xepHang} style={[styles.rank1, { bottom: 10, position: 'absolute' }]} imageStyle={styles.rank1Image}>
                            <Image source={hangCuaToi} style={styles.hangCuaToi} />

                            <View style={styles.rankContainer}>
                                <Text style={styles.rankNumber}>11</Text>
                                <ImageBackground source={face2} style={[styles.avatar, { left: 18 }]} />
                                <Text style={[styles.rankText, { color: '#FFE933', right: 6 }]}>Nguyễn Thị Trung Hiếu</Text>
                                <Text style={{ color: 'white', fontFamily: 'Signika-Bold', right: 5 }}>20</Text>
                                <Text style={{ color: 'white', fontFamily: 'Signika-Bold', right: 6 }}>Lì xì</Text>
                            </View>
                        </ImageBackground>

                        {/* <ImageBackground source={xepHang} style={[styles.rank1, { bottom: 10, position: 'absolute' }]} imageStyle={styles.rank1Image}>
                            <Image source={hangCuaToi} style={{ width: 100, height: 20, resizeMode: 'contain' }} />

                            <View style={styles.rankContainer}>
                                <Text style={styles.rankNumber}>11</Text>
                                <ImageBackground source={face2} style={[styles.avatar]} />
                                <Text style={[styles.rankText, { color: '#FFE933', right: 6 }]}>Nguyễn Thị Trung Hiếu</Text>
                                <Text style={{ color: 'white', fontFamily: 'Signika-Bold', right: 5 }}>20</Text>
                                <Text style={{ color: 'white', fontFamily: 'Signika-Bold', right: 6 }}>Lì xì</Text>
                            </View>
                        </ImageBackground> */}

                    </ImageBackground>

                    <TabCK
                        onProvincePress={handleProvincePress}
                        onNationwidePress={handleNationwidePress}
                        onFinalPress={handleFinalPress}
                        style={styles.tabCK}
                    />

                </View>
            </ImageBackground >
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    background: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontFamily: 'Signika-Bold',
        fontSize: 24,
        marginTop: 10,
        color: '#fee892',
    },
    frame: {
        marginTop: 70,
        width: 340,
        height: 520, // Điều chỉnh chiều cao để tạo không gian cho TabCK
        alignItems: 'center',
        overflow: 'visible', // Cho phép phần tử vượt ra ngoài
        // backgroundColor: 'blue',
    },
    frameImage: {
        width: 340,
        height: 520,
        resizeMode: 'contain',
    },
    tabCK: {
        position: 'absolute', // Định vị tuyệt đối
        top: '12%', // Đẩy TabCK xuống dưới 80% của chiều cao frame

    },
    rankRow: {
        flexDirection: 'row', // Đặt các phần tử cùng hàng
        justifyContent: 'center', // Căn khoảng cách giữa các hạng
        alignItems: 'flex-end', // Căn giữa theo trục dọc
        marginVertical: 20, // Khoảng cách với phần trên
        width: '100%', // Chiếm toàn bộ chiều rộng khung
        // backgroundColor: 'blue',


    },
    rankBox: {
        width: 120, // Kích thước của từng hạng
        height: 120,
        alignItems: 'center', // Căn giữa nội dung theo trục ngang
        justifyContent: 'flex-end', // Căn giữa nội dung theo trục dọc

    },
    rankImage: {
        resizeMode: 'contain', // Đảm bảo ảnh vừa với khung

    },
    faceImage: {
        width: 60, // Kích thước ảnh face
        height: 50,
        marginBottom: 8, // Khoảng cách giữa ảnh face và text
        resizeMode: 'contain', // Đảm bảo ảnh vừa với khung

    },
    rankText: {

        paddingHorizontal: 5,
        fontFamily: 'Signika-Bold', // Font chữ
        fontSize: 12, // Kích thước chữ
        color: '#ffffff', // Màu chữ
        textAlign: 'center', // Căn giữa chữ
    },
    rank1Image: {
        width: 290,
        height: 50,
        resizeMode: 'contain'

    },
    rank1: {
        alignItems: 'flex-end',
        justifyContent: 'center',

        // backgroundColor: 'blue',
        width: 290,
        height: 50,
        marginBottom: 5,
    },
    avatar: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        marginRight: 18,
    },
    rankContainer: {
        width: 290,
        flexDirection: 'row', // Hiển thị các thành phần cùng hàng
        alignItems: 'center', // Căn giữa theo trục dọc
        justifyContent: 'space-between', // Căn giữa các thành phần
    },
    rankNumber: {
        fontSize: 18,
        color: 'white',
        fontFamily: 'Signika-Bold',
        width: 30, // Cố định không gian cho thứ hạng
        textAlign: 'left', // Văn bản căn lề trái
        left: 30
    },
    liXiText: {
        fontSize: 18,
        color: 'white',
        fontFamily: 'Signika-Bold',
        marginHorizontal: 11,
        textAlign: 'right', // Văn bản căn lề phải
    },
    hangCuaToi: {
        position: 'absolute',
        bottom: 35, // Đẩy ảnh xuống dưới để một nửa nằm ngoài
        left: '50%', // Căn giữa theo chiều ngang
        transform: [{ translateX: -50 }], // Căn giữa theo chiều ngang
        width: 100,
        height: 20,
        resizeMode: 'contain',
    },
});

export default FinalScreen;