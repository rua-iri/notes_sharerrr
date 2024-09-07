import { Link, useLocalSearchParams, usePathname, useRouter } from "expo-router";

import { Text, View } from "react-native";

export default function Page() {
  const { id } = useLocalSearchParams();
  console.log(id)
  
  return (
    <View>
      <Text>Note ID: {id}</Text>
      <Link href="/">Home</Link>
    </View>
  );
}
