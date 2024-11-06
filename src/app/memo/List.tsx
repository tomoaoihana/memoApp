import { View, StyleSheet, Text } from "react-native";
import MemoListItem from "../../components/MemoListItem";
import CircleBtn from "../../components/CircleBtn";

import Icon from "../../components/Icon";
import { router, useNavigation } from "expo-router";

const handlePress = (): void => {
  router.push("/memo/Create");
};

const List = (): JSX.Element => {
  const navigation = useNavigation();
  navigation.setOptions({
    headerRight: () => {
      return <Text>ヘッダー</Text>;
    },
  });
  return (
    <View style={styles.container}>
      <View>
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
      </View>
      <CircleBtn onPress={handlePress}>
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
