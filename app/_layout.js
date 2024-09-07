import { Slot } from "expo-router";
import { StyleSheet, View } from "react-native";
import Header from "../components/Header";

export default function HomeLayout() {
  return (
    <View style={style.root}>
      <Header />
      <Slot />
    </View>
  );
}

const style = StyleSheet.create({
  root: {
    height: "auto"
  },
});
