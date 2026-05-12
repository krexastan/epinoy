import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";
import { useRouter } from "expo-router";

// logo shown once
let animationHasPlayed = false;

const Home = () => {
  const router = useRouter();

  const [currentStep, setCurrentStep] = useState(
    animationHasPlayed ? "selection" : "logo",
  );
  const fadeAnim = useState(new Animated.Value(0))[0];

  useEffect(() => {
    if (animationHasPlayed) return;

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      setCurrentStep("selection");
      animationHasPlayed = true;
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (currentStep === "logo") {
    return (
      <ImageBackground
        source={require("../assets/epinoy/bg.png")}
        style={styles.fullScreen}
      >
        <Animated.View style={[styles.overlay, { opacity: fadeAnim }]}>
          <Image
            source={require("../assets/epinoy/logo.png")}
            style={styles.splashLogo}
          />
        </Animated.View>
      </ImageBackground>
    );
  }

  // driver or passenger
  return (
    <ImageBackground
      source={require("../assets/epinoy/bg.png")}
      style={styles.fullScreen}
    >
      <View style={styles.mainOverlay}>
        <View style={styles.headerContainer}>
          <Image
            source={require("../assets/epinoy/logo.png")}
            style={styles.mainLogo}
          />
        </View>

        <View style={styles.selectionContainer}>
          <Text style={styles.welcomeText}>WELCOME TO</Text>
          <Text style={styles.brandText}>E-PINOY MOBILITY SYSTEM INC.</Text>

          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={styles.selectionButton}
              onPress={() =>
                router.push({ pathname: "/login", params: { role: "driver" } })
              }
            >
              <Text style={styles.buttonLabel}>I'm Driver</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.selectionButton}
              onPress={() =>
                router.push({
                  pathname: "/login",
                  params: { role: "passenger" },
                })
              }
            >
              <Text style={styles.buttonLabel}>I'm Passenger</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(180, 0, 0, 0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  mainOverlay: {
    flex: 1,
    backgroundColor: "rgba(180, 0, 0, 0.6)",
    paddingHorizontal: 30,
  },
  splashLogo: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
  headerContainer: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
  mainLogo: {
    width: 220,
    height: 220,
    resizeMode: "contain",
  },
  selectionContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    letterSpacing: 1,
  },
  brandText: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "600",
    marginBottom: 40,
    textAlign: "center",
  },
  buttonGroup: {
    width: "100%",
    gap: 15,
  },
  selectionButton: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonLabel: {
    color: "#0047AB",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Home;
