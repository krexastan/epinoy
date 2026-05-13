import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

const ProfileDriver = () => {
  const router = useRouter();

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
            <Text style={styles.headerTitle}>Profile</Text>
          </View>
        </View>

        <View style={styles.contentContainer}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            {/* Avatar Section following image_54915a.png */}
            <View style={styles.avatarSection}>
              <View style={styles.avatarWrapper}>
                <Image
                  source={require("../assets/epinoy/car/driver/profile_tie.png")}
                  style={styles.profileImage}
                />
                <View style={styles.onlineDot} />
              </View>
              <Text style={styles.nameText}>Maria Dela Cruz</Text>
              <Text style={styles.roleLabelText}>Driver</Text>
              <Text style={styles.contactInfo}>juandc1@gmail.com</Text>
              <Text style={styles.contactInfo}>+63 956 435 4632</Text>
            </View>

            <View style={styles.menuContainer}>
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => router.push("/violation_driver")}
              >
                <Text style={styles.menuText}>Violation</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => router.push("/dashboard_profile_driver")}
              >
                <Text style={styles.menuText}>Driver Dashboard</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuText}>Update Contact Info</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuText}>Notification Preference</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuText}>Personal Info</Text>
              </TouchableOpacity>

              <View style={styles.actionRow}>
                <TouchableOpacity
                  style={[styles.actionButton, styles.settingsBtn]}
                  onPress={() => router.push("/setting_driver")}
                >
                  <Text style={[styles.actionText, styles.settingsText]}>
                    Settings
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.actionButton, styles.logoutBtn]}
                  onPress={() => router.replace("/")}
                >
                  <Text style={[styles.actionText, styles.logoutText]}>
                    Logout
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>

        <View style={styles.bottomNav}>
          <View style={styles.navItemsContainer}>
            <TouchableOpacity
              style={styles.navItem}
              onPress={() => router.push("/dashboard_driver")}
            >
              <Image
                source={require("../assets/epinoy/car/driver/onclick_home.png")}
                style={styles.navIcon}
              />
              <Text style={styles.navLabel}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItem}>
              <Image
                source={require("../assets/epinoy/car/driver/transaction.png")}
                style={styles.navIcon}
              />
              <Text style={styles.navLabel}>Transaction</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItem}>
              <Image
                source={require("../assets/epinoy/car/driver/scan.png")}
                style={styles.navIcon}
              />
              <Text style={styles.navLabel}>Payment</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItem}>
              <Image
                source={require("../assets/epinoy/car/driver/history.png")}
                style={styles.navIcon}
              />
              <Text style={styles.navLabel}>History</Text>
            </TouchableOpacity>

            <View style={styles.fabSpacer} />
          </View>

          <View style={styles.raisedFab}>
            <View style={styles.fabInner}>
              <Image
                source={require("../assets/epinoy/car/driver/profile.png")}
                style={styles.profileFabIcon}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: { flex: 1, backgroundColor: "white" },
  background: { flex: 1 },
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
  headerTitle: { color: "white", fontSize: 24, fontWeight: "500" },
  contentContainer: {
    flex: 1,
    backgroundColor: "#F0F7FF",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  scrollContent: { paddingTop: 20, paddingBottom: 100, paddingHorizontal: 25 },
  avatarSection: { alignItems: "center", marginBottom: 20 },
  avatarWrapper: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 5,
    borderColor: "#32CD32",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginBottom: 10,
    backgroundColor: "#E1E1E1",
    overflow: "hidden",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  onlineDot: {
    position: "absolute",
    bottom: 12,
    right: 12,
    width: 25,
    height: 25,
    borderRadius: 12.5,
    backgroundColor: "#00FF00",
    borderWidth: 3,
    borderColor: "#F0F7FF",
    zIndex: 5,
  },
  nameText: { fontSize: 26, fontWeight: "600", color: "#4A4A4A" },
  roleLabelText: {
    fontSize: 16,
    color: "#0056b3",
    fontWeight: "bold",
    marginVertical: 2,
  },
  contactInfo: { fontSize: 16, color: "#333", fontWeight: "600" },
  menuContainer: { width: "100%", marginTop: 10 },
  menuItem: {
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#0056b3",
    paddingVertical: 12,
    alignItems: "center",
    marginBottom: 8,
  },
  menuText: { color: "#0056b3", fontSize: 18, fontWeight: "500" },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },
  actionButton: {
    width: "48%",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
  settingsBtn: { backgroundColor: "white", borderColor: "#0056b3" },
  logoutBtn: { backgroundColor: "#0047AB", borderColor: "#0047AB" },
  actionText: { fontSize: 18, fontWeight: "500" },
  settingsText: { color: "#0056b3" },
  logoutText: { color: "white" },

  bottomNav: {
    height: 75,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  navItemsContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  navItem: { alignItems: "center", justifyContent: "center", flex: 1 },
  navIcon: { width: 24, height: 24, resizeMode: "contain" },
  navLabel: { fontSize: 10, color: "#C82333", marginTop: 4, fontWeight: "500" },
  fabSpacer: { width: 70 },
  raisedFab: {
    position: "absolute",
    right: 15,
    top: -30,
    width: 75,
    height: 75,
    borderRadius: 37.5,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  fabInner: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    backgroundColor: "#C82333",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "white",
  },
  profileFabIcon: {
    width: "60%",
    height: "60%",
    resizeMode: "contain",
    tintColor: "white",
  },
});

export default ProfileDriver;
