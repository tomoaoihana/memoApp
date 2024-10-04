import { View, Text, StyleSheet, TextStyle } from "react-native";

interface Props {
  children: string;
  bang?: boolean;
  style?: TextStyle;
}

const Hello = (props: Props): JSX.Element => {
  const { children, bang, style } = props;

  // デバッグ用ログ
  console.log("Children:", children);
  return (
    <View>
      <Text style={[styles.text, style]}>
        Hello {children}
        {bang === true ? "!!" : ""}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    backgroundColor: "blue",
    fontWeight: "bold",
    fontSize: 40,
    padding: 20,
  },
});

export default Hello;
