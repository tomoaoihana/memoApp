import {
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import Header from "../../components/Header";
import CircleBtn from "../../components/CircleBtn";
import Icon from "../../components/Icon";
import { useState } from "react";

const Create = (): JSX.Element => {
  const [value, setValue] = useState("");

  const onChangeValue = (text: string): void => {
    return setValue(text);
  };

  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <Header />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value=""
          placeholder="Title"
          multiline={true}
          onChangeText={onChangeValue}
        />
      </View>
      <CircleBtn>
        <Icon name="check" size={40} color="#fff" />
      </CircleBtn>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
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

export default Create;
