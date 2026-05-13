import React from "react";
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
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const FavoritePassenger = () => {
  const router = useRouter();

  const favoriteItems = [
    {
      id: 1,
      title: "Favorite 1",
      pickup: "Jojo Macapinlac",
      destination: "Juan Streets",
    },
    {
      id: 2,
      title: "Favorite 1",
      pickup: "Casa Lily",
      destination: "folife Marketing gandus m...",
    },
  ];

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
          <View style={styles.titleWithIcon}>
            <FontAwesome5 name="bookmark" size={28} color="#FFD700" solid />
            <Text style={styles.headerTitle}>Favorites</Text>
          </View>
          <TouchableOpacity style={styles.filterBtn}>
            <Text style={styles.filterText}>Filter: By Date</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            placeholderTextColor="#C7C7CD"
          />
          <Ionicons
            name="search"
            size={20}
            color="#2B5797"
            style={styles.searchIcon}
          />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollList}
        >
          {favoriteItems.map((item, index) => (
            <View key={index} style={styles.favoriteCard}>
              <View style={styles.cardHeader}>
                <Text style={styles.favoriteLabel}>{item.title}</Text>
                <View style={styles.cardActions}>
                  <TouchableOpacity>
                    <MaterialIcons name="edit" size={20} color="#555" />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ marginLeft: 15 }}>
                    <MaterialIcons
                      name="file-download"
                      size={20}
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

              <TouchableOpacity style={styles.removeBtn}>
                <Text style={styles.buttonText}>Remove</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bookNowBtn}>
                <Text style={styles.buttonText}>Book Now</Text>
              </TouchableOpacity>
            </View>
          ))}
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
              style={styles.navIconSmall}
            />
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navLink}
            onPress={() => router.push("/trip_summary_passenger")}
          >
            <Image
              source={require("../assets/epinoy/car/passenger/history.png")}
              style={styles.navIconSmall}
            />
            <Text style={styles.navText}>History</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navLink}
            onPress={() => router.push("/payment_passenger")}
          >
            <Image
              source={require("../assets/epinoy/car/passenger/scan.png")}
              style={styles.navIconSmall}
            />
            <Text style={styles.navText}>Payment</Text>
          </TouchableOpacity>

          <View style={{ width: 60 }} />

          <TouchableOpacity
            style={styles.navLink}
            onPress={() => router.push("/profile_passenger")}
          >
            <Image
              source={require("../assets/epinoy/car/passenger/profile.png")}
              style={styles.navIconSmall}
            />
            <Text style={styles.navText}>Profile</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.favoritesFab}>
          <View style={styles.fabInner}>
            <Ionicons name="star" size={45} color="white" />
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
    marginBottom: 15,
  },
  titleWithIcon: { flexDirection: "row", alignItems: "center" },
  headerTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2B5797",
    marginLeft: 10,
  },
  filterBtn: {
    borderWidth: 1,
    borderColor: "#2B5797",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: "white",
  },
  filterText: { color: "#2B5797", fontSize: 14 },
  searchContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#2B5797",
    alignItems: "center",
    paddingHorizontal: 15,
    height: 45,
    marginBottom: 20,
  },
  searchInput: { flex: 1, fontSize: 16 },
  favoriteCard: {
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
    marginBottom: 10,
  },
  favoriteLabel: { color: "#2B5797", fontSize: 14, fontWeight: "600" },
  cardActions: { flexDirection: "row" },
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
  locationTextRed: { color: "#D63439", fontWeight: "500" },
  locationTextGreen: { color: "#32CD32", fontWeight: "500" },
  removeBtn: {
    backgroundColor: "#1E90FF",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    marginBottom: 8,
  },
  bookNowBtn: {
    backgroundColor: "#0047AB",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
  },
  buttonText: { color: "white", fontSize: 18, fontWeight: "bold" },

  bottomNav: {
    height: 80,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  navItems: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  navLink: { alignItems: "center" },
  navIconSmall: { width: 24, height: 24, resizeMode: "contain" },
  navText: { fontSize: 10, color: "#D63439", marginTop: 4 },
  favoritesFab: {
    position: "absolute",
    top: -30,
    right: width * 0.2,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
  },
  fabInner: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: "#D63439",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "white",
  },
});

export default FavoritePassenger;
