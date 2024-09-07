import { StyleSheet, View, Image, Text } from "react-native";

export default function Header() {
  const imgSrc = require("../assets/logo-md.png");

  return (
    <View style={styles.container}>
        <Image style={styles.image} source={imgSrc} resizeMode={"contain"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#15191e",
    display: "flex",
    alignItems: "center",
    height: 100,
  },
  image: {
    width: 100,
    height: "100%",
    borderRadius: 45,
  },
});
