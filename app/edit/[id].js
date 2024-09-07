import { Link, useLocalSearchParams, usePathname, useRouter } from "expo-router";

import { Text, View } from "react-native";
import PageTitle from "../../components/PageTitle";
import TextArea from "../../components/TextArea";
import { useState } from "react";

export default function Page() {
  const [text, setText] = useState("");
  const { id } = useLocalSearchParams();
  console.log(id)
  
  return (
    <View>
      <PageTitle title={`Note ID: ${id}`} />
      <TextArea setText={setText} text={text} />
    </View>
  );
}
