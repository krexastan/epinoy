import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  StatusBar,
  ScrollView,
  ImageBackground,
} from "react-native";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const TripDriver = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const [isOnline, setIsOnline] = useState(true);
  const [isPickedUp, setIsPickedUp] = useState(false);
  const [isTripStarted, setIsTripStarted] = useState(false);
  const [isTripEnded, setIsTripEnded] = useState(false);

  // placeholder toggle
  const [showRealMap, setShowRealMap] = useState(false);
  const notifications = 5;

  const renderTripActions = () => {
    if (isTripEnded) {
      return (
        <ScrollView
          style={styles.paymentScroll}
          contentContainerStyle={styles.paymentContent}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.paymentHeader}>Payment</Text>

          <View style={styles.paymentRow}>
            <Text style={styles.paymentLabel}>Fee</Text>
            <Text style={styles.paymentValue}>₱ 600.00</Text>
          </View>
          <View style={styles.paymentRow}>
            <Text style={styles.paymentLabel}>Total</Text>
            <Text style={styles.paymentValue}>₱ 600.00</Text>
          </View>

          <View style={styles.qrWrapper}>
            <Image
              source={require("../assets/epinoy/car/driver/qr_code.png")}
              style={styles.qrImage}
            />
          </View>

          <View style={styles.paymentButtonRow}>
            <TouchableOpacity
              style={styles.halfButton}
              onPress={() => router.push("/dashboard_driver")}
            >
              <Text style={styles.halfButtonText}>Confirm Cash</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.halfButton]}
              onPress={() => router.push("/dashboard_driver")}
            >
              <Text style={styles.halfButtonText}>Confirm QR</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      );
    }

    if (isTripStarted) {
      return (
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => setIsTripEnded(true)}
        >
          <Text style={styles.buttonText}>End Trip</Text>
        </TouchableOpacity>
      );
    }

    if (isPickedUp) {
      return (
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => setIsTripStarted(true)}
        >
          <Text style={styles.buttonText}>Start Trip</Text>
        </TouchableOpacity>
      );
    }

    return (
      <View style={styles.actionGroup}>
        <TouchableOpacity
          style={styles.messageButton}
          onPress={() => router.push("/passenger_message_driver")}
        >
          <Text style={styles.buttonText}>Message</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => setIsPickedUp(true)}
        >
          <Text style={styles.buttonText}>Confirm Pickup</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* map */}
      <View style={styles.mapContainer}>
        {!showRealMap ? (
          <ImageBackground
            source={require("../assets/epinoy/car/driver/map.png")}
            style={styles.mapImage}
            resizeMode="cover"
          >
            <View style={styles.fakeRouteLine} />
          </ImageBackground>
        ) : (
          <View style={{ flex: 1, backgroundColor: "#add8e6" }}>
            <Text>Real Map goes here</Text>
          </View>
        )}
      </View>

      <View style={[styles.topNav, { paddingTop: insets.top + 10 }]}>
        <TouchableOpacity
          style={styles.backCircle}
          onPress={() => router.push("/dashboard_driver")}
        >
          <Ionicons name="arrow-back" size={24} color="#D63439" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.statusToggle}
          onPress={() => setIsOnline(!isOnline)}
        >
          <MaterialCommunityIcons
            name={isOnline ? "toggle-switch" : "toggle-switch-off"}
            size={45}
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
          <TouchableOpacity style={styles.iconCircle}>
            <Ionicons name="notifications" size={20} color="white" />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{notifications}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconCircle}>
            <MaterialCommunityIcons
              name="headphones-settings"
              size={20}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flex: 1 }} />

      <View
        style={[
          styles.tripCard,
          { paddingBottom: insets.bottom > 0 ? insets.bottom : 20 },
          isTripEnded && styles.tripCardPayment,
        ]}
      >
        <View style={styles.dragHandle} />

        {!isTripEnded && (
          <View style={styles.tripInfoRow}>
            <Text style={styles.distanceText}>
              {isPickedUp || isTripStarted ? "6.16km" : "616m"}
            </Text>
            <Text style={styles.priceText}>₱ 600.00</Text>
          </View>
        )}

        {!isTripEnded && (
          <View style={styles.timeInfoContainer}>
            <View style={styles.redUnderline} />
            <Text style={styles.timeText}>
              Time to reach Destination: 5 mins
            </Text>
          </View>
        )}

        {renderTripActions()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
  },
  mapImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  fakeRouteLine: {
    position: "absolute",
    width: 6,
    height: "30%",
    backgroundColor: "#D63439",
    top: "30%",
    left: "45%",
    borderRadius: 3,
    transform: [{ rotate: "35deg" }],
  },

  topNav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 15,
    backgroundColor: "white",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
  },
  backCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F0F0F0",
    justifyContent: "center",
    alignItems: "center",
  },
  statusToggle: { flexDirection: "row", alignItems: "center" },
  statusText: { fontSize: 16, fontWeight: "bold", marginLeft: 2 },
  headerIcons: { flexDirection: "row", gap: 10 },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#D63439",
    justifyContent: "center",
    alignItems: "center",
  },

  badge: {
    position: "absolute",
    right: -2,
    top: -2,
    backgroundColor: "#3DD36B",
    borderRadius: 10,
    width: 16,
    height: 16,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "white",
  },
  badgeText: { color: "white", fontSize: 9, fontWeight: "bold" },

  tripCard: {
    backgroundColor: "white",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 25,
    paddingTop: 15,
    elevation: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
  },
  tripCardPayment: { height: "65%" },
  dragHandle: {
    width: 60,
    height: 5,
    backgroundColor: "#E0E0E0",
    borderRadius: 3,
    alignSelf: "center",
    marginBottom: 20,
  },
  tripInfoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  distanceText: { fontSize: 32, fontWeight: "bold", color: "#333" },
  priceText: { fontSize: 24, fontWeight: "bold", color: "#D63439" },
  timeInfoContainer: { marginBottom: 25, alignItems: "center" },
  redUnderline: {
    height: 2,
    backgroundColor: "#D63439",
    width: "100%",
    marginBottom: 5,
  },
  timeText: { color: "#D63439", fontSize: 14, fontWeight: "600" },
  actionGroup: { width: "100%" },
  messageButton: {
    backgroundColor: "#D63439",
    borderRadius: 12,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  actionButton: {
    backgroundColor: "#D63439",
    borderRadius: 12,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  buttonText: { color: "white", fontSize: 20, fontWeight: "bold" },
  paymentScroll: { flex: 1, width: "100%" },
  paymentContent: { alignItems: "center", width: "100%", paddingBottom: 20 },
  paymentHeader: {
    fontSize: 28,
    color: "#D63439",
    fontWeight: "bold",
    marginBottom: 20,
  },
  paymentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
    paddingVertical: 12,
  },
  paymentLabel: { fontSize: 18, color: "#666" },
  paymentValue: { fontSize: 18, color: "#333", fontWeight: "bold" },
  qrWrapper: {
    marginVertical: 20,
    padding: 10,
    backgroundColor: "#F9F9F9",
    borderRadius: 15,
  },
  qrImage: { width: 180, height: 180, resizeMode: "contain" },
  paymentButtonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    gap: 10,
    marginTop: 10,
  },
  halfButton: {
    flex: 1,
    backgroundColor: "#D63439",
    height: 55,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  halfButtonText: { color: "white", fontSize: 16, fontWeight: "bold" },
});

export default TripDriver;
