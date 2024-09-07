import {
  Link,
  useLocalSearchParams,
  usePathname,
  useRouter,
} from "expo-router";

import { Pressable, StyleSheet, Text, View } from "react-native";
import PageTitle from "../../components/PageTitle";
import TextArea from "../../components/TextArea";
import { useEffect, useState } from "react";
import { getNote, updateNote } from "../../utils/fetcher";

export default function Page() {
  const [noteText, setNoteText] = useState();
  const { id } = useLocalSearchParams();
  console.log(id);

  async function fetchNote() {
    const data = await getNote(id);
    setNoteText(data.content);
  }

  async function handleSubmit() {
    const response = updateNote(id, noteText);
  }

  useEffect(() => {
    fetchNote();
  }, []);

  return (
    <View>
      <PageTitle title={`Note ID: ${id}`} />
      <TextArea setText={setNoteText} text={noteText} />
      <Pressable style={styles.button}>
        <Text style={styles.buttonLabel}>Update Note</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
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
