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
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

const DriverDashboard = () => {
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
            <Text style={styles.headerTitle}>Driver Dashboard</Text>
          </View>
        </View>

        <View style={styles.contentContainer}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            <View style={styles.carHeader}>
              <View style={styles.carIconWrapper}>
                <Image
                  source={require("../assets/epinoy/car/driver/car_vector.png")}
                  style={styles.carAvatar}
                />
              </View>
              <View style={styles.carTitleInfo}>
                <Text style={styles.carNameText}>Car Name 2025</Text>
                <Text style={styles.carSubtext}>E-Car</Text>
              </View>
            </View>

            <View style={styles.odoCard}>
              <View style={styles.odoRow}>
                <View style={styles.odoTextContainer}>
                  <Text style={styles.odoLabel}>Odometer</Text>
                  <Text style={styles.odoValue}>50,799</Text>
                  <Text style={styles.odoDate}>Last update: 10 Oct 2025</Text>
                </View>

                <TouchableOpacity style={styles.updateBtn}>
                  <Text style={styles.updateBtnText}>Update{"\n"}Odometer</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.sectionCard}>
              <Text style={styles.sectionTitle}>Assigned Vehicle:</Text>
              <View style={styles.vehicleRow}>
                <View style={styles.vehicleInfoBox}>
                  <View style={styles.redValueBox}>
                    <Text style={styles.whiteValueText}>KWG999</Text>
                  </View>
                  <Text style={styles.blueLabelText}>Plate:</Text>
                </View>
                <View style={styles.vehicleInfoBox}>
                  <View style={styles.redValueBox}>
                    <Text style={styles.whiteValueText}>2025</Text>
                  </View>
                  <Text style={styles.blueLabelText}>Model:</Text>
                </View>
              </View>
            </View>

            <View style={styles.sectionCard}>
              <TouchableOpacity style={styles.summaryHeader}>
                <Image
                  source={require("../assets/epinoy/car/driver/boundary.png")}
                  style={styles.boundaryIcon}
                />
                <View style={styles.summaryTextGroup}>
                  <Text style={styles.summaryTitle}>Boundary Due Summary</Text>
                  <Text style={styles.summarySub}>
                    Take a look at your overview
                  </Text>
                </View>
                <Ionicons name="chevron-forward" size={24} color="#888" />
              </TouchableOpacity>

              <View style={styles.inputField}>
                <Text style={styles.inputText}>Date:</Text>
              </View>
              <View style={styles.inputField}>
                <Text style={styles.inputText}>Amount:</Text>
              </View>

              <TouchableOpacity style={styles.payBtn}>
                <Text style={styles.payBtnText}>Pay</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.sectionCard}>
              <Text style={styles.sectionTitle}>Battery / Status:</Text>
              <View style={styles.statusRow}>
                <View style={styles.gaugeCard}>
                  <Text style={styles.gaugeTitle}>Battery</Text>
                  <Text style={styles.gaugeMini}>Changed 2w ago</Text>
                  <Image
                    source={require("../assets/epinoy/car/driver/batter_gauge.png")}
                    style={styles.gaugeImg}
                  />
                  <View style={styles.gaugeStats}>
                    <Text style={styles.statMain}>212 km</Text>
                    <Text style={styles.statSub}>14% 120kw</Text>
                  </View>
                </View>
                <View style={styles.gaugeCard}>
                  <Text style={styles.gaugeTitle}>Status</Text>
                  <Image
                    source={require("../assets/epinoy/car/driver/batter_gauge.png")}
                    style={styles.gaugeImg}
                  />
                  <Text style={styles.statusGood}>Good</Text>
                </View>
              </View>
            </View>

            <View style={styles.sectionCard}>
              <Text style={styles.sectionTitle}>Maintenance History List:</Text>
              <View style={styles.maintenanceInnerCard}>
                <Text style={styles.maintenanceReportTitle}>
                  This Month maintenance report
                </Text>
                <View style={styles.maintenanceDataRow}>
                  <Image
                    source={require("../assets/epinoy/car/driver/maintenance_icon.png")}
                    style={styles.handWrenchIcon}
                  />
                  <View style={styles.maintenanceProgress}>
                    <Text style={styles.progressValue}>100%</Text>
                    <View style={styles.divider} />
                    <Text style={styles.progressStatus}>Good Status</Text>
                  </View>
                </View>
                <View style={styles.toggleRow}>
                  <TouchableOpacity style={styles.toggleActive}>
                    <Text style={styles.toggleTextActive}>Month</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.toggleInactive}>
                    <Text style={styles.toggleTextInactive}>Year</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
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
  },
  backButton: { position: "absolute", left: 20, top: 35, zIndex: 10 },
  titleContainer: { flex: 1, alignItems: "center" },
  headerTitle: { color: "white", fontSize: 24, fontWeight: "500" },
  contentContainer: {
    flex: 1,
    backgroundColor: "#F0F7FF",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  scrollContent: { paddingHorizontal: 15, paddingTop: 15, paddingBottom: 40 },

  carHeader: { flexDirection: "row", alignItems: "center", marginBottom: 15 },
  carIconWrapper: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#D63439",
    overflow: "hidden",
  },
  carAvatar: { width: "100%", height: "100%", resizeMode: "cover" },
  carTitleInfo: { marginLeft: 12 },
  carNameText: { fontSize: 20, fontWeight: "600", color: "#D63439" },
  carSubtext: { color: "#777", fontSize: 14 },

  odoCard: {
    backgroundColor: "#D63439",
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
  },
  odoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  odoTextContainer: {
    alignItems: "flex-start",
    flex: 1,
  },
  odoLabel: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  odoValue: {
    color: "white",
    fontSize: 38,
    fontWeight: "bold",
    marginVertical: 2,
  },
  odoDate: {
    color: "white",
    fontSize: 11,
    opacity: 0.9,
  },
  updateBtn: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 8,
    minWidth: 110,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  updateBtnText: {
    color: "#D63439",
    fontSize: 12,
    textAlign: "center",
    fontWeight: "bold",
  },
  odoDate: { color: "white", textAlign: "center", fontSize: 12 },

  sectionCard: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0047AB",
    marginBottom: 12,
  },
  vehicleRow: { flexDirection: "row", justifyContent: "space-around" },
  vehicleInfoBox: { alignItems: "center", width: "45%" },
  redValueBox: {
    backgroundColor: "#D63439",
    width: "100%",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  whiteValueText: { color: "white", fontWeight: "bold", fontSize: 16 },
  blueLabelText: { color: "#0047AB", marginTop: 5, fontSize: 14 },

  summaryHeader: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F7FF",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  boundaryIcon: { width: 40, height: 40, resizeMode: "contain" },
  summaryTextGroup: { flex: 1, marginLeft: 10 },
  summaryTitle: { color: "#0047AB", fontWeight: "bold", fontSize: 15 },
  summarySub: { color: "#777", fontSize: 11 },
  inputField: {
    backgroundColor: "#F0F7FF",
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
  },
  inputText: { color: "#0047AB" },
  payBtn: {
    backgroundColor: "#0047AB",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 5,
  },
  payBtnText: { color: "white", fontWeight: "bold", fontSize: 16 },

  statusRow: { flexDirection: "row", justifyContent: "space-between" },
  gaugeCard: {
    backgroundColor: "#F0F7FF",
    width: "48%",
    borderRadius: 12,
    padding: 10,
    alignItems: "center",
  },
  gaugeTitle: { alignSelf: "flex-start", color: "#0047AB", fontWeight: "bold" },
  gaugeMini: { alignSelf: "flex-start", fontSize: 8, color: "#777" },
  gaugeImg: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    marginVertical: 10,
  },
  gaugeStats: { alignItems: "center" },
  statMain: { color: "#0047AB", fontWeight: "bold", fontSize: 12 },
  statSub: { color: "#777", fontSize: 10 },
  statusGood: {
    color: "#0047AB",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 5,
  },

  maintenanceInnerCard: {
    backgroundColor: "#F0F7FF",
    borderRadius: 12,
    padding: 15,
  },
  maintenanceReportTitle: { color: "#0047AB", marginBottom: 10, fontSize: 14 },
  maintenanceDataRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  handWrenchIcon: { width: 60, height: 60, resizeMode: "contain" },
  maintenanceProgress: { marginLeft: 20, alignItems: "center" },
  progressValue: { fontSize: 20, fontWeight: "bold", color: "#0047AB" },
  divider: {
    height: 2,
    backgroundColor: "#0047AB",
    width: 60,
    marginVertical: 2,
  },
  progressStatus: { fontSize: 12, color: "#0047AB" },
  toggleRow: { flexDirection: "row", justifyContent: "space-between" },
  toggleActive: {
    backgroundColor: "#0047AB",
    flex: 1,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    alignItems: "center",
  },
  toggleInactive: {
    backgroundColor: "#97C2FF",
    flex: 1,
    paddingVertical: 8,
    borderRadius: 20,
    alignItems: "center",
  },
  toggleTextActive: { color: "white", fontWeight: "bold" },
  toggleTextInactive: { color: "#0047AB", fontWeight: "500" },
});

export default DriverDashboard;
