import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  TextInput,
  Image,
  Pressable,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const PassengerBookList = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [selectedCardId, setSelectedCardId] = useState(null);

  // Initial state for epinoy passengers
  const [passengers, setPassengers] = useState([
    {
      id: 1,
      name: "Juan Dela Cruz",
      price: "250",
      from: "San Francisco, CA",
      to: "Sacramento, CA",
      time: "2026-05-13 15:15:16",
    },
    {
      id: 2,
      name: "Maria Clara",
      price: "320",
      from: "Angeles City",
      to: "San Fernando",
      time: "2026-05-13 16:00:00",
    },
    {
      id: 3,
      name: "Jose Rizal",
      price: "180",
      from: "Dau Terminal",
      to: "SM Clark",
      time: "2026-05-13 17:30:00",
    },
  ]);

  const handleDecline = (id) => {
    setPassengers(passengers.filter((p) => p.id !== id));
  };

  const toggleMap = (id) => {
    setSelectedCardId(selectedCardId === id ? null : id);
  };

  const PassengerCard = ({ item }) => {
    const isShowingMap = selectedCardId === item.id;

    return (
      <Pressable
        onPress={() => toggleMap(item.id)}
        style={[styles.card, isShowingMap && styles.cardActive]}
      >
        <View style={styles.cardHeader}>
          <View style={styles.profileSection}>
            <Image
              source={require("../assets/epinoy/car/driver/profile_tie.png")}
              style={styles.avatar}
            />
            <Text style={styles.passengerName}>{item.name}</Text>
          </View>
          <View style={styles.priceTag}>
            <Text style={styles.priceText}>₱{item.price}</Text>
          </View>
        </View>

        <View style={styles.locationSection}>
          <View style={styles.timelineContainer}>
            <View style={[styles.dot, { backgroundColor: "#3DD36B" }]} />
            <View style={styles.line} />
            <View style={[styles.dot, { backgroundColor: "#D63439" }]} />
          </View>
          <View style={styles.addressContainer}>
            <Text style={styles.addressCity}>{item.from}</Text>
            <Text style={styles.addressTime}>{item.time}</Text>
            <View style={{ height: 15 }} />
            <Text style={styles.addressCity}>{item.to}</Text>
            <Text style={styles.addressTime}>{item.time}</Text>
          </View>
        </View>

        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={[styles.actionBtn, { backgroundColor: "#0047AB" }]}
            onPress={() => router.push("/passenger_message_driver")}
          >
            <Text style={styles.btnText}>Message</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.actionBtn, { backgroundColor: "#3DD36B" }]}
            onPress={() => router.push("/trip_driver")}
          >
            <Text style={styles.btnText}>Accept</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.actionBtn, { backgroundColor: "#D63439" }]}
            onPress={() => handleDecline(item.id)}
          >
            <Text style={styles.btnText}>Decline</Text>
          </TouchableOpacity>
        </View>

        {isShowingMap && (
          <View style={styles.mapOverlay}>
            <TouchableOpacity
              style={styles.viewMapBtn}
              onPress={() => router.push("/view_map_driver")}
            >
              <Text style={styles.viewMapText}>View Map</Text>
            </TouchableOpacity>
          </View>
        )}
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/epinoy/bg.png")}
        style={styles.background}
      >
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backCircle}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={28} color="#0047AB" />
          </TouchableOpacity>
        </View>

        <View style={styles.contentContainer}>
          {passengers.length > 0 ? (
            <>
              <View style={styles.listHeaderLabel}>
                <Text style={styles.listHeaderText}>Passenger Book List</Text>
              </View>

              <View style={styles.searchBar}>
                <Ionicons name="search" size={20} color="#0047AB" />
                <TextInput
                  style={styles.searchInput}
                  placeholder="Search near location..."
                  placeholderTextColor="#A9C1D1"
                  value={search}
                  onChangeText={setSearch}
                />
              </View>

              <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollList}
              >
                {passengers
                  .filter((p) =>
                    p.from.toLowerCase().includes(search.toLowerCase()),
                  )
                  .map((p) => (
                    <PassengerCard key={p.id} item={p} />
                  ))}
              </ScrollView>
            </>
          ) : (
            <View style={styles.emptyContainer}>
              <View style={styles.listHeaderLabel}>
                <Text style={styles.listHeaderText}>Passenger Book List</Text>
              </View>

              <View style={styles.emptyContent}>
                <Image
                  source={require("../assets/epinoy/car/driver/no_booking.png")}
                  style={styles.largeNoBookingImage}
                />
                <Text style={styles.emptyTitleText}>No Booking Available</Text>

                <TouchableOpacity
                  style={styles.okayBtnLarge}
                  onPress={() => router.back()}
                >
                  <Text style={styles.okayBtnText}>Okay</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  background: { flex: 1 },
  header: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  backCircle: {
    backgroundColor: "white",
    width: 45,
    height: 45,
    borderRadius: 22.5,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "#F0F7FF",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 20,
    marginTop: 15, // Raised from 20 to 15 (5px lift)
  },
  listHeaderLabel: {
    backgroundColor: "#D63439", // Changed to Red
    width: "100%",
    paddingVertical: 12,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 20,
  },
  listHeaderText: { color: "white", fontSize: 20, fontWeight: "bold" },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 25,
    paddingHorizontal: 15,
    marginTop: 20,
    height: 45,
    borderWidth: 1,
    borderColor: "#0047AB",
  },
  searchInput: { flex: 1, marginLeft: 10, color: "#0047AB" },
  scrollList: { paddingTop: 20, paddingBottom: 40 },
  card: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
  },
  cardActive: { backgroundColor: "#E6F0FF" },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileSection: { flexDirection: "row", alignItems: "center", gap: 10 },
  avatar: { width: 40, height: 40, borderRadius: 20 },
  passengerName: { fontSize: 20, color: "#333", fontWeight: "bold" },
  priceTag: {
    backgroundColor: "#D63439",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
  },
  priceText: { color: "white", fontWeight: "bold", fontSize: 18 },
  locationSection: { flexDirection: "row", marginTop: 15, paddingLeft: 10 },
  timelineContainer: { alignItems: "center", width: 20 },
  dot: { width: 12, height: 12, borderRadius: 6 },
  line: {
    width: 2,
    flex: 1,
    backgroundColor: "#0047AB",
    borderStyle: "dotted",
    marginVertical: 2,
  },
  addressContainer: { marginLeft: 10 },
  addressCity: { fontSize: 14, color: "#3DD36B", fontWeight: "bold" },
  addressTime: { fontSize: 10, color: "#888" },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    gap: 10,
  },
  actionBtn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  btnText: { color: "white", fontWeight: "bold", fontSize: 14 },
  mapOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 71, 171, 0.2)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  viewMapBtn: {
    backgroundColor: "white",
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#0047AB",
  },
  viewMapText: { color: "#0047AB", fontWeight: "bold", fontSize: 18 },

  // Empty State Styles
  emptyContainer: { flex: 1 },
  emptyContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 50,
  },
  largeNoBookingImage: {
    width: width * 0.5,
    height: width * 0.5,
    resizeMode: "contain",
    marginBottom: 20,
  },
  emptyTitleText: {
    color: "#0047AB",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 40,
  },
  okayBtnLarge: {
    backgroundColor: "#D63439", // Changed to Red
    width: "80%",
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: "center",
    elevation: 5,
  },
  okayBtnText: { color: "white", fontSize: 18, fontWeight: "bold" },
});

export default PassengerBookList;
