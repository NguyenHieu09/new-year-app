import { RootStackParamList } from '@/src/type/RootStackParamList';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, ImageBackground } from 'react-native';
import CustomButton from '../ui/CustomButton';

interface AttendanceModalProps {
    visible: boolean;
    onClose: () => void;
}

const backgroundImage = require('../../../assets/image/Popup.png');

const AttendanceModal: React.FC<AttendanceModalProps> = ({ visible, onClose }) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handlePress = () => {
        onClose();
        navigation.navigate('BottomNavigation');
    };


    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <ImageBackground source={backgroundImage} style={styles.background} resizeMode="contain">

                    <CustomButton
                        title="Tôi vẫn khỏe"
                        onPress={handlePress}
                        style={styles.button}
                    />



                </ImageBackground>
            </View>


        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    background: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 350,
        height: 400,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button: {
        padding: 8,
        borderRadius: 20,
        paddingHorizontal: 20,
        marginTop: 115
    },
    buttonText: {
        color: '#cc0000',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default AttendanceModal;