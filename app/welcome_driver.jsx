import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

const WelcomeDriver = () => {
  const router = useRouter();

  return (
    <View style={styles.mainWrapper}>
      {/* Background with Red Overlay as seen in image_8ec855.png */}
      <ImageBackground
        source={require("../assets/epinoy/bg.png")}
        style={StyleSheet.absoluteFillObject}
        resizeMode="cover"
      >
        <View style={styles.redOverlay} />
      </ImageBackground>

      <View style={styles.container}>
        {/* Top Logo Section */}
        <View style={styles.topSection}>
          <Image
            source={require("../assets/epinoy/logo.png")}
            style={styles.logoImage}
          />
        </View>

        {/* Bottom Content Card Section */}
        <View style={styles.bottomSection}>
          <Text style={styles.welcomeText}>Hi, Maria Dela Cruz!</Text>

          <View style={styles.card}>
            <Image
              source={require("../assets/epinoy/car/driver/car_red.png")}
              style={styles.driverIllustration}
              resizeMode="contain"
            />
            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>Ready to drive?”</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.goButton}
            onPress={() => router.push("/dashboard_driver")}
          >
            <Text style={styles.goButtonText}>Go</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    backgroundColor: "rgba(180, 0, 0, 0.5)", // Red tint matching image_8ec855.png
  },
  container: {
    flex: 1,
  },
  topSection: {
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  logoImage: {
    width: 280,
    height: 150,
    resizeMode: "contain",
  },
  bottomSection: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: "center",
    paddingTop: 40,
    paddingHorizontal: 25,
  },
  welcomeText: {
    fontSize: 26,
    color: "#0047AB",
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#F0F7FF", // Light blue tinted card
    width: "100%",
    borderRadius: 25,
    padding: 20,
    alignItems: "center",
    marginBottom: 35,
  },
  driverIllustration: {
    width: 200,
    height: 140,
    marginBottom: 10,
  },
  statusBadge: {
    backgroundColor: "white",
    width: "100%",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  statusText: {
    color: "#0047AB",
    fontSize: 22,
    fontWeight: "bold",
  },
  goButton: {
    backgroundColor: "#0047AB",
    width: "100%",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6,
  },
  goButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default WelcomeDriver;
