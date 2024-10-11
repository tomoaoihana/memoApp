import { View, Text, StyleSheet } from "react-native";

interface Props {
  children: string;
}

const circleBtn = (props: Props): JSX.Element => {
  const { children } = props;
  return (
    <View style={styles.circleBtn}>
      <Text style={styles.circleBtnLabel}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  circleBtn: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#265366",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 40,
    bottom: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  circleBtnLabel: {
    color: "#fff",
    fontSize: 40,
    lineHeight: 48,
  },
});

export default circleBtn;
