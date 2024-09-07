import { StyleSheet, TextInput, View } from "react-native";


export default function TextArea({text, setText}) {

    return (
        <View>
            <TextInput 
            style={styles.textArea}
            multiline={true}
            numberOfLines={20}
            onChangeText={setText}
            value={text}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textArea: {
        borderWidth: 1,
        margin: 10,
    }
});