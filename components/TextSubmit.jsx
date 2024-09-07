import { SafeAreaView, StyleSheet, Text, TextInput } from "react-native";

export default function TextSubmit({ label, textValue, setTextValue }) {
  return (
    <SafeAreaView style={styles.inputBox}>
      <Text style={styles.textLabel}>{label}:</Text>
      <TextInput
        style={[styles.textInput, styles.textLabel]}
        onChangeText={setTextValue}
        value={textValue}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputBox: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  textInput: {
    width: "90%",
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  textLabel: {
    fontSize: 20,
    marginHorizontal: 15,
  },
});
