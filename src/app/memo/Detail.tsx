import { View, Text, StyleSheet, ScrollView } from "react-native";

import CircleBtn from "../../components/CircleBtn";
// import { Feather } from "@expo/vector-icons";
import Icon from "../../components/Icon";
import { router } from "expo-router";

const handlePress = (): void => {
  router.push("/memo/Edit");
};

const Detail = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2024年10月12日 12:00</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoBodyText}>
          買い物リスト
          買い物リスト買い物リスト買い物リスト買い物リスト買い物リスト買い物リスト買い物リスト買い物リスト買い物リスト
        </Text>
      </ScrollView>
      <CircleBtn style={{ top: 60, bottom: "auto" }} onPress={handlePress}>
        <Icon name="pencil" size={40} color="white" />
      </CircleBtn>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  memoHeader: {
    backgroundColor: "#265366",
    height: 96,
    justifyContent: "center",
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memoTitle: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    lineHeight: 32,
  },
  memoDate: {
    fontSize: 12,
    color: "#fff",
    lineHeight: 16,
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  memoBodyText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#000",
  },
});

export default Detail;
