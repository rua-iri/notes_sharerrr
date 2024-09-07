import {
  Link,
  useLocalSearchParams,
  usePathname,
  useRouter,
} from "expo-router";

import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import PageTitle from "../../components/PageTitle";
import { getNote } from "../../utils/fetcher";
import { useEffect, useState } from "react";

export default function Page() {
  const [noteText, setNoteText] = useState();
  const { id } = useLocalSearchParams();
  console.log(id);

  async function fetchNote() {
    const data = await getNote(id);
    setNoteText(data.content);
  }

  useEffect(() => {
    fetchNote();
  }, []);

  return (
    <View>
      <PageTitle title={`Note ID: ${id}`} />
      <ScrollView style={styles.scrollContainer}>
        <Text>{noteText}</Text>
      </ScrollView>
      <Pressable style={styles.button}>
        <Link href={`/edit/${id}`} style={styles.buttonLabel}>
          Edit Note
        </Link>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    margin: 15,
    marginHorizontal: 20,
    padding: 15,
    borderWidth: 1,
    borderRadius: 5,
    maxHeight: 500,
    minHeight: 500,
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
