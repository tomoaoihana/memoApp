import { View, Text, StyleSheet } from "react-native";

interface Props {
  label: string;
}

const Button = (props: Props): JSX.Element => {
  const { label } = props;
  return (
    <View style={styles.btn}>
      <Text style={styles.btnLabel}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#265366",
    borderRadius: 4,
    alignSelf: "flex-start",
    marginBottom: 24,
  },
  btnLabel: {
    fontSize: 16,
    lineHeight: 32,
    color: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 24,
  },
});

export default Button;
