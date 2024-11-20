// import React, { useState } from 'react';
// import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

// const CounterComponent: React.FC = () => {
//     const [count, setCount] = useState(0);

//     const increase = () => setCount(count + 1);
//     const decrease = () => setCount(count > 0 ? count - 1 : 0);

//     return (
//         <View style={styles.container}>
//             <TouchableOpacity style={[styles.button, { borderColor: '#c0c0c0', backgroundColor: '#959595' }]} onPress={decrease}>
//                 <Text style={styles.buttonText}>-</Text>
//             </TouchableOpacity>

//             <View style={styles.countDisplay}>
//                 <Text style={styles.countText}>{count}</Text>
//             </View>

//             <TouchableOpacity style={[styles.button, { borderColor: '#fef809', backgroundColor: '#fbcb0d' }]} onPress={increase}>
//                 <Text style={styles.buttonText}>+</Text>
//             </TouchableOpacity>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     button: {
//         backgroundColor: '#ccc',
//         borderRadius: 30,
//         width: 34,
//         height: 34,
//         borderWidth: 2,
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginHorizontal: 10,
//     },
//     buttonText: {

//         color: '#fff',
//         fontSize: 22,
//         fontWeight: 'bold',
//         textAlign: 'center',
//     },
//     countDisplay: {
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     countText: {
//         fontSize: 24,
//         fontWeight: '800',
//         color: '#FFE933',
//     },
// });

// export default CounterComponent;

import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface CounterComponentProps {
    count: number;
    setCount: (count: number) => void;
}

const CounterComponent: React.FC<CounterComponentProps> = ({ count, setCount }) => {
    const increase = () => setCount(count + 1);
    const decrease = () => setCount(count > 0 ? count - 1 : 0);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.button, { borderColor: '#c0c0c0', backgroundColor: '#959595' }]} onPress={decrease}>
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>

            <View style={styles.countDisplay}>
                <Text style={styles.countText}>{count}</Text>
            </View>

            <TouchableOpacity style={[styles.button, { borderColor: '#fef809', backgroundColor: '#fbcb0d' }]} onPress={increase}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#ccc',
        borderRadius: 30,
        width: 34,
        height: 34,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    countDisplay: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    countText: {
        fontSize: 24,
        fontWeight: '800',
        color: '#FFE933',
    },
});

export default CounterComponent;