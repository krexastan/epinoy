import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  Image,
  ImageBackground,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const DashboardPassenger = () => {
  const router = useRouter();
  const [selectedRide, setSelectedRide] = useState(null);
  const [isLocationConfirmed, setIsLocationConfirmed] = useState(false);
  const [isDestinationClicked, setIsDestinationClicked] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const notifications = 5;

  const handleRideSelect = (rideType) => {
    setSelectedRide(rideType);
    setIsLocationConfirmed(false);
    setIsDestinationClicked(false);
  };

  const handleConfirmLocation = () => {
    setIsLocationConfirmed(true);
  };

  const handleDestinationClick = () => {
    setIsDestinationClicked(true);
  };

  const toggleOnlineStatus = () => {
    const nextState = !isOnline;
    setIsOnline(nextState);
    if (!nextState) setSelectedRide(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={toggleOnlineStatus}
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
          <TouchableOpacity style={styles.iconButton}>
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
            onPress={() => router.push("/support_passenger")}
          >
            <View style={styles.blueCircle}>
              <Image
                source={require("../assets/epinoy/car/passenger/support_blue.png")}
                style={styles.customIconStyle}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.mapWrapper}>
        <ImageBackground
          source={require("../assets/epinoy/car/passenger/map.png")}
          style={styles.mapBackground}
        >
          {isOnline && selectedRide && (
            <View style={styles.topOverlayContainer}>
              {!isLocationConfirmed ? (
                <View style={styles.searchBar}>
                  <View style={styles.searchIconBox}>
                    <Ionicons name="search" size={20} color="white" />
                  </View>
                  <TextInput
                    style={styles.searchInput}
                    placeholder="Enter address to search"
                    placeholderTextColor="#888"
                  />
                </View>
              ) : (
                <View>
                  <View style={styles.destinationSelectionCard}>
                    <Text style={styles.destinationGreeting}>
                      Hi, Janine! Where do you want to go?
                    </Text>
                    <View style={styles.selectionRow}>
                      <View style={styles.selectionInputMain}>
                        <Text style={styles.selectionLabel}>
                          Pick-up Location
                        </Text>
                        <View style={styles.innerInputRow}>
                          <MaterialIcons
                            name="location-on"
                            size={18}
                            color="#D63439"
                          />
                          <Text style={styles.innerText} numberOfLines={1}>
                            Jojo Macapinlac...
                          </Text>
                        </View>
                      </View>
                      <View style={styles.pickUpBadge}>
                        <Text style={styles.pickUpBadgeText}>
                          Pick-up{"\n"}Point
                        </Text>
                      </View>
                    </View>
                    <TouchableOpacity
                      style={[styles.selectionRow, styles.destinationRow]}
                      onPress={handleDestinationClick}
                    >
                      <View style={styles.innerInputRow}>
                        <MaterialIcons
                          name="location-on"
                          size={18}
                          color="#2B5797"
                        />
                        <Text style={[styles.innerText, { color: "#2B5797" }]}>
                          Destination
                        </Text>
                      </View>
                      <Ionicons
                        name="chevron-forward-circle"
                        size={24}
                        color="#2B5797"
                      />
                    </TouchableOpacity>
                  </View>
                  {isDestinationClicked && (
                    <View style={[styles.searchBar, { marginTop: 15 }]}>
                      <View style={styles.searchIconBox}>
                        <Ionicons name="search" size={20} color="white" />
                      </View>
                      <TextInput
                        style={styles.searchInput}
                        placeholder="Search destination"
                        placeholderTextColor="#888"
                        autoFocus={true}
                      />
                    </View>
                  )}
                </View>
              )}
            </View>
          )}

          <View style={styles.contentOverlay}>
            {isOnline && (
              <>
                {!selectedRide ? (
                  <View style={styles.rideCard}>
                    <Text style={styles.greetingText}>
                      Hi, Janine! Where do you want to go?
                    </Text>
                    <Text style={styles.promptText}>Choose your ride!</Text>
                    {["bus", "taxi", "trike"].map((type) => (
                      <TouchableOpacity
                        key={type}
                        style={styles.rideOption}
                        onPress={() => handleRideSelect(type)}
                      >
                        <Image
                          source={
                            type === "bus"
                              ? require("../assets/epinoy/car/passenger/bus_vector.png")
                              : type === "taxi"
                                ? require("../assets/epinoy/car/passenger/car_vector.png")
                                : require("../assets/epinoy/car/passenger/trike_vector.png")
                          }
                          style={styles.rideImage}
                        />
                        <Text style={styles.rideLabel}>
                          E - {type.charAt(0).toUpperCase() + type.slice(1)}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                ) : (
                  <>
                    {!isLocationConfirmed && (
                      <View style={styles.pickupCard}>
                        <View style={styles.pickupHeader}>
                          <MaterialIcons
                            name="location-on"
                            size={24}
                            color="#D63439"
                          />
                          <Text style={styles.pickupTitle}>Pick-up Point</Text>
                        </View>
                        <Text style={styles.locationLabel}>Location:</Text>
                        <View style={styles.locationInputBox}>
                          <Text style={styles.locationText} numberOfLines={1}>
                            Jojo Macapinlac Bridal Couture...
                          </Text>
                        </View>
                        <TouchableOpacity
                          style={styles.doneBtn}
                          onPress={handleConfirmLocation}
                        >
                          <Text style={styles.doneBtnText}>Done</Text>
                        </TouchableOpacity>
                      </View>
                    )}

                    {isDestinationClicked && (
                      <View style={styles.destinationBottomCard}>
                        <View style={styles.destHeaderRow}>
                          <MaterialIcons
                            name="location-on"
                            size={24}
                            color="#32CD32"
                          />
                          <Text style={styles.destTitle}>Destination</Text>
                        </View>
                        <Text style={styles.dropOffLabel}>Drop off:</Text>
                        <View style={styles.destInputBox}>
                          <Text style={styles.destInputText}>
                            Juan Streets...
                          </Text>
                        </View>
                        <TouchableOpacity
                          style={styles.doneBtn}
                          onPress={() => console.log("Finalize")}
                        >
                          <Text style={styles.doneBtnText}>Done</Text>
                        </TouchableOpacity>
                      </View>
                    )}
                  </>
                )}
              </>
            )}
          </View>
        </ImageBackground>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.homeFab}
          onPress={() => setSelectedRide(null)}
        >
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
            onPress={() => router.push("/trip_summary_passenger")}
          >
            <Image
              source={require("../assets/epinoy/car/passenger/history.png")}
              style={styles.navIcon}
            />
            <Text style={styles.navText}>History</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navLink}
            onPress={() => router.push("/payment_passenger")}
          >
            <Image
              source={require("../assets/epinoy/car/passenger/scan.png")}
              style={styles.navIcon}
            />
            <Text style={styles.navText}>Payment</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navLink}
            onPress={() => router.push("/favorite_passenger")}
          >
            <Image
              source={require("../assets/epinoy/car/passenger/favorite.png")}
              style={styles.navIcon}
            />
            <Text style={styles.navText}>Favorites</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navLink}
            onPress={() => router.push("/profile_passenger")}
          >
            <Image
              source={require("../assets/epinoy/car/passenger/profile.png")}
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
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    zIndex: 10,
  },
  statusToggle: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusText: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 5,
  },
  headerIcons: { flexDirection: "row" },
  iconButton: { marginLeft: 10 },
  blueCircle: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: "#2B5797",
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
  mapWrapper: {
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    overflow: "hidden",
  },
  mapBackground: { flex: 1 },
  topOverlayContainer: { paddingHorizontal: 20, paddingTop: 15 },
  searchBar: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 8,
    height: 45,
    elevation: 5,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  searchIconBox: {
    backgroundColor: "#0047AB",
    width: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  searchInput: { flex: 1, paddingLeft: 10, fontSize: 14, color: "#333" },
  destinationSelectionCard: {
    backgroundColor: "#EBF4FF",
    borderRadius: 15,
    padding: 12,
    elevation: 4,
    borderWidth: 1,
    borderColor: "#D0E1F9",
  },
  destinationGreeting: {
    color: "#0047AB",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  selectionRow: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 8,
    alignItems: "center",
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#D0E1F9",
  },
  destinationRow: { justifyContent: "space-between", paddingVertical: 12 },
  selectionInputMain: { flex: 1 },
  selectionLabel: { color: "#0047AB", fontSize: 12, fontWeight: "600" },
  innerInputRow: { flexDirection: "row", alignItems: "center", marginTop: 2 },
  innerText: {
    marginLeft: 5,
    fontSize: 14,
    color: "#D63439",
    fontWeight: "500",
  },
  pickUpBadge: {
    borderWidth: 1,
    borderColor: "#D63439",
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginLeft: 10,
  },
  pickUpBadgeText: {
    color: "#D63439",
    fontSize: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  contentOverlay: { flex: 1, alignItems: "center", justifyContent: "center" },
  offlineCard: {
    backgroundColor: "rgba(255,255,255,0.9)",
    padding: 30,
    borderRadius: 20,
    alignItems: "center",
    width: width * 0.8,
  },
  offlineText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#555",
    marginTop: 10,
  },
  offlineSubtext: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    marginTop: 5,
  },
  pickupCard: {
    position: "absolute",
    bottom: 30,
    backgroundColor: "white",
    width: width * 0.9,
    borderRadius: 15,
    padding: 15,
    elevation: 10,
  },
  pickupHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  pickupTitle: {
    color: "#D63439",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 5,
  },
  locationLabel: { color: "#555", fontSize: 14, marginBottom: 5 },
  locationInputBox: {
    borderWidth: 1,
    borderColor: "#D0E1F9",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
  locationText: { color: "#2B5797", fontSize: 14 },
  doneBtn: {
    backgroundColor: "#D63439",
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
  },
  doneBtnText: { color: "white", fontSize: 18, fontWeight: "bold" },
  rideCard: {
    backgroundColor: "white",
    width: width * 0.85,
    borderRadius: 20,
    padding: 20,
    elevation: 10,
  },
  greetingText: {
    color: "#2B5797",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },
  promptText: {
    color: "#D63439",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  rideOption: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F7FF",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  rideImage: { width: 80, height: 50, resizeMode: "contain" },
  rideLabel: {
    fontSize: 22,
    color: "#2B5797",
    fontWeight: "600",
    marginLeft: 20,
  },
  destinationBottomCard: {
    position: "absolute",
    bottom: 10,
    backgroundColor: "#EBF4FF",
    width: width * 0.9,
    borderRadius: 15,
    padding: 15,
    elevation: 10,
    borderWidth: 1,
    borderColor: "#D0E1F9",
  },
  destHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  destTitle: {
    color: "#32CD32",
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 8,
  },
  dropOffLabel: { color: "#333", fontSize: 14, marginBottom: 5 },
  destInputBox: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#D0E1F9",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  destInputText: { color: "#2B5797", fontSize: 16 },
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
  fabIcon: { width: "100%", height: "100%", resizeMode: "cover" },
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
  navIcon: { width: 28, height: 28, resizeMode: "contain" },
  navText: { fontSize: 9, color: "#D63439", marginTop: 4, fontWeight: "500" },

  customIconStyle: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
});

export default DashboardPassenger;
