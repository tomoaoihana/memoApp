import { View, StyleSheet } from "react-native";
import { router, useNavigation } from "expo-router";
import { useEffect } from "react";

import MemoListItem from "../../components/MemoListItem";
import CircleBtn from "../../components/CircleBtn";

import Icon from "../../components/Icon";
import LogOutButton from "../../components/LogOutButton";

const handlePress = (): void => {
  router.push("/memo/Create");
};

const List = (): JSX.Element => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <LogOutButton />;
      },
    });
  }, []);

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
