import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  Text,
  Dimensions,
  SafeAreaView,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import {
  MaterialCommunityIcons,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const DashboardDriver = () => {
  const router = useRouter();
  const [isOnline, setIsOnline] = useState(false);
  const notifications = 5;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setIsOnline(!isOnline)}
          style={styles.statusToggle}
        >
          <MaterialCommunityIcons
            name={isOnline ? "toggle-switch" : "toggle-switch-off"}
            size={60}
            color={isOnline ? "#10c044" : "#D63439"}
          />
          <Text
            style={[
              styles.statusText,
              { color: isOnline ? "#10c044" : "#D63439" },
            ]}
          >
            {isOnline ? "Online" : "Offline"}
          </Text>
        </TouchableOpacity>

        <View style={styles.headerIcons}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => router.push("/notification_driver")}
          >
            <View style={styles.blueCircle}>
              <Ionicons name="notifications" size={24} color="white" />
              {notifications > 0 && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{notifications}</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => router.push("/chat_support_driver")}
          >
            <View style={styles.blueCircle}>
              <MaterialCommunityIcons
                name="headphones-settings"
                size={24}
                color="white"
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.mapContainer}>
        <ImageBackground
          source={require("../assets/epinoy/car/driver/map.png")}
          style={styles.map}
          imageStyle={{ borderTopLeftRadius: 30, borderTopRightRadius: 30 }}
        >
          <View style={styles.searchWrapper}>
            <View style={styles.searchBar}>
              <View style={styles.searchIconContainer}>
                <Ionicons name="search" size={20} color="white" />
              </View>
              <Text style={styles.searchPlaceholder}>Search...</Text>
            </View>
          </View>
        </ImageBackground>
      </View>

      {isOnline && (
        <View style={styles.startActionContainer}>
          <TouchableOpacity
            style={styles.startBtn}
            onPress={() => router.push("/passenger_book_list")}
          >
            <Text style={styles.startBtnText}>START</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.homeFab}>
          <View style={styles.homeFabInner}>
            <Image
              source={require("../assets/epinoy/car/driver/onclick_home.png")}
              style={styles.fabIcon}
            />
          </View>
        </TouchableOpacity>

        <View style={styles.navItems}>
          <TouchableOpacity
            style={styles.navLink}
            onPress={() => router.push("/transactions")}
          >
            <Image
              source={require("../assets/epinoy/car/driver/transaction.png")}
              style={styles.navIcon}
            />
            <Text style={styles.navText}>Transaction</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navLink}
            onPress={() => router.push("/payment")}
          >
            <Image
              source={require("../assets/epinoy/car/driver/scan.png")}
              style={styles.navIcon}
            />
            <Text style={styles.navText}>Payment</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navLink}
            onPress={() => router.push("/history")}
          >
            <Image
              source={require("../assets/epinoy/car/driver/history.png")}
              style={styles.navIcon}
            />
            <Text style={styles.navText}>History</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navLink}
            onPress={() => router.push("/profile_driver")}
          >
            <Image
              source={require("../assets/epinoy/car/driver/profile.png")}
              style={styles.navIcon}
            />
            <Text style={styles.navText}>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  header: {
    height: 120,
    paddingTop: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    backgroundColor: "white",
    zIndex: 10,
  },
  statusToggle: { flexDirection: "row", alignItems: "center" },
  statusText: { fontSize: 18, fontWeight: "600", marginLeft: 5 },
  headerIcons: { flexDirection: "row" },
  iconButton: { marginLeft: 10 },
  blueCircle: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: "#0047AB",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "white",
    elevation: 3,
  },
  badge: {
    position: "absolute",
    top: -2,
    right: -2,
    backgroundColor: "#D63439",
    borderRadius: 10,
    width: 18,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "white",
  },
  badgeText: { color: "white", fontSize: 10, fontWeight: "bold" },
  mapContainer: {
    flex: 1,
    backgroundColor: "#ccc",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
    marginTop: -10,
  },
  map: { flex: 1 },
  searchWrapper: { padding: 20 },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    height: 45,
    borderWidth: 1,
    borderColor: "#0047AB",
    overflow: "hidden",
    elevation: 5,
  },
  searchIconContainer: {
    backgroundColor: "#0047AB",
    height: "100%",
    width: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  searchPlaceholder: { color: "#888", paddingLeft: 15, fontSize: 16 },
  startActionContainer: {
    position: "absolute",
    bottom: 120,
    width: "100%",
    alignItems: "center",
    zIndex: 20,
  },
  startBtn: {
    backgroundColor: "#0047AB",
    width: width * 0.7,
    paddingVertical: 10,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
  },
  startBtnText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    letterSpacing: 2,
  },

  bottomNav: {
    height: 80,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  homeFab: {
    position: "absolute",
    top: -35,
    left: 20,
    width: 85,
    height: 85,
    borderRadius: 42.5,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  homeFabInner: {
    width: 74,
    height: 74,
    borderRadius: 37,
    backgroundColor: "#D63439",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
    borderColor: "white",
    overflow: "hidden",
  },
  fabIcon: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  navItems: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: 10,
    marginLeft: 100,
  },
  navLink: {
    alignItems: "center",
    justifyContent: "center",
    width: (width - 120) / 4,
  },
  navIcon: {
    width: 28,
    height: 28,
    resizeMode: "contain",
  },
  navText: {
    fontSize: 9,
    color: "#D63439",
    marginTop: 4,
    fontWeight: "500",
  },
});

export default DashboardDriver;
