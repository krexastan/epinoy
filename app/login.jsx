import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function LoginScreen() {
  const router = useRouter();
  const { role } = useLocalSearchParams();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // navigation based on role
    if (role === "driver") {
      router.replace("/dashboard_driver");
    } else {
      router.replace("/dashboard_passenger");
    }
  };

  return (
    <ImageBackground
      source={require("../assets/epinoy/bg.png")}
      style={styles.fullBackground}
      resizeMode="cover"
    >
      <View style={styles.redOverlay}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <SafeAreaView style={{ flex: 1 }}>
            <ScrollView
              contentContainerStyle={{ flexGrow: 1 }}
              bounces={false}
              keyboardShouldPersistTaps="handled"
            >
              <View style={styles.topSection}>
                <TouchableOpacity
                  onPress={() => router.back()}
                  style={styles.backButton}
                >
                  <Ionicons name="arrow-back" size={28} color="white" />
                </TouchableOpacity>
                <Image
                  source={require("../assets/epinoy/logo.png")}
                  style={styles.logoImage}
                />
              </View>

              <View style={styles.bottomSection}>
                <Text style={styles.titleText}>Sign in to your Account</Text>
                <Text style={styles.subTitleText}>
                  Enter your email and password to log in
                </Text>

                {/* email */}
                <Text style={styles.labelText}>Mobile Number</Text>
                <View style={styles.inputWrapper}>
                  <View style={styles.iconBox}>
                    <MaterialCommunityIcons
                      name="phone"
                      size={20}
                      color="white"
                    />
                  </View>
                  <TextInput
                    style={styles.input}
                    placeholder="Email or Mobile Number"
                    placeholderTextColor="#A9B9D1"
                  />
                </View>

                {/* password */}
                <Text style={styles.labelText}>Password</Text>
                <View style={styles.inputWrapper}>
                  <View style={styles.iconBox}>
                    <Ionicons name="key" size={20} color="white" />
                  </View>
                  <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#A9B9D1"
                    secureTextEntry={!showPassword}
                  />
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                    style={styles.eyeIcon}
                  >
                    <Ionicons
                      name={showPassword ? "eye-off" : "eye"}
                      size={20}
                      color="#A9B9D1"
                    />
                  </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.forgotPassword}>
                  <Text style={styles.forgotText}>Forget Password?</Text>
                </TouchableOpacity>

                {/* login btn */}
                <TouchableOpacity
                  style={styles.loginButton}
                  activeOpacity={0.8}
                  onPress={handleLogin}
                >
                  <Text style={styles.loginButtonText}>Log in</Text>
                </TouchableOpacity>

                <View style={styles.footer}>
                  <Text style={styles.footerText}>Don't have an account? </Text>
                  <TouchableOpacity onPress={() => router.push("/register")}>
                    <Text style={styles.registerLink}>Register Now</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </SafeAreaView>
        </KeyboardAvoidingView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  fullBackground: {
    flex: 1,
  },
  redOverlay: {
    flex: 1,
    backgroundColor: "rgba(180, 0, 0, 0.4)",
  },
  topSection: {
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 10,
  },
  logoImage: {
    width: 200,
    height: 120,
    resizeMode: "contain",
  },
  bottomSection: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingTop: 30,
    paddingHorizontal: 25,
    paddingBottom: 40,
  },
  titleText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#0047AB",
    marginBottom: 8,
  },
  subTitleText: {
    fontSize: 14,
    color: "#333",
    marginBottom: 25,
  },
  labelText: {
    fontSize: 13,
    color: "#0047AB",
    fontWeight: "600",
    marginBottom: 5,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D1DCEB",
    borderRadius: 8,
    marginBottom: 15,
    overflow: "hidden",
    backgroundColor: "white",
  },
  iconBox: {
    backgroundColor: "#0047AB",
    padding: 12,
    width: 48,
    alignItems: "center",
  },
  input: {
    flex: 1,
    paddingHorizontal: 12,
    fontSize: 16,
    color: "#333",
    height: 48,
  },
  eyeIcon: {
    paddingRight: 15,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: 30,
  },
  forgotText: {
    color: "#0047AB",
    fontWeight: "600",
  },
  loginButton: {
    backgroundColor: "#0047AB",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  loginButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
  },
  footerText: {
    color: "#666",
  },
  registerLink: {
    color: "#D32F2F",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
