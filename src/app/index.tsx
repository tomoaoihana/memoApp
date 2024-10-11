import { View, StyleSheet } from "react-native";
import Header from "../components/Header";
import MemoListItem from "../components/MemoListItem";
import CircleBtn from "../components/CircleBtn";

const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />

      <View>
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
      </View>
      <CircleBtn />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Index;
