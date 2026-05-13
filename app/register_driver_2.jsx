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
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

const RegisterDriver2 = () => {
  const router = useRouter();

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
                <Text style={styles.headerBadgeText}>Driver Registration</Text>
              </View>
              <Text style={styles.stepTitle}>License & Identification</Text>

              <Text style={styles.labelText}>Driver's License Number</Text>
              <View style={styles.inputWrapper}>
                <View style={styles.iconBox}>
                  <FontAwesome name="id-card" size={18} color="white" />
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="Ex: N01-00-000000"
                  placeholderTextColor="#A9B9D1"
                />
              </View>

              <Text style={styles.labelText}>License Expiry Date</Text>
              <View style={styles.inputWrapper}>
                <View style={styles.iconBox}>
                  <FontAwesome
                    name="calendar-times-o"
                    size={18}
                    color="white"
                  />
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="MM/DD/YYYY"
                  placeholderTextColor="#A9B9D1"
                />
              </View>

              <Text style={styles.labelText}>License (Front View)</Text>
              <View style={styles.uploadContainer}>
                <TextInput
                  style={styles.uploadInput}
                  placeholder="No file selected"
                  editable={false}
                  placeholderTextColor="#A9B9D1"
                />
                <TouchableOpacity style={styles.attachButton}>
                  <Text style={styles.attachText}>Attach File</Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.labelText}>License (Back View)</Text>
              <View style={styles.uploadContainer}>
                <TextInput
                  style={styles.uploadInput}
                  placeholder="No file selected"
                  editable={false}
                  placeholderTextColor="#A9B9D1"
                />
                <TouchableOpacity style={styles.attachButton}>
                  <Text style={styles.attachText}>Attach File</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.footerRow}>
              <Text style={styles.pageIndicator}>2 / 5</Text>
              <View style={styles.navButtons}>
                <TouchableOpacity
                  style={styles.backNavButton}
                  onPress={() => router.back()}
                >
                  <Text style={styles.backNavText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.nextNavButton}
                  onPress={() => router.push("/register_driver_3")}
                >
                  <Text style={styles.nextNavText}>Next</Text>
                </TouchableOpacity>
              </View>
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
  uploadContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D1DCEB",
    borderRadius: 8,
    backgroundColor: "white",
    height: 48,
    marginBottom: 16,
    paddingRight: 8,
  },
  uploadInput: {
    flex: 1,
    paddingHorizontal: 12,
    fontSize: 15,
    color: "#333",
  },
  attachButton: {
    backgroundColor: "#E0E0E0",
    height: 32,
    paddingHorizontal: 15,
    justifyContent: "center",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#C0C0C0",
  },
  attachText: {
    color: "#666",
    fontSize: 12,
    fontWeight: "600",
  },
  footerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
  },
  pageIndicator: {
    fontSize: 18,
    color: "#0047AB",
    fontWeight: "bold",
  },
  navButtons: {
    flexDirection: "row",
    gap: 12,
  },
  backNavButton: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: "#0047AB",
  },
  backNavText: {
    color: "#0047AB",
    fontWeight: "bold",
    fontSize: 15,
  },
  nextNavButton: {
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderRadius: 8,
    backgroundColor: "#0047AB",
  },
  nextNavText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default RegisterDriver2;
