import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const SupportPassenger = () => {
  const router = useRouter();

  const faqs = [
    {
      q: "Q1. How do I book a ride?",
      a: "Open the Passenger App, enter your pickup and drop-off location, then tap “Book Ride.” The system will automatically find the nearest available driver. You'll see the driver's name, vehicle details, and estimated time of arrival.",
    },
    {
      q: "Q2. How do I pay for my ride?",
      a: "You can pay using App Load, cash, GCash, or Card. After the trip, choose your preferred payment method and confirm the amount displayed on your screen.",
    },
    {
      q: "Q3. Can I schedule a ride in advance?",
      a: "Yes! Tap on the “Schedule Ride” option when booking. You can select your desired date and time, and the system will automatically assign a driver before your trip.",
    },
    {
      q: "Q4. How do I know if my booking was successful?",
      a: "Once confirmed, your screen will show driver details, the vehicle plate number, and the real-time location of your driver.",
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
          <Ionicons name="arrow-back" size={32} color="white" />
        </TouchableOpacity>
      </ImageBackground>

      <View style={styles.contentContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollPadding}
        >
          <Text style={styles.supportTitle}>Support</Text>
          <Text style={styles.faqHeader}>FAQ’s</Text>

          {faqs.map((item, index) => (
            <View key={index} style={styles.faqCard}>
              <Text style={styles.faqQuestion}>{item.q}</Text>
              <Text style={styles.faqAnswer}>{item.a}</Text>
            </View>
          ))}

          <TouchableOpacity
            style={styles.helpBtn}
            onPress={() => router.push("/chat_agent_passenger")}
          >
            <Text style={styles.btnText}>Help?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.chatBtn}
            onPress={() => router.push("/chat_agent_passenger")}
          >
            <Text style={styles.btnText}>Chat with Agent</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.bottomNav}>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F9FF" },
  headerBackground: { height: 120, justifyContent: "center", paddingLeft: 15 },
  backButton: { marginTop: -20 },
  contentContainer: {
    flex: 1,
    backgroundColor: "#F5F9FF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: -25,
    paddingHorizontal: 25,
  },
  scrollPadding: { paddingTop: 30, paddingBottom: 100 },
  supportTitle: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#C82333",
    marginBottom: 10,
  },
  faqHeader: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0047AB",
    marginBottom: 20,
  },
  faqCard: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#C82333",
    marginBottom: 8,
  },
  faqAnswer: { fontSize: 14, color: "#444", lineHeight: 20 },
  helpBtn: {
    backgroundColor: "#0047AB",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  chatBtn: {
    backgroundColor: "#1E90FF",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 12,
  },
  btnText: { color: "white", fontSize: 22, fontWeight: "500" },

  bottomNav: {
    flexDirection: "row",
    height: 75,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 5,
  },
  navLink: { alignItems: "center", justifyContent: "center", flex: 1 },
  navIcon: {
    width: 28,
    height: 28,
    resizeMode: "contain",
    tintColor: "#C82333",
  },
  navText: { fontSize: 11, color: "#C82333", marginTop: 4, fontWeight: "500" },
});

export default SupportPassenger;
