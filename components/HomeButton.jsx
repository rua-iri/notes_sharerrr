import { Link } from "expo-router";
import { Pressable, StyleSheet } from "react-native";

export default function HomeButton() {
  return (
    <Pressable style={styles.homeButton}>
      <Link href="/" style={styles.homeButtonLabel}>
        Home
      </Link>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  homeButton: {
    backgroundColor: "#414141",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#f1f1f1",
    margin: 15,
    marginVertical: 25,
    marginLeft: "auto",
    justifyContent: "center"
  },
  homeButtonLabel: {
    color: "#f1f1f1",
  },
});
