import {
  Link,
  useLocalSearchParams,
  usePathname,
  useRouter,
} from "expo-router";

import {
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
      {/* <SafeAreaView style={styles.scrollContainer}>
        <ScrollView>
          <Text>{noteText}</Text>
        </ScrollView>
      </SafeAreaView> */}
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    margin: 15,
    padding: 15,
    borderWidth: 1,
    borderRadius: 5,
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
