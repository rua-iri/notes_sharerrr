import { Link } from "expo-router";
import { useState } from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import TextSubmit from "../components/TextSubmit";

export default function Page() {
  const [textValue, setTextValue] = useState("");

  const handleNullValue = () => {
    if(!textValue) {
      alert("Note ID is required!");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TextSubmit
          label={"Note ID"}
          textValue={textValue}
          setTextValue={setTextValue}
        />

        <Pressable style={[styles.button, {marginTop: 20}]} onPress={handleNullValue}>
          <Link
            href={textValue ? `/view/${textValue}` : "#"}
            style={styles.buttonLabel}
          >
            View Note
          </Link>
        </Pressable>
      </View>

      <View style={styles.box}>
        <Pressable style={styles.button}>
          <Link href={`/new`} style={styles.buttonLabel}>
            Create New Note
          </Link>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    padding: 10,
    margin: 25,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#313131",
    borderWidth: 1,
    margin: 15,
    borderRadius: 5,
  },
  buttonLabel: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    padding: 10,
  },
});
