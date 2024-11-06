import {
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";

import CircleBtn from "../../components/CircleBtn";
import Icon from "../../components/Icon";
import { useState } from "react";
import { router } from "expo-router";

const handlePress = (): void => {
  router.back();
};

const Edit = (): JSX.Element => {
  const [value, setValue] = useState("");

  const onChangeValue = (text: string): void => {
    return setValue(text);
  };

  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={value}
          placeholder="Title"
          multiline={true}
          onChangeText={onChangeValue}
        />
      </View>
      <CircleBtn onPress={handlePress}>
        <Icon name="check" size={40} color="#fff" />
      </CircleBtn>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
  },
  inputContainer: {
    paddingVertical: 32,
    paddingHorizontal: 27,
    flex: 1,
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    textAlignVertical: "top",
    fontSize: 16,
    lineHeight: 24,
  },
});

export default Edit;
