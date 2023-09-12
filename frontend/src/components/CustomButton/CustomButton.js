import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';


const CustomButton = ({onPress, text, type='PRIMARY', bgColor, fgColor}) => {
    return (
        <Pressable onPress={onPress} 
        style={[
            styles.container, 
            styles['container_'+type],
            bgColor ? {backgroundColor: bgColor} : {}]}>
        <Text style={[
            styles.text, 
            styles['text_'+type],
            fgColor ? {color: fgColor} : {}]}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '70%',
        padding: 15,
        marginVertical: 10,
        alignItems: 'center',
        borderRadius: 15,
    },
    container_PRIMARY: {
        backgroundColor: '#FF34DF'
    },
    container_TERTIARY: {
        padding: 0,
    },
    container_SECONDARY: {
        borderColor: '#FF34DF',
        borderWidth: 2,
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontFamily: 'Roboto'
    },

    text_TERTIARY: {
        color: '#fff',
    },
    text_SECONDARY: {
        color: '#ffff',
    },
});

export default CustomButton;
