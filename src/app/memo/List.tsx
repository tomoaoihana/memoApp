import { View, StyleSheet } from "react-native";
import Header from "../../components/Header";
import MemoListItem from "../../components/MemoListItem";
import CircleBtn from "../../components/CircleBtn";

import Icon from "../../components/Icon";

const List = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />

      <View>
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
      </View>
      <CircleBtn>
        {/* <Feather name="plus" size={24} color="#fff" /> */}
        <Icon name="plus" size={40} color="white" />
      </CircleBtn>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default List;
