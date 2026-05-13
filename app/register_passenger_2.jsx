import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

const RegisterPassenger2 = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [agreedToGPS, setAgreedToGPS] = useState(false);

  return (
    <View style={styles.mainWrapper}>
      <ImageBackground
        source={require("../assets/epinoy/bg.png")}
        style={StyleSheet.absoluteFillObject}
        resizeMode="cover"
      >
        <View style={styles.redOverlay} />
      </ImageBackground>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          bounces={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.topSection}>
            <Image
              source={require("../assets/epinoy/logo.png")}
              style={styles.logoImage}
            />
          </View>

          <View style={styles.bottomSection}>
            <View style={styles.contentContainer}>
              <View style={styles.headerBadge}>
                <Text style={styles.headerBadgeText}>
                  Passenger Registration
                </Text>
              </View>
              <Text style={styles.stepTitle}>Account Security</Text>

              <Text style={styles.labelText}>Password</Text>
              <View style={styles.inputWrapper}>
                <View style={styles.iconBox}>
                  <FontAwesome name="key" size={18} color="white" />
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  secureTextEntry={!showPassword}
                  placeholderTextColor="#A9B9D1"
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

              <Text style={styles.labelText}>Confirm Password</Text>
              <View style={styles.inputWrapper}>
                <View style={styles.iconBox}>
                  <FontAwesome name="key" size={18} color="white" />
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="Confirm Password"
                  secureTextEntry={!showConfirmPassword}
                  placeholderTextColor="#A9B9D1"
                />
                <TouchableOpacity
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                  style={styles.eyeIcon}
                >
                  <Ionicons
                    name={showConfirmPassword ? "eye-off" : "eye"}
                    size={20}
                    color="#A9B9D1"
                  />
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={styles.checkboxContainer}
                onPress={() => setAgreedToTerms(!agreedToTerms)}
              >
                <Ionicons
                  name={agreedToTerms ? "checkbox" : "square-outline"}
                  size={22}
                  color="#0047AB"
                />
                <Text style={styles.checkboxText}>
                  I agree to the{" "}
                  <Text style={styles.linkText}>
                    Passenger Terms and Code of Conduct
                  </Text>
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.checkboxContainer}
                onPress={() => setAgreedToGPS(!agreedToGPS)}
              >
                <Ionicons
                  name={agreedToGPS ? "checkbox" : "square-outline"}
                  size={22}
                  color="#0047AB"
                />
                <Text style={styles.checkboxText}>
                  I consent to GPS tracking during active trips
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.submitBtn} onPress={() => {}}>
                <Text style={styles.submitBtnText}>Submit Registration</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.backFullBtn}
                onPress={() => router.back()}
              >
                <Text style={styles.backFullBtnText}>Back</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.footerRow}>
              <Text style={styles.pageIndicator}>2 / 2</Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: "white",
  },
  redOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(180, 0, 0, 0.4)",
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  topSection: {
    height: 180,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: 200,
    height: 100,
    resizeMode: "contain",
  },
  bottomSection: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 25,
    paddingBottom: Platform.OS === "ios" ? 40 : 30,
  },
  contentContainer: {
    paddingTop: 30,
    flex: 1,
  },
  headerBadge: {
    backgroundColor: "#D32F2F",
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
    marginBottom: 8,
  },
  headerBadgeText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  stepTitle: {
    textAlign: "center",
    color: "#D32F2F",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 25,
  },
  labelText: {
    fontSize: 13,
    color: "#0047AB",
    fontWeight: "600",
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D1DCEB",
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: "white",
    height: 48,
    overflow: "hidden",
  },
  iconBox: {
    backgroundColor: "#0047AB",
    width: 48,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    flex: 1,
    paddingHorizontal: 12,
    fontSize: 15,
    color: "#333",
  },
  eyeIcon: {
    paddingRight: 15,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },
  checkboxText: {
    fontSize: 12,
    color: "#0047AB",
    marginLeft: 10,
    flexShrink: 1,
    lineHeight: 18,
  },
  linkText: {
    textDecorationLine: "underline",
    fontWeight: "600",
  },
  submitBtn: {
    backgroundColor: "#2ECC71",
    width: "100%",
    height: 48,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
  submitBtnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  backFullBtn: {
    backgroundColor: "#0047AB",
    width: "100%",
    height: 48,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
  },
  backFullBtnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  footerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 30,
  },
  pageIndicator: {
    fontSize: 18,
    color: "#0047AB",
    fontWeight: "bold",
  },
});

export default RegisterPassenger2;
