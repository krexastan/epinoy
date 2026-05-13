import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const SettingDriver = () => {
  const router = useRouter();

  const menuItems = [
    "About Us",
    "Contact Us",
    "Change Password",
    "terms and Conditions",
    "Data Privacy Policy",
  ];

  return (
    <SafeAreaView style={styles.safeContainer} edges={["bottom"]}>
      <ImageBackground
        source={require("../assets/epinoy/bg.png")}
        style={styles.background}
      >
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={28} color="white" />
          </TouchableOpacity>
          <View style={styles.titleContainer}>
            <Text style={styles.headerTitle}>Settings</Text>
          </View>
        </View>

        <View style={styles.contentContainer}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            <View style={styles.menuWrapper}>
              {menuItems.map((item, index) => (
                <TouchableOpacity key={index} style={styles.menuItem}>
                  <Text style={styles.menuText}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  background: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 35,
    paddingBottom: 20,
    paddingHorizontal: 20,
    position: "relative",
  },
  backButton: {
    position: "absolute",
    left: 20,
    top: 35,
    zIndex: 10,
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "500",
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "#F0F7FF",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  scrollContent: {
    paddingTop: "40%",
    paddingHorizontal: 30,
    paddingBottom: 40,
  },
  menuWrapper: {
    width: "100%",
  },
  menuItem: {
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#0056b3",
    paddingVertical: 12,
    alignItems: "center",
    marginBottom: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  menuText: {
    color: "#0056b3",
    fontSize: 18,
    fontWeight: "500",
  },
});

export default SettingDriver;
