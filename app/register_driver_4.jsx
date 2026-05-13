import React from "react";
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
  Alert,
} from "react-native";
import { useRouter } from "expo-router";

const RegisterDriver4 = () => {
  const router = useRouter();

  const handleUploadPress = () => {
    Alert.alert("Upload", "Open camera or gallery to upload photo.");
  };

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

              <Text style={styles.stepTitle}>Work Details</Text>

              <Text style={styles.labelText}>Driver's License</Text>
              <View style={styles.uploadRow}>
                <TouchableOpacity
                  style={styles.uploadBox}
                  onPress={handleUploadPress}
                >
                  <Text style={styles.uploadBoxText}>Front +</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.uploadBox}
                  onPress={handleUploadPress}
                >
                  <Text style={styles.uploadBoxText}>Back +</Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.labelText}>NBI or Police Clearance</Text>
              <View style={styles.attachWrapper}>
                <TextInput
                  style={styles.attachInput}
                  placeholder="Uploaded Docs name"
                  placeholderTextColor="#A9B9D1"
                  editable={false}
                />
                <TouchableOpacity
                  style={styles.attachButton}
                  onPress={handleUploadPress}
                >
                  <Text style={styles.attachButtonText}>Attach File</Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.labelText}>1x1 Photo / Selfie</Text>
              <View style={styles.attachWrapper}>
                <TextInput
                  style={styles.attachInput}
                  placeholder="Uploaded Docs name"
                  placeholderTextColor="#A9B9D1"
                  editable={false}
                />
                <TouchableOpacity
                  style={styles.attachButton}
                  onPress={handleUploadPress}
                >
                  <Text style={styles.attachButtonText}>Attach File</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.footerRow}>
              <Text style={styles.pageIndicator}>4 / 5</Text>

              <View style={styles.navButtons}>
                <TouchableOpacity
                  style={styles.backNavButton}
                  onPress={() => router.back()}
                >
                  <Text style={styles.backNavText}>Back</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.nextNavButton}
                  onPress={() => router.push("/register_driver_5")}
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
    width: 220,
    height: 110,
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
  uploadRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  uploadBox: {
    width: "48%",
    height: 90,
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "#D1E0F3",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  uploadBoxText: {
    color: "#0047AB",
    fontSize: 18,
    fontWeight: "bold",
  },
  attachWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 1.5,
    borderColor: "#D1E0F3",
    borderRadius: 8,
    height: 48,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  attachInput: {
    flex: 1,
    fontSize: 14,
    color: "#333",
  },
  attachButton: {
    backgroundColor: "#E0E0E0",
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#BDBDBD",
  },
  attachButtonText: {
    fontSize: 12,
    color: "#757575",
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
    paddingHorizontal: 30,
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
    paddingHorizontal: 40,
    borderRadius: 8,
    backgroundColor: "#0047AB",
  },
  nextNavText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default RegisterDriver4;
