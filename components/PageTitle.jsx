import {View, Text, StyleSheet} from "react-native";

export default function PageTitle({title}) {

    return (
        <View>
            <Text style={styles.pageTitle}>
                {title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    pageTitle: {
        fontSize: 24,
        textDecorationLine: "underline",
        textDecorationColor: "101010",
        margin: 15,
    }
})