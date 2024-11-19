// // import React, { useEffect, useState } from 'react';
// // import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, Dimensions } from 'react-native';
// // import { SafeAreaView } from 'react-native-safe-area-context';

// // const backgroundImage = require('../../../assets/image/banVit.png');
// // const centerImage = require('../../../assets/image/frameGameVit.png');

// // const dinh1 = require('../../../assets/image/dinh1.png');
// // const dinh2 = require('../../../assets/image/dinh2.png');
// // const dinh3 = require('../../../assets/image/dinh3.png');

// // const frameAvatar = require('../../../assets/image/frameAvatar.png');
// // const frameAvatar1 = require('../../../assets/image/frameAvatar1.png');
// // const avatar = require('../../../assets/image/face2.png');
// // const avatarOtherUser = require('../../../assets/image/face1.png');
// // const vs = require('../../../assets/image/vs.png');
// // const clock = require('../../../assets/image/clock.png');

// // const mayKhoan = require('../../../assets/image/mayKhoan.png');
// // const tuiDinh = require('../../../assets/image/tuiDinh.png');

// // const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

// // const GameBanVitScreen = () => {
// //     const [visibleImages, setVisibleImages] = useState([false, false, false]);
// //     const [dinhCount, setDinhCount] = useState(0);
// //     const [timeLeft, setTimeLeft] = useState(60); // Thời gian bắt đầu là 60 giây

// //     useEffect(() => {
// //         // Giảm thời gian mỗi giây
// //         if (timeLeft > 0) {
// //             const timer = setInterval(() => {
// //                 setTimeLeft(prevTime => prevTime - 1);
// //             }, 1000);

// //             // Dọn dẹp khi component bị hủy hoặc thời gian hết
// //             return () => clearInterval(timer);
// //         }
// //     }, [timeLeft]);

// //     const formatTime = (seconds: number) => {
// //         const minutes = Math.floor(seconds / 60);
// //         const secondsLeft = seconds % 60;
// //         return `${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;
// //     };

// //     const handlePress = (index: number) => {
// //         setVisibleImages(prev => {
// //             const updated = [false, false, false];
// //             updated[index] = true;
// //             return updated;
// //         });
// //         setDinhCount(prev => prev + 1);
// //     };

// //     const handlePressOut = () => {
// //         setVisibleImages([false, false, false]);
// //     };

// //     return (
// //         <SafeAreaView style={styles.safeArea}>
// //             <ImageBackground source={backgroundImage} style={[styles.background, { width: screenWidth, height: screenHeight }]} resizeMode="cover">
// //                 <View style={styles.container}>
// //                     <View style={{ width: '90%', left: -10, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
// //                         <View>
// //                             <ImageBackground source={frameAvatar} style={{ width: 140, height: 70, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} imageStyle={{ width: 140, height: 70, resizeMode: 'contain' }}>
// //                                 <Image source={avatar} style={{ width: 50, height: 50, resizeMode: 'contain', marginHorizontal: 5 }} />
// //                                 <Text style={{ color: '#ffeb9d', fontSize: 20, marginLeft: 5, bottom: -16, fontWeight: '800' }}>{dinhCount}</Text>
// //                             </ImageBackground>
// //                             <Text style={styles.name}>Nguyễn Trần Ngọc Hân</Text>
// //                         </View>
// //                         <Image source={vs} style={{ width: 60, resizeMode: 'contain', bottom: -15 }} />
// //                         <View>
// //                             <ImageBackground source={frameAvatar1} style={{ width: 140, height: 70, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }} imageStyle={{ width: 140, resizeMode: 'contain' }}>
// //                                 <Text style={{ color: '#ffeb9d', fontSize: 20, bottom: -16, fontWeight: '800', marginRight: 5 }}>114</Text>
// //                                 <Image source={avatarOtherUser} style={{ marginRight: 8, width: 50, height: 50, resizeMode: 'contain' }} />
// //                             </ImageBackground>
// //                             <Text style={styles.name}>Nguyễn Lương Kiên Hào</Text>
// //                         </View>
// //                     </View>

// //                     <Text style={{ fontFamily: 'Signika-Bold', fontSize: 18, marginBottom: 8, color: '#ffffff', }}><Text>THỬ TÀI BẮN VÍT</Text></Text>
// //                     <ImageBackground source={centerImage} style={styles.frame} imageStyle={styles.frameImage}>
// //                         <ImageBackground source={clock} style={{ justifyContent: 'center', alignItems: 'center', width: 100, height: 50 }} imageStyle={styles.clock} >
// //                             <Text style={styles.time}>{formatTime(timeLeft)}</Text>
// //                         </ImageBackground>
// //                         <View style={styles.imageRow}>
// //                             <TouchableOpacity activeOpacity={1} onPressIn={() => handlePress(0)} onPressOut={handlePressOut} style={[styles.touchable, { marginTop: 40 }]}>
// //                                 {visibleImages[0] && <Image source={dinh1} style={[styles.motchi, { width: 80, height: 80 }]} />}
// //                             </TouchableOpacity>
// //                             <TouchableOpacity activeOpacity={1} onPressIn={() => handlePress(1)} onPressOut={handlePressOut} style={[styles.touchable, { position: 'absolute', top: -10, left: 155 }]}>
// //                                 {visibleImages[1] && <Image source={dinh2} style={[styles.motchi, { width: 80, height: 80 }]} />}
// //                             </TouchableOpacity>
// //                             <TouchableOpacity activeOpacity={1} onPressIn={() => handlePress(2)} onPressOut={handlePressOut} style={[styles.touchable, { marginTop: 40 }]}>
// //                                 {visibleImages[2] && <Image source={dinh3} style={[styles.motchi]} />}
// //                             </TouchableOpacity>

// //                         </View>
// //                         <View style={styles.textContainer}>
// //                             <Image source={mayKhoan} style={styles.image} />
// //                             <Image source={tuiDinh} style={styles.tuiDinh} />
// //                         </View>
// //                     </ImageBackground>
// //                 </View>
// //             </ImageBackground>
// //         </SafeAreaView>
// //     );
// // };

// // const styles = StyleSheet.create({
// //     safeArea: {
// //         flex: 1,
// //     },
// //     background: {
// //         flex: 1,
// //     },
// //     container: {
// //         flex: 1,
// //         justifyContent: 'flex-end',
// //         alignItems: 'center',
// //         bottom: 10
// //     },
// //     frame: {
// //         width: '100%',
// //         height: '68%',
// //         justifyContent: 'flex-end',
// //         alignItems: 'center',
// //     },
// //     frameImage: {
// //         width: '100%',
// //         height: '100%',
// //         resizeMode: 'contain',
// //     },
// //     imageRow: {
// //         flex: 1,
// //         flexDirection: 'row',
// //         justifyContent: 'space-around',
// //         alignItems: 'center',
// //         width: '100%',
// //         paddingLeft: 40,
// //         paddingRight: 32,
// //     },
// //     textContainer: {
// //         flex: 2,
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //         width: '100%',
// //     },
// //     frameText: {
// //         color: '#fff',
// //         fontSize: 18,
// //         fontWeight: 'bold',
// //         textAlign: 'center',
// //         padding: 20,
// //     },
// //     nuaChi: {
// //         width: 50,
// //         height: 50,
// //         resizeMode: 'contain',
// //     },
// //     motchi: {
// //         width: 60,
// //         height: 60,
// //         resizeMode: 'contain',

// //     },
// //     header: {
// //         fontSize: 15,
// //         fontFamily: 'Signika-Bold',
// //         marginTop: 15,
// //         color: '#FFF2B0'
// //     },
// //     image: {
// //         width: 200,
// //         height: 200,
// //         resizeMode: 'contain',
// //         left: -20,
// //     },
// //     imageRound3: {
// //         width: 100,
// //         height: 80,
// //         resizeMode: 'contain',
// //     },
// //     round: {
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //     },
// //     name: {
// //         color: '#FFFFFF',
// //         fontSize: 14,
// //         fontFamily: 'Signika-Bold',
// //     },
// //     tuiDinh: {
// //         width: 120,
// //         height: 100,
// //         resizeMode: 'contain',
// //     },
// //     clock: {
// //         width: 100,
// //         height: 50,
// //         resizeMode: 'contain',
// //     },
// //     time: {
// //         textAlign: 'center',
// //         marginLeft: 10,
// //         marginTop: 5,
// //         color: '#fff3b9',
// //         fontSize: 16,
// //         fontFamily: 'Signika-Bold',
// //     },
// //     randomImage: {
// //         position: 'absolute',
// //         bottom: 100,
// //         width: 100,
// //         height: 100,
// //         resizeMode: 'contain',
// //     },
// //     touchable: {
// //         width: 100,
// //         height: 100,
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //         paddingVertical: 90,
// //         // backgroundColor: 'blue'
// //     },
// // });

// // export default GameBanVitScreen;

// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, Dimensions } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';

// const backgroundImage = require('../../../assets/image/banVit.png');
// const centerImage = require('../../../assets/image/frameGameVit.png');

// const dinh1 = require('../../../assets/image/dinh1.png');
// const dinh2 = require('../../../assets/image/dinh2.png');
// const dinh3 = require('../../../assets/image/dinh3.png');

// const frameAvatar = require('../../../assets/image/frameAvatar.png');
// const frameAvatar1 = require('../../../assets/image/frameAvatar1.png');
// const avatar = require('../../../assets/image/face2.png');
// const avatarOtherUser = require('../../../assets/image/face1.png');
// const vs = require('../../../assets/image/vs.png');
// const clock = require('../../../assets/image/clock.png');

// const mayKhoan = require('../../../assets/image/mayKhoan.png');
// const tuiDinh = require('../../../assets/image/tuiDinh.png');

// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

// const GameBanVitScreen = () => {
//     const [visibleImages, setVisibleImages] = useState([false, false, false]);
//     const [dinhCount, setDinhCount] = useState(0);
//     const [timeLeft, setTimeLeft] = useState(60); // Thời gian bắt đầu là 60 giây

//     useEffect(() => {
//         // Giảm thời gian mỗi giây
//         if (timeLeft > 0) {
//             const timer = setInterval(() => {
//                 setTimeLeft(prevTime => prevTime - 1);
//             }, 1000);

//             // Dọn dẹp khi component bị hủy hoặc thời gian hết
//             return () => clearInterval(timer);
//         }
//     }, [timeLeft]);

//     const formatTime = (seconds: number) => {
//         const minutes = Math.floor(seconds / 60);
//         const secondsLeft = seconds % 60;
//         return `${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;
//     };

//     const handlePress = (index: number) => {
//         if (timeLeft > 0) {
//             setVisibleImages(prev => {
//                 const updated = [false, false, false];
//                 updated[index] = true;
//                 return updated;
//             });
//             setDinhCount(prev => prev + 1);
//         }
//     };

//     const handlePressOut = () => {
//         setVisibleImages([false, false, false]);
//     };

//     return (
//         <SafeAreaView style={styles.safeArea}>
//             <ImageBackground source={backgroundImage} style={[styles.background, { width: screenWidth, height: screenHeight }]} resizeMode="cover">
//                 <View style={styles.container}>
//                     <View style={{ width: '90%', left: -10, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
//                         <View>
//                             <ImageBackground source={frameAvatar} style={{ width: 140, height: 70, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} imageStyle={{ width: 140, height: 70, resizeMode: 'contain' }}>
//                                 <Image source={avatar} style={{ width: 50, height: 50, resizeMode: 'contain', marginHorizontal: 5 }} />
//                                 <Text style={{ color: '#ffeb9d', fontSize: 20, marginLeft: 5, bottom: -16, fontWeight: '800' }}>{dinhCount}</Text>
//                             </ImageBackground>
//                             <Text style={styles.name}>Nguyễn Trần Ngọc Hân</Text>
//                         </View>
//                         <Image source={vs} style={{ width: 60, resizeMode: 'contain', bottom: -15 }} />
//                         <View>
//                             <ImageBackground source={frameAvatar1} style={{ width: 140, height: 70, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }} imageStyle={{ width: 140, resizeMode: 'contain' }}>
//                                 <Text style={{ color: '#ffeb9d', fontSize: 20, bottom: -16, fontWeight: '800', marginRight: 5 }}>114</Text>
//                                 <Image source={avatarOtherUser} style={{ marginRight: 8, width: 50, height: 50, resizeMode: 'contain' }} />
//                             </ImageBackground>
//                             <Text style={styles.name}>Nguyễn Lương Kiên Hào</Text>
//                         </View>
//                     </View>

//                     <Text style={{ fontFamily: 'Signika-Bold', fontSize: 18, marginBottom: 8, color: '#ffffff', }}><Text>THỬ TÀI BẮN VÍT</Text></Text>
//                     <ImageBackground source={centerImage} style={styles.frame} imageStyle={styles.frameImage}>
//                         <ImageBackground source={clock} style={{ justifyContent: 'center', alignItems: 'center', width: 100, height: 50 }} imageStyle={styles.clock} >
//                             <Text style={styles.time}>{formatTime(timeLeft)}</Text>
//                         </ImageBackground>
//                         <View style={styles.imageRow}>
//                             <TouchableOpacity activeOpacity={1} onPressIn={() => handlePress(0)} onPressOut={handlePressOut} style={[styles.touchable, { marginTop: 40 }]}>
//                                 {visibleImages[0] && <Image source={dinh1} style={[styles.motchi, { width: 80, height: 80 }]} />}
//                             </TouchableOpacity>
//                             <TouchableOpacity activeOpacity={1} onPressIn={() => handlePress(1)} onPressOut={handlePressOut} style={[styles.touchable, { position: 'absolute', top: -10, left: 155 }]}>
//                                 {visibleImages[1] && <Image source={dinh2} style={[styles.motchi, { width: 80, height: 80 }]} />}
//                             </TouchableOpacity>
//                             <TouchableOpacity activeOpacity={1} onPressIn={() => handlePress(2)} onPressOut={handlePressOut} style={[styles.touchable, { marginTop: 40 }]}>
//                                 {visibleImages[2] && <Image source={dinh3} style={[styles.motchi]} />}
//                             </TouchableOpacity>
//                         </View>
//                         <View style={styles.textContainer}>
//                             <Image source={mayKhoan} style={styles.image} />
//                             <Image source={tuiDinh} style={styles.tuiDinh} />
//                         </View>
//                     </ImageBackground>
//                 </View>
//             </ImageBackground>
//         </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({
//     safeArea: {
//         flex: 1,
//     },
//     background: {
//         flex: 1,
//     },
//     container: {
//         flex: 1,
//         justifyContent: 'flex-end',
//         alignItems: 'center',
//         bottom: 10
//     },
//     frame: {
//         width: '100%',
//         height: '68%',
//         justifyContent: 'flex-end',
//         alignItems: 'center',
//     },
//     frameImage: {
//         width: '100%',
//         height: '100%',
//         resizeMode: 'contain',
//     },
//     imageRow: {
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         alignItems: 'center',
//         width: '100%',
//         paddingLeft: 40,
//         paddingRight: 32,
//     },
//     textContainer: {
//         flex: 2,
//         justifyContent: 'center',
//         alignItems: 'center',
//         width: '100%',
//     },
//     frameText: {
//         color: '#fff',
//         fontSize: 18,
//         fontWeight: 'bold',
//         textAlign: 'center',
//         padding: 20,
//     },
//     nuaChi: {
//         width: 50,
//         height: 50,
//         resizeMode: 'contain',
//     },
//     motchi: {
//         width: 60,
//         height: 60,
//         resizeMode: 'contain',
//     },
//     header: {
//         fontSize: 15,
//         fontFamily: 'Signika-Bold',
//         marginTop: 15,
//         color: '#FFF2B0'
//     },
//     image: {
//         width: 200,
//         height: 200,
//         resizeMode: 'contain',
//         left: -20,
//     },
//     imageRound3: {
//         width: 100,
//         height: 80,
//         resizeMode: 'contain',
//     },
//     round: {
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     name: {
//         color: '#FFFFFF',
//         fontSize: 14,
//         fontFamily: 'Signika-Bold',
//     },
//     tuiDinh: {
//         width: 120,
//         height: 100,
//         resizeMode: 'contain',
//     },
//     clock: {
//         width: 100,
//         height: 50,
//         resizeMode: 'contain',
//     },
//     time: {
//         textAlign: 'center',
//         marginLeft: 10,
//         marginTop: 5,
//         color: '#fff3b9',
//         fontSize: 16,
//         fontFamily: 'Signika-Bold',
//     },
//     randomImage: {
//         position: 'absolute',
//         bottom: 100,
//         width: 100,
//         height: 100,
//         resizeMode: 'contain',
//     },
//     touchable: {
//         width: 100,
//         height: 100,
//         justifyContent: 'center',
//         alignItems: 'center',
//         paddingVertical: 90,
//         // backgroundColor: 'blue'
//     },
// });

// export default GameBanVitScreen;

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, Dimensions, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const backgroundImage = require('../../../assets/image/banVit.png');
const centerImage = require('../../../assets/image/frameGameVit.png');

const dinh1 = require('../../../assets/image/dinh1.png');
const dinh2 = require('../../../assets/image/dinh2.png');
const dinh3 = require('../../../assets/image/dinh3.png');

const frameAvatar = require('../../../assets/image/frameAvatar.png');
const frameAvatar1 = require('../../../assets/image/frameAvatar1.png');
const avatar = require('../../../assets/image/face2.png');
const avatarOtherUser = require('../../../assets/image/face1.png');
const vs = require('../../../assets/image/vs.png');
const clock = require('../../../assets/image/clock.png');

const mayKhoan = require('../../../assets/image/mayKhoan.png');
const tuiDinh = require('../../../assets/image/tuiDinh.png');

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const GameBanVitScreen = () => {
    const [visibleImages, setVisibleImages] = useState([false, false, false]);
    const [dinhCount, setDinhCount] = useState(0);
    const [dinhCountOtherUser, setDinhCountOtherUser] = useState(0); // Trạng thái điểm của người chơi kia
    const [timeLeft, setTimeLeft] = useState(60); // Thời gian bắt đầu là 60 giây
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        // Giảm thời gian mỗi giây
        if (timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft(prevTime => prevTime - 1);
            }, 1000);

            // Dọn dẹp khi component bị hủy hoặc thời gian hết
            return () => clearInterval(timer);
        } else {
            setGameOver(true);
            Alert.alert('Kết quả', `Số đinh của bạn: ${dinhCount}\nSố đinh của đối thủ: ${dinhCountOtherUser}`);
        }
    }, [timeLeft]);

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const secondsLeft = seconds % 60;
        return `${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;
    };

    const handlePress = (index: number) => {
        if (timeLeft > 0) {
            setVisibleImages(prev => {
                const updated = [false, false, false];
                updated[index] = true;
                return updated;
            });
            setDinhCount(prev => prev + 1);
        }
    };

    const handlePressOut = () => {
        setVisibleImages([false, false, false]);
    };

    useEffect(() => {
        if (timeLeft % 0.5 === 0 && timeLeft !== 0) {
            setDinhCountOtherUser(prev => prev + 1);
        }
    }, [timeLeft]);

    return (
        <SafeAreaView style={styles.safeArea}>
            <ImageBackground source={backgroundImage} style={[styles.background, { width: screenWidth, height: screenHeight }]} resizeMode="cover">
                <View style={styles.container}>
                    <View style={{ width: '90%', left: -10, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <ImageBackground source={frameAvatar} style={{ width: 140, height: 70, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} imageStyle={{ width: 140, height: 70, resizeMode: 'contain' }}>
                                <Image source={avatar} style={{ width: 50, height: 50, resizeMode: 'contain', marginHorizontal: 5 }} />
                                <Text style={{ color: '#ffeb9d', fontSize: 20, marginLeft: 5, bottom: -16, fontWeight: '800' }}>{dinhCount}</Text>
                            </ImageBackground>
                            <Text style={styles.name}>Nguyễn Trần Ngọc Hân</Text>
                        </View>
                        <Image source={vs} style={{ width: 60, resizeMode: 'contain', bottom: -15 }} />
                        <View>
                            <ImageBackground source={frameAvatar1} style={{ width: 140, height: 70, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }} imageStyle={{ width: 140, resizeMode: 'contain' }}>
                                <Text style={{ color: '#ffeb9d', fontSize: 20, bottom: -16, fontWeight: '800', marginRight: 5 }}>{dinhCountOtherUser}</Text>
                                <Image source={avatarOtherUser} style={{ marginRight: 8, width: 50, height: 50, resizeMode: 'contain' }} />
                            </ImageBackground>
                            <Text style={styles.name}>Nguyễn Lương Kiên Hào</Text>
                        </View>
                    </View>

                    <Text style={{ fontFamily: 'Signika-Bold', fontSize: 18, marginBottom: 8, color: '#ffffff', }}><Text>THỬ TÀI BẮN VÍT</Text></Text>
                    <ImageBackground source={centerImage} style={styles.frame} imageStyle={styles.frameImage}>
                        <ImageBackground source={clock} style={{ justifyContent: 'center', alignItems: 'center', width: 100, height: 50 }} imageStyle={styles.clock} >
                            <Text style={styles.time}>{formatTime(timeLeft)}</Text>
                        </ImageBackground>
                        <View style={styles.imageRow}>
                            <TouchableOpacity activeOpacity={1} onPressIn={() => handlePress(0)} onPressOut={handlePressOut} style={[styles.touchable, { marginTop: 40 }]} >
                                {visibleImages[0] && <Image source={dinh1} style={[styles.motchi, { width: 80, height: 80 }]} />}
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={1} onPressIn={() => handlePress(1)} onPressOut={handlePressOut} style={[styles.touchable, { position: 'absolute', top: -10, left: 155 }]} >
                                {visibleImages[1] && <Image source={dinh2} style={[styles.motchi, { width: 80, height: 80 }]} />}
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={1} onPressIn={() => handlePress(2)} onPressOut={handlePressOut} style={[styles.touchable, { marginTop: 40 }]} >
                                {visibleImages[2] && <Image source={dinh3} style={[styles.motchi]} />}
                            </TouchableOpacity>
                        </View>
                        <View style={styles.textContainer}>
                            <Image source={mayKhoan} style={styles.image} />
                            <Image source={tuiDinh} style={styles.tuiDinh} />
                        </View>
                    </ImageBackground>
                </View>
            </ImageBackground>
        </SafeAreaView>
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
        justifyContent: 'flex-end',
        alignItems: 'center',
        bottom: 10
    },
    frame: {
        width: '100%',
        height: '68%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    frameImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    imageRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        paddingLeft: 40,
        paddingRight: 32,
    },
    textContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    frameText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 20,
    },
    nuaChi: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    motchi: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
    },
    header: {
        fontSize: 15,
        fontFamily: 'Signika-Bold',
        marginTop: 15,
        color: '#FFF2B0'
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        left: -20,
    },
    imageRound3: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
    },
    round: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        color: '#FFFFFF',
        fontSize: 14,
        fontFamily: 'Signika-Bold',
    },
    tuiDinh: {
        width: 120,
        height: 100,
        resizeMode: 'contain',
    },
    clock: {
        width: 100,
        height: 50,
        resizeMode: 'contain',
    },
    time: {
        textAlign: 'center',
        marginLeft: 10,
        marginTop: 5,
        color: '#fff3b9',
        fontSize: 16,
        fontFamily: 'Signika-Bold',
    },
    randomImage: {
        position: 'absolute',
        bottom: 100,
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    touchable: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 90,
        // backgroundColor: 'blue'
    },
});

export default GameBanVitScreen;