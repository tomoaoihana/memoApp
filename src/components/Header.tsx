import { View, Text, StyleSheet } from "react-native";

const Header = (): JSX.Element => {
  return (
    <View style={styles.header}>
      <View style={styles.headerInner}>
        <Text style={styles.headerTitle}>Memo App</Text>
        <Text style={styles.headerRight}>ログアウト</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#265366",
    height: 104,
    justifyContent: "flex-end",
  },
  headerInner: {
    alignItems: "center",
    position: "relative",
  },
  headerRight: {
    position: "absolute",
    right: 16,
    bottom: 16,
    color: "rgba(255, 255, 255, 0.7)",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    lineHeight: 32,
    marginBottom: 8,
  },
});

export default Header;
