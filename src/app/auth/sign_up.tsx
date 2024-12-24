import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { Link, router } from "expo-router";
import Button from "../../components/btn";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../config";

const handlePress = async (email: string, password: string): Promise<void> => {
  //サインあっぷを押した時の処理
  // console.log(email, password);
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential.user.uid);
    router.push("/memo/List");
  } catch (error) {
    console.error(error);
  }
};

const SignUp = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
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
        <Button
          label="サインアップ"
          onPress={() => {
            handlePress(email, password);
          }}
        />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already registered?</Text>
          <Link href="/auth/log_in" asChild>
            <TouchableOpacity>
              <Text style={styles.footerLink}>Log in.</Text>
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

export default SignUp;
