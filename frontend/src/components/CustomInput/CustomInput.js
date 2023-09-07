import {react} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
    return (
        <View style={styles.container}>
            <TextInput 
            style={styles.input} 
            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '100%',

        borderWidth: 1,
        borderColor: '#e8e8e8',
        borderRadius: 4,

        paddingHorizontal: 10,

        marginVertical: 10,
    },
    input: {
    },
});
export default CustomInput;