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
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const TripSummaryPassenger = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("History");

  const tripData = {
    History: [
      {
        id: 1,
        driver: "Juan Dela Cruz",
        time: "Today 6:05pm",
        pickup: "Jojo Macapinlac",
        destination: "Juan Streets",
        distance: "4.5km",
        duration: "36min",
        fare: "179.00",
      },
      {
        id: 2,
        driver: "Juan Dela Cruz",
        time: "Today 6:05pm",
        pickup: "Casa Lily",
        destination: "folife Marketing gandus m...",
        distance: "2.1km",
        duration: "15min",
        fare: "85.00",
      },
    ],
    Upcoming: [
      {
        id: 3,
        date: "November 1, 2025 (Today)",
        time: "8:00 am",
        pickup: "Jojo Macapinlac",
        destination: "Juan Streets",
        distance: "4.5km",
        duration: "36min",
        fare: "179.00",
      },
    ],
    Cancelled: [
      {
        id: 4,
        driver: "Juan Dela Cruz",
        time: "Today 6:05pm",
        pickup: "Jojo Macapinlac",
        destination: "Juan Streets",
        distance: "4.5km",
        duration: "36min",
        fare: "179.00",
      },
    ],
  };

  const renderContent = () => {
    if (activeTab === "History") {
      return (
        <>
          <Text style={styles.recentLabel}>Recent</Text>
          {tripData.History.map((item) => (
            <View key={item.id} style={styles.tripCard}>
              <View style={styles.cardHeader}>
                <Text style={styles.driverText}>Driven by: {item.driver}</Text>
                <View style={styles.headerRight}>
                  <Text style={styles.timeText}>{item.time}</Text>
                  <TouchableOpacity>
                    <MaterialIcons
                      name="file-download"
                      size={24}
                      color="#555"
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.locationRow}>
                <View style={styles.iconCircleRed}>
                  <MaterialIcons name="location-on" size={18} color="white" />
                </View>
                <View style={styles.locationInput}>
                  <Text style={styles.locationTextRed}>{item.pickup}</Text>
                </View>
              </View>

              <View style={styles.locationRow}>
                <View style={styles.iconCircleGreen}>
                  <MaterialIcons name="location-on" size={18} color="white" />
                </View>
                <View style={styles.locationInput}>
                  <Text style={styles.locationTextGreen}>
                    {item.destination}
                  </Text>
                </View>
              </View>

              <View style={styles.statsRow}>
                <View>
                  <Text style={styles.statLabel}>
                    Distance: {item.distance}
                  </Text>
                  <Text style={styles.fareLabel}>Fare:</Text>
                </View>
                <View style={{ alignItems: "flex-end" }}>
                  <Text style={styles.statLabel}>
                    Time Duration: {item.duration}
                  </Text>
                  <Text style={styles.fareAmount}>₱ {item.fare}</Text>
                </View>
              </View>

              <View style={styles.actionButtonsRow}>
                <TouchableOpacity style={styles.viewDetailsBtn}>
                  <Text style={styles.btnTextWhite}>View Details</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.addFavBtn}>
                  <Text style={styles.btnTextWhite}>Add to Favorites</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.bookAgainBtn}>
                <Text style={styles.btnTextWhite}>Book Again</Text>
              </TouchableOpacity>
            </View>
          ))}
        </>
      );
    }

    if (activeTab === "Upcoming") {
      return (
        <>
          <Text style={styles.recentLabel}>Scheduled rides</Text>
          {tripData.Upcoming.map((item) => (
            <View key={item.id} style={styles.tripCard}>
              <View style={styles.cardHeader}>
                <Text style={styles.dateText}>{item.date}</Text>
                <Text style={styles.timeLabel}>{item.time}</Text>
              </View>

              <View style={styles.locationRow}>
                <View style={styles.iconCircleRed}>
                  <MaterialIcons name="location-on" size={18} color="white" />
                </View>
                <View style={styles.locationInput}>
                  <Text style={styles.locationTextRed}>{item.pickup}</Text>
                </View>
              </View>
              <View style={styles.locationRow}>
                <View style={styles.iconCircleGreen}>
                  <MaterialIcons name="location-on" size={18} color="white" />
                </View>
                <View style={styles.locationInput}>
                  <Text style={styles.locationTextGreen}>
                    {item.destination}
                  </Text>
                </View>
              </View>

              <View style={styles.statsRow}>
                <Text style={styles.statLabel}>Distance: {item.distance}</Text>
                <Text style={styles.statLabel}>
                  Duration Time: {item.duration}
                </Text>
              </View>

              <View style={styles.statsRow}>
                <Text style={styles.fareLabel}>Estimate Fare:</Text>
                <Text style={styles.fareAmount}>₱ {item.fare}</Text>
              </View>

              <View style={styles.actionButtonsRow}>
                <TouchableOpacity style={styles.viewDetailsBtn}>
                  <Text style={styles.btnTextWhite}>View Details</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.editBtn}>
                  <Text style={styles.btnTextWhite}>Edit</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.cancelBtn}>
                <Text style={styles.btnTextWhite}>Cancel</Text>
              </TouchableOpacity>
            </View>
          ))}
        </>
      );
    }

    if (activeTab === "Cancelled") {
      return (
        <>
          <Text style={styles.recentLabel}>Recent</Text>
          {tripData.Cancelled.map((item) => (
            <View
              key={item.id}
              style={[styles.tripCard, { backgroundColor: "#FFF5F5" }]}
            >
              <View style={styles.cardHeader}>
                <Text style={styles.driverText}>Driver: {item.driver}</Text>
                <Text style={styles.timeText}>{item.time}</Text>
              </View>

              <View style={styles.locationRow}>
                <View style={styles.iconCircleRed}>
                  <MaterialIcons name="location-on" size={18} color="white" />
                </View>
                <View style={styles.locationInput}>
                  <Text style={styles.locationTextRed}>{item.pickup}</Text>
                </View>
              </View>
              <View style={styles.locationRow}>
                <View style={styles.iconCircleGreen}>
                  <MaterialIcons name="location-on" size={18} color="white" />
                </View>
                <View style={styles.locationInput}>
                  <Text style={styles.locationTextGreen}>
                    {item.destination}
                  </Text>
                </View>
              </View>

              <View style={styles.statsRow}>
                <Text style={styles.statLabel}>Distance: {item.distance}</Text>
                <Text style={styles.statLabel}>
                  Estimate Time: {item.duration}
                </Text>
              </View>

              <View style={styles.statsRow}>
                <Text style={styles.fareLabel}>Fare:</Text>
                <Text style={styles.fareAmount}>₱ {item.fare}</Text>
              </View>

              <TouchableOpacity style={styles.rebookBtn}>
                <Text style={styles.btnTextWhite}>Re-Book</Text>
              </TouchableOpacity>
            </View>
          ))}
        </>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={["bottom", "left", "right"]}>
      <ImageBackground
        source={require("../assets/epinoy/bg.png")}
        style={styles.headerBackground}
      >
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
      </ImageBackground>

      <View style={styles.contentContainer}>
        <View style={styles.titleRow}>
          <Text style={styles.headerTitle}>Trip Summary</Text>
          <TouchableOpacity style={styles.filterBtn}>
            <Text style={styles.filterText}>Filter: By Date</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.tabContainer}>
          <TouchableOpacity
            onPress={() => setActiveTab("History")}
            style={activeTab === "History" ? styles.activeTab : styles.tabItem}
          >
            <Text
              style={
                activeTab === "History"
                  ? styles.activeTabText
                  : styles.inactiveTabText
              }
            >
              History
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setActiveTab("Upcoming")}
            style={activeTab === "Upcoming" ? styles.activeTab : styles.tabItem}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={
                  activeTab === "Upcoming"
                    ? styles.activeTabText
                    : styles.inactiveTabText
                }
              >
                Upcoming ride/s
              </Text>
              <View style={styles.redDot} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setActiveTab("Cancelled")}
            style={
              activeTab === "Cancelled" ? styles.activeTab : styles.tabItem
            }
          >
            <Text
              style={
                activeTab === "Cancelled"
                  ? styles.activeTabText
                  : styles.inactiveTabText
              }
            >
              Cancelled
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            placeholderTextColor="#C7C7CD"
          />
          <Ionicons name="search" size={20} color="#2B5797" />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollList}
        >
          {renderContent()}
        </ScrollView>
      </View>

      <View style={styles.bottomNav}>
        <View style={styles.navItems}>
          <TouchableOpacity
            style={styles.navLink}
            onPress={() => router.push("/dashboard_passenger")}
          >
            <Image
              source={require("../assets/epinoy/car/passenger/home.png")}
              style={styles.navIcon}
            />
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>

          <View style={{ width: 60 }} />

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

        <TouchableOpacity style={styles.historyFab}>
          <View style={styles.fabInner}>
            <Image
              source={require("../assets/epinoy/car/passenger/history.png")}
              style={styles.fabIconImage}
            />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F9FF" },
  headerBackground: { height: 100, justifyContent: "center", paddingLeft: 15 },
  backButton: { marginTop: 10 },
  contentContainer: {
    flex: 1,
    backgroundColor: "#F5F9FF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: -20,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: { fontSize: 32, fontWeight: "bold", color: "#2B5797" },
  filterBtn: {
    borderWidth: 1,
    borderColor: "#2B5797",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: "white",
  },
  filterText: { color: "#2B5797", fontSize: 14 },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#2B5797",
    paddingBottom: 8,
  },
  activeTabText: { color: "#2B5797", fontWeight: "bold", fontSize: 16 },
  tabItem: { flexDirection: "row", paddingBottom: 8 },
  inactiveTabText: { color: "#888", fontSize: 16 },
  redDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "red",
    marginLeft: 2,
  },
  searchContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#2B5797",
    alignItems: "center",
    paddingHorizontal: 15,
    height: 45,
    marginBottom: 15,
  },
  searchInput: { flex: 1, fontSize: 16 },
  recentLabel: {
    color: "#2B5797",
    fontWeight: "bold",
    marginBottom: 15,
    fontSize: 16,
  },
  tripCard: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  driverText: { color: "#2B5797", fontWeight: "600" },
  dateText: { color: "#2B5797", fontWeight: "500", fontSize: 14 },
  timeLabel: { color: "#888", fontSize: 14 },
  headerRight: { flexDirection: "row", alignItems: "center" },
  timeText: { color: "#888", fontSize: 12, marginRight: 5 },
  locationRow: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  iconCircleRed: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#D63439",
    justifyContent: "center",
    alignItems: "center",
  },
  iconCircleGreen: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#32CD32",
    justifyContent: "center",
    alignItems: "center",
  },
  locationInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#D0E1F9",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginLeft: 10,
  },
  locationTextRed: { color: "#D63439" },
  locationTextGreen: { color: "#32CD32" },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  statLabel: { color: "#2B5797", fontSize: 13 },
  fareLabel: {
    color: "#D63439",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
  },
  fareAmount: { color: "#D63439", fontSize: 18, fontWeight: "bold" },
  actionButtonsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  viewDetailsBtn: {
    backgroundColor: "#6495ED",
    borderRadius: 8,
    flex: 0.48,
    paddingVertical: 10,
    alignItems: "center",
  },
  addFavBtn: {
    backgroundColor: "#1E90FF",
    borderRadius: 8,
    flex: 0.48,
    paddingVertical: 10,
    alignItems: "center",
  },
  editBtn: {
    backgroundColor: "#00C851",
    borderRadius: 8,
    flex: 0.48,
    paddingVertical: 10,
    alignItems: "center",
  },
  cancelBtn: {
    backgroundColor: "#D63439",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 10,
  },
  bookAgainBtn: {
    backgroundColor: "#0047AB",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 10,
  },
  rebookBtn: {
    backgroundColor: "#D63439",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 10,
  },
  btnTextWhite: { color: "white", fontWeight: "bold" },
  scrollList: { paddingBottom: 20 },
  bottomNav: {
    height: 70,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    position: "relative",
    justifyContent: "center",
  },
  navItems: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 10,
  },
  navLink: { alignItems: "center", justifyContent: "center" },
  navIcon: {
    width: 28,
    height: 28,
    resizeMode: "contain",
    tintColor: "#D63439",
  },
  navText: { fontSize: 11, color: "#D63439", marginTop: 2, fontWeight: "500" },
  historyFab: {
    position: "absolute",
    top: -30,
    left: width * 0.18,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  fabInner: {
    width: 66,
    height: 66,
    borderRadius: 33,
    backgroundColor: "#D63439",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "white",
  },
  fabIconImage: {
    width: 35,
    height: 35,
    resizeMode: "contain",
    tintColor: "white",
  },
});

export default TripSummaryPassenger;
