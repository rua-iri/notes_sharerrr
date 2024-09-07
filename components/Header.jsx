import { usePathname } from "expo-router";
import { StyleSheet, View, Image, Text,  } from "react-native";
import HomeButton from "./HomeButton";
import Constants from "expo-constants";

export default function Header() {
  const imgSrc = require("../assets/logo-md.png");

  const pathname = usePathname();
  const isRoot = pathname == "/";

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={imgSrc} resizeMode={"contain"} />
      {isRoot ?  null : <HomeButton />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#15191e",
    // display: "flex",
    // alignItems: "center",
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 100,
    marginTop: Constants.statusBarHeight,
  },
  image: {
    width: 100,
    height: "100%",
    borderRadius: 45,
  },
});
