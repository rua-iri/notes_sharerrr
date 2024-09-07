import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import TextArea from "../components/TextArea";
import { useState } from "react";
import PageTitle from "../components/PageTitle";

export default function Page() {
  const [newText, setNewText] = useState("");

  return (
    <View>
      <PageTitle title="New Note" />

      <View>
        <TextArea text={newText} setText={setNewText} />
      </View>
    </View>
  );
}
