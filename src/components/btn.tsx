import { Text, StyleSheet, TouchableOpacity } from "react-native";

interface Props {
  label: string;
  onPress?: () => void;
}

const Button = (props: Props): JSX.Element => {
  const { label, onPress } = props;
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.btnLabel}>{label}</Text>
    </TouchableOpacity>
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
