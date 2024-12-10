import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Link, router } from "expo-router";
import { useState } from "react";
import Button from "../../components/btn";

const handlePress = (): void => {
  //ログインボタンを押した時の処理
  router.replace("/memo/List");
};

const LogIn = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Log In</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="Email Address"
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
          autoCapitalize="none"
          secureTextEntry={true}
          placeholder="Password"
          textContentType="password"
        />
        <Button label="ログイン" onPress={handlePress} />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Not registered?</Text>
          <Link href="/auth/sign_up" asChild>
            <TouchableOpacity>
              <Text style={styles.footerLink}>sign up here!</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
  },
  inner: {
    paddingVertical: 24,
    paddingHorizontal: 27,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "bold",
    marginBottom: 24,
  },
  input: {
    padding: 8,
    marginBottom: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    borderRadius: 4,
    height: 48,
  },

  footer: {
    flexDirection: "row",
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: "#265366",
  },
});

export default LogIn;
