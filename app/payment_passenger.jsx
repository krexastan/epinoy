import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const PaymentPassenger = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} edges={["bottom", "left", "right"]}>
      <ImageBackground
        source={require("../assets/epinoy/bg.png")}
        style={styles.headerBackground}
      >
        <View style={styles.headerContent}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={30} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Scan</Text>
        </View>
      </ImageBackground>

      <View style={styles.contentContainer}>
        <View style={styles.scannerWrapper}>
          {/* qr */}
          <Image
            source={require("../assets/epinoy/car/passenger/scan_outer.png")}
            style={styles.qrFrame}
          />

          <Text style={styles.scanText}>Scan QR Code</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F9FF",
  },
  headerBackground: {
    height: 100,
    width: "100%",
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 15,
    paddingHorizontal: 15,
  },
  backButton: {
    zIndex: 10,
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    color: "white",
    fontSize: 24,
    fontWeight: "500",
    marginRight: 30,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "#F5F9FF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: -20,
    justifyContent: "center",
    alignItems: "center",
  },
  scannerWrapper: {
    alignItems: "center",
    marginTop: -50,
  },
  qrFrame: {
    width: 280,
    height: 280,
    resizeMode: "contain",
    marginBottom: 20,
  },
  scanText: {
    color: "#2B5797",
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default PaymentPassenger;
