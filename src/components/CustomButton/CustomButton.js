import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';


const CustomButton = ({onPress, text}) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FF34DF',
        width: '70%',
        padding: 15,
        marginVertical: 20,
        alignItems: 'center',
        borderRadius: 15,
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontFamily: 'Roboto'
    },
});

export default CustomButton;
