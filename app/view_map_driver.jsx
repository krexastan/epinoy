import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  StatusBar,
  ImageBackground,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ViewMapDriver = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ImageBackground
        source={require("../assets/epinoy/bg.png")}
        style={[styles.headerBackground, { paddingTop: insets.top }]}
        resizeMode="cover"
      >
        <View style={styles.headerContent}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backCircle}
          >
            <Ionicons name="arrow-back" size={24} color="#D63439" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Map Viewing</Text>
        </View>
      </ImageBackground>

      {/* map */}
      <View style={styles.mapContainer}>
        <ImageBackground
          source={require("../assets/epinoy/car/driver/map.png")}
          style={styles.mapImage}
          resizeMode="cover"
        >
          <View style={styles.placeholderOverlay}>
            <View style={styles.mapInnerBorder} />
          </View>
        </ImageBackground>
      </View>

      <View style={[styles.detailsCard, { paddingBottom: insets.bottom + 20 }]}>
        <View style={styles.dragHandle} />

        <View style={styles.infoRow}>
          <Text style={styles.distanceText}>616m</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.currencySymbol}>₱</Text>
            <Text style={styles.priceText}> 600.00</Text>
          </View>
        </View>

        <View style={styles.timeWrapper}>
          <View style={styles.redUnderline} />
          <Text style={styles.timeLabel}>
            Time to reach Destination: 5 mins
          </Text>
        </View>

        <TouchableOpacity
          style={styles.pickupButton}
          onPress={() => router.push("/trip_driver")}
        >
          <Text style={styles.pickupButtonText}>Start Pickup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#D63439" },

  headerBackground: {
    width: "100%",
    paddingBottom: 20,
    overflow: "hidden",
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  headerTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 15,
  },
  backCircle: {
    backgroundColor: "white",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },

  mapContainer: {
    flex: 1,
    backgroundColor: "#E0E0E0",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    overflow: "hidden",
    marginTop: -20,
  },
  mapImage: { flex: 1 },
  placeholderOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.05)",
  },
  mapInnerBorder: {
    width: "90%",
    height: "80%",
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "rgba(214, 52, 57, 0.3)",
    borderStyle: "dashed",
  },
  detailsCard: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 25,
    paddingTop: 15,
    elevation: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
  },
  dragHandle: {
    width: 60,
    height: 5,
    backgroundColor: "#E0E0E0",
    borderRadius: 3,
    alignSelf: "center",
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 10,
  },
  distanceText: { fontSize: 32, fontWeight: "bold", color: "#333" },
  priceContainer: { flexDirection: "row", alignItems: "center" },
  currencySymbol: { fontSize: 24, color: "#D63439", fontWeight: "bold" },
  priceText: { fontSize: 22, color: "#D63439", fontWeight: "bold" },
  timeWrapper: { alignItems: "center", marginBottom: 25 },
  redUnderline: {
    height: 2,
    backgroundColor: "#D63439",
    width: "100%",
    marginBottom: 6,
  },
  timeLabel: { color: "#D63439", fontSize: 14, fontWeight: "700" },
  pickupButton: {
    backgroundColor: "#D63439",
    borderRadius: 15,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  pickupButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1,
  },
});

export default ViewMapDriver;
