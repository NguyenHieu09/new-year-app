import { RootStackParamList } from '@/src/type/RootStackParamList';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { Ionicons } from '@expo/vector-icons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const backgroundImage = require('../../../assets/image/dapNhanh.png');
import questions from '../../data/questions.json';

// Hàm trộn mảng sử dụng thuật toán Fisher-Yates
const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap
    }
    return array;
};

const QuestionScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [shuffledQuestions, setShuffledQuestions] = useState<any[]>([]); // Dùng để lưu câu hỏi đã trộn
    const [timeLeft, setTimeLeft] = useState<number>(10); // Thời gian còn lại cho mỗi câu hỏi (10 giây)

    useEffect(() => {
        // Trộn các câu hỏi và lấy 5 câu đầu tiên
        const shuffled = shuffleArray([...questions]).slice(0, 5); // Trộn và lấy 5 câu đầu tiên
        setShuffledQuestions(shuffled); // Cập nhật câu hỏi đã trộn
    }, []);

    useEffect(() => {
        if (timeLeft > 0 && selectedAnswer === null) {
            const timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1); // Giảm thời gian mỗi giây
            }, 500);

            return () => clearInterval(timer);
        } else if (timeLeft === 0) {
            handleAnswer('');
        }
    }, [timeLeft, selectedAnswer]);

    const question = shuffledQuestions[currentQuestionIndex];

    const handleAnswer = (selectedAnswer: string) => {
        setSelectedAnswer(selectedAnswer);

        if (selectedAnswer === question.answer) {
            setScore(score + 1);
        }

        // Chuyển đến câu hỏi tiếp theo chỉ khi còn câu hỏi
        if (currentQuestionIndex < shuffledQuestions.length - 1) {
            setTimeout(() => {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setSelectedAnswer(null); // Reset selected answer
                setTimeLeft(10); // Reset thời gian cho câu hỏi mới
            }, 1000); // Delay chuyển sang câu hỏi tiếp theo
        } else {
            // Khi hết câu hỏi, điều hướng tới màn hình kết quả và truyền điểm số + tổng số câu
            navigation.navigate('ResultScreen', { score: score + 1, totalQuestions: 5 });
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <LinearGradient
                colors={['#DC1920', '#A60006']}
                start={{ x: 0.5, y: 0.5 }}
                end={{ x: 0.5, y: 1 }}
                style={styles.container}
            >
                <Text style={styles.header}>THÁNH LÌ XÌ</Text>
                <ImageBackground source={backgroundImage} style={styles.background} imageStyle={styles.frameImage}>
                    <View style={styles.container}>
                        {question ? (
                            <>
                                <View style={styles.headerContainer}>
                                    <Text style={styles.scoreText}>Điểm: {score}</Text>
                                    <Text style={styles.timerText}>
                                        <FontAwesome5 name="clock" size={20} color="black" /> {timeLeft}s
                                    </Text>
                                </View>


                                <Text style={styles.questionText}>{question.question}</Text>
                                <View style={styles.optionsContainer}>
                                    {question.options.map((option: string, index: number) => {
                                        let buttonColor = '#c60508';

                                        if (selectedAnswer) {
                                            if (option === question.answer) {
                                                buttonColor = '#fcd30e';
                                            }
                                        }
                                        return (
                                            <TouchableOpacity
                                                key={index}
                                                style={[styles.optionButton, { backgroundColor: buttonColor }]}
                                                onPress={() => handleAnswer(option)}
                                                disabled={selectedAnswer !== null}
                                            >
                                                <Text style={styles.optionText}>{option}</Text>
                                            </TouchableOpacity>
                                        );
                                    })}
                                </View>
                            </>
                        ) : (
                            <Text style={styles.questionText}>Đang tải câu hỏi...</Text>
                        )}
                    </View>
                </ImageBackground>
            </LinearGradient>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    headerContainer: {
        top: -50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        color: '#FFF',
        fontWeight: 'bold',
    },
    background: {
        width: '85%',
        height: '85%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    frameImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    header: {
        fontSize: 22,
        color: '#fef2ba',
        margin: 16,
        fontFamily: 'Signika-Bold',
        textTransform: 'uppercase',
    },
    banner: {
        width: 260,
    },
    button: {
        height: 40,
        margin: 20,
    },
    message: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        padding: 10,
    },
    text: {
        color: '#C2030B',
        fontSize: 20,
        fontFamily: 'Signika-SemiBold',
    },
    highlightedNumber: {
        color: '#FFD700',
    },
    questionText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 50,
        textAlign: 'center',
    },
    timerText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        alignSelf: 'flex-end',
        flexDirection: 'row',  // Để icon và text nằm cạnh nhau
        alignItems: 'center',  // Căn giữa icon và text
    },
    optionsContainer: {
        marginBottom: 20,
    },
    optionButton: {
        padding: 10,
        margin: 5,
        borderRadius: 5,
        width: 220,
        alignItems: 'center',
    },
    optionText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Signika-SemiBold'
    },
    scoreText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default QuestionScreen;

