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

const RegisterDriver = () => {
  const router = useRouter();
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const vehicleTypes = [
    {
      id: "ebus",
      label: "E - Bus",
      image: require("../assets/epinoy/car/driver/bus_vector.png"),
    },
    {
      id: "etaxi",
      label: "E - Taxi",
      image: require("../assets/epinoy/car/driver/car_vector.png"),
    },
    {
      id: "etrike",
      label: "E - Trike",
      image: require("../assets/epinoy/car/driver/trike_vector.png"),
    },
  ];

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
              <Text style={styles.stepTitle}>Basic Information</Text>

              <Text style={styles.selectLabel}>Select E-Taxi:</Text>

              {vehicleTypes.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={[
                    styles.vehicleCard,
                    selectedVehicle === item.id && styles.selectedCard,
                  ]}
                  onPress={() => setSelectedVehicle(item.id)}
                >
                  <Image source={item.image} style={styles.vehicleImage} />
                  <Text style={styles.vehicleLabel}>{item.label}</Text>
                </TouchableOpacity>
              ))}

              <Text style={styles.labelText}>E - Vehicle Number</Text>
              <View style={styles.uploadWrapper}>
                <TextInput
                  style={styles.uploadInput}
                  placeholder="Uploaded Picture Number"
                  placeholderTextColor="#A9B9D1"
                />
                <TouchableOpacity style={styles.attachButton}>
                  <Text style={styles.attachText}>Attach File</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.footerRow}>
              <Text style={styles.pageIndicator}>1 / 5</Text>
              {/* FIXED: Replaced <div> with <View> */}
              <View style={styles.navButtons}>
                <TouchableOpacity
                  style={styles.backNavButton}
                  onPress={() => router.back()}
                >
                  <Text style={styles.backNavText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.nextNavButton}
                  onPress={() => router.push("/register_driver_2")}
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
  mainWrapper: { flex: 1, backgroundColor: "white" },
  redOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(180, 0, 0, 0.4)",
  },
  container: { flex: 1 },
  scrollContent: { flexGrow: 1 },
  topSection: { height: 180, justifyContent: "center", alignItems: "center" },
  logoImage: { width: 200, height: 100, resizeMode: "contain" },
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
  headerBadgeText: { color: "white", fontSize: 18, fontWeight: "bold" },
  stepTitle: {
    textAlign: "center",
    color: "#D32F2F",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 20,
  },
  selectLabel: {
    fontSize: 13,
    color: "#0047AB",
    fontWeight: "600",
    marginBottom: 10,
  },
  vehicleCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F7FF",
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1.5,
    borderColor: "transparent",
  },
  selectedCard: {
    borderColor: "#0047AB",
    backgroundColor: "#E1EFFF",
  },
  vehicleImage: {
    width: 70,
    height: 45,
    resizeMode: "contain",
    marginRight: 15,
  },
  vehicleLabel: {
    fontSize: 22,
    color: "#0047AB",
    fontWeight: "bold",
  },
  labelText: {
    fontSize: 13,
    color: "#0047AB",
    fontWeight: "600",
    marginBottom: 8,
    marginTop: 10,
  },
  uploadWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D1DCEB",
    borderRadius: 8,
    backgroundColor: "white",
    height: 48,
    overflow: "hidden",
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
  pageIndicator: { fontSize: 18, color: "#0047AB", fontWeight: "bold" },
  navButtons: { flexDirection: "row", gap: 12 },
  backNavButton: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: "#0047AB",
  },
  backNavText: { color: "#0047AB", fontWeight: "bold", fontSize: 15 },
  nextNavButton: {
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderRadius: 8,
    backgroundColor: "#0047AB",
  },
  nextNavText: { color: "white", fontWeight: "bold", fontSize: 15 },
});

export default RegisterDriver;
