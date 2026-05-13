import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const ProfilePassenger = () => {
  const router = useRouter();

  const [viewMode, setViewMode] = useState("profile");
  const [subTab, setSubTab] = useState("basic");

  const handleBack = () => {
    if (viewMode !== "profile") {
      setViewMode("profile");
    } else {
      router.back();
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={["bottom", "left", "right"]}>
      <ImageBackground
        source={require("../assets/epinoy/bg.png")}
        style={styles.headerBackground}
      >
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
      </ImageBackground>

      <View style={styles.contentContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {viewMode === "profile" && (
            <>
              <View style={styles.titleRow}>
                <Text style={styles.headerTitle}>Profile</Text>
                <TouchableOpacity
                  style={styles.editInfoBtn}
                  onPress={() => setViewMode("edit")}
                >
                  <Text style={styles.editInfoText}>Edit Info</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.profileSection}>
                <View style={styles.avatarContainer}>
                  <Image
                    source={require("../assets/epinoy/car/passenger/profile_icon.png")}
                    style={styles.avatar}
                  />
                  <TouchableOpacity style={styles.pencilIcon}>
                    <MaterialCommunityIcons
                      name="pencil"
                      size={16}
                      color="white"
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.userInfoTextContainer}>
                  <Text style={styles.userName}>Juan Dela Cruz</Text>
                  <Text style={styles.infoLabel}>Gmail account:</Text>
                  <View style={styles.infoBox}>
                    <Text style={styles.infoValue}>janine@gmail.com</Text>
                  </View>
                  <Text style={styles.infoLabel}>Number account:</Text>
                  <View style={styles.infoBox}>
                    <Text style={styles.infoValue}>+63 999 999 9999</Text>
                  </View>
                </View>
              </View>

              <View style={styles.qrContainer}>
                <Image
                  source={require("../assets/epinoy/car/passenger/qr_code.png")}
                  style={styles.qrImage}
                />
              </View>

              <View style={styles.buttonGroup}>
                <TouchableOpacity
                  style={[styles.actionBtn, styles.walletBtn]}
                  onPress={() => setViewMode("wallet")}
                >
                  <Text style={styles.actionBtnText}>View Wallet Balance</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.actionBtn, styles.infoBtn]}
                  onPress={() => setViewMode("edit")}
                >
                  <Text style={styles.actionBtnText}>View All Information</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.actionBtn, styles.logoutBtn]}
                  onPress={() => {
                    if (router.canDismiss()) {
                      router.dismissAll();
                    }
                    router.replace("/");
                  }}
                >
                  <View style={styles.logoutContent}>
                    <MaterialCommunityIcons
                      name="logout"
                      size={24}
                      color="white"
                    />
                    <Text style={styles.actionBtnText}> Log Out</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </>
          )}

          {viewMode === "wallet" && (
            <>
              <View style={styles.titleRow}>
                <Text style={styles.walletHeaderTitle}>Wallet Balance</Text>
                <TouchableOpacity style={styles.receiptBtn}>
                  <Text style={styles.receiptBtnText}>Receipt/s</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.balanceContainer}>
                <View style={styles.balanceDisplay}>
                  <Text style={styles.currencySign}>₱</Text>
                  <Text style={styles.balanceAmount}> 1289.00</Text>
                  <MaterialCommunityIcons
                    name="eye-off-outline"
                    size={20}
                    color="#ccc"
                    style={{ marginLeft: "auto" }}
                  />
                </View>
                <TouchableOpacity style={styles.addBtn}>
                  <Text style={styles.addBtnText}>Add +</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.chartContainer}>
                <Image
                  source={require("../assets/epinoy/car/passenger/expense.png")}
                  style={styles.chartImage}
                />
              </View>
              <Text style={styles.sectionTitle}>Transactions history</Text>
              <View style={styles.transactionItem}>
                <Text style={styles.transId}>ABC123456</Text>
                <Text style={styles.transDate}>(Today - 8:24 am)</Text>
                <Text style={styles.transAmount}>- 179.00</Text>
              </View>
              <View style={{ height: 100 }} />
            </>
          )}

          {viewMode === "edit" && (
            <View style={{ paddingTop: 10 }}>
              <View style={styles.tabContainer}>
                <TouchableOpacity
                  style={[
                    styles.tabButton,
                    subTab === "basic" ? styles.tabActive : styles.tabInactive,
                  ]}
                  onPress={() => setSubTab("basic")}
                >
                  <Text
                    style={[
                      styles.tabText,
                      subTab === "basic"
                        ? styles.textActive
                        : styles.textInactive,
                    ]}
                  >
                    Basic Information
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.tabButton,
                    subTab === "password"
                      ? styles.tabActive
                      : styles.tabInactive,
                  ]}
                  onPress={() => setSubTab("password")}
                >
                  <Text
                    style={[
                      styles.tabText,
                      subTab === "password"
                        ? styles.textActive
                        : styles.textInactive,
                    ]}
                  >
                    Password
                  </Text>
                </TouchableOpacity>
              </View>

              {subTab === "basic" ? (
                <View style={styles.formContainer}>
                  <Text style={styles.inputLabel}>Full Name</Text>
                  <View style={styles.inputWrapper}>
                    <View style={styles.iconBox}>
                      <Ionicons name="person" size={20} color="white" />
                    </View>
                    <TextInput
                      style={styles.input}
                      placeholder="Full Name"
                      placeholderTextColor="#ccc"
                    />
                  </View>

                  <Text style={styles.inputLabel}>Mobile Number</Text>
                  <View style={styles.inputWrapper}>
                    <View style={styles.iconBox}>
                      <Ionicons name="call" size={20} color="white" />
                    </View>
                    <TextInput
                      style={styles.input}
                      placeholder="Mobile Number"
                      placeholderTextColor="#ccc"
                    />
                  </View>

                  <Text style={styles.inputLabel}>Email Address</Text>
                  <View style={styles.inputWrapper}>
                    <View style={styles.iconBox}>
                      <Ionicons name="mail" size={20} color="white" />
                    </View>
                    <TextInput
                      style={styles.input}
                      placeholder="Email Address"
                      placeholderTextColor="#ccc"
                    />
                  </View>

                  <Text style={styles.inputLabel}>Gender</Text>
                  <View style={styles.dropdownWrapper}>
                    <Text style={styles.dropdownText}>Choose</Text>
                    <Ionicons name="chevron-down" size={20} color="#0047AB" />
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View style={{ width: "65%" }}>
                      <Text style={styles.inputLabel}>Date of Birth</Text>
                      <View style={styles.dropdownWrapper}>
                        <Text style={{ color: "#0047AB" }}>MM/DD/YYYY</Text>
                        <Ionicons name="calendar" size={20} color="#0047AB" />
                      </View>
                    </View>
                    <View style={{ width: "30%" }}>
                      <Text style={styles.inputLabel}>Age</Text>
                      <View style={styles.dropdownWrapper}>
                        <Text style={{ color: "#0047AB" }}>00</Text>
                      </View>
                    </View>
                  </View>

                  <Text style={styles.inputLabel}>Home Address</Text>
                  <View style={styles.inputWrapper}>
                    <View style={styles.iconBox}>
                      <Ionicons name="home" size={20} color="white" />
                    </View>
                    <TextInput
                      style={styles.input}
                      placeholder="Home Address"
                      placeholderTextColor="#ccc"
                    />
                  </View>
                </View>
              ) : (
                <View style={styles.formContainer}>
                  <Text style={styles.inputLabel}>Current password</Text>
                  <View style={styles.inputWrapper}>
                    <View style={styles.iconBox}>
                      <FontAwesome5 name="key" size={16} color="white" />
                    </View>
                    <TextInput
                      style={styles.input}
                      placeholder="Current password"
                      secureTextEntry
                    />
                    <Ionicons
                      name="eye-off-outline"
                      size={20}
                      color="#ccc"
                      style={{ marginRight: 10 }}
                    />
                  </View>

                  <Text style={styles.inputLabel}>New Password</Text>
                  <View style={styles.inputWrapper}>
                    <View style={styles.iconBox}>
                      <FontAwesome5 name="key" size={16} color="white" />
                    </View>
                    <TextInput
                      style={styles.input}
                      placeholder="New password"
                      secureTextEntry
                    />
                    <Ionicons
                      name="eye-off-outline"
                      size={20}
                      color="#ccc"
                      style={{ marginRight: 10 }}
                    />
                  </View>

                  <Text style={styles.inputLabel}>Confirm New Password</Text>
                  <View style={styles.inputWrapper}>
                    <View style={styles.iconBox}>
                      <FontAwesome5 name="key" size={16} color="white" />
                    </View>
                    <TextInput
                      style={styles.input}
                      placeholder="Confirm new password"
                      secureTextEntry
                    />
                    <Ionicons
                      name="eye-off-outline"
                      size={20}
                      color="#ccc"
                      style={{ marginRight: 10 }}
                    />
                  </View>
                </View>
              )}

              <TouchableOpacity style={styles.updateBtn}>
                <Text style={styles.updateText}>Update</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelBtn}
                onPress={() => setViewMode("profile")}
              >
                <Text style={styles.updateText}>Cancel</Text>
              </TouchableOpacity>
              <View style={{ height: 100 }} />
            </View>
          )}
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
          <View style={{ width: 60 }} />
        </View>

        <TouchableOpacity
          style={styles.profileFab}
          onPress={() => setViewMode("profile")}
        >
          <View style={styles.fabInner}>
            <Image
              source={require("../assets/epinoy/car/passenger/profile.png")}
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
  headerTitle: { fontSize: 32, fontWeight: "bold", color: "#B22222" },
  walletHeaderTitle: { fontSize: 28, fontWeight: "bold", color: "#0047AB" },
  editInfoBtn: {
    borderWidth: 1,
    borderColor: "#2B5797",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: "white",
  },
  editInfoText: { color: "#2B5797", fontWeight: "500" },

  tabContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    marginHorizontal: 5,
  },
  tabActive: { backgroundColor: "#C82333", borderColor: "#C82333" },
  tabInactive: { backgroundColor: "white", borderColor: "#C82333" },
  tabText: { fontSize: 16, fontWeight: "bold" },
  textActive: { color: "white" },
  textInactive: { color: "#C82333" },

  formContainer: { marginBottom: 20 },
  inputLabel: {
    color: "#0047AB",
    fontWeight: "600",
    marginBottom: 5,
    fontSize: 14,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#D0E1F9",
    borderRadius: 10,
    marginBottom: 15,
    overflow: "hidden",
  },
  iconBox: {
    backgroundColor: "#0047AB",
    padding: 12,
    width: 45,
    alignItems: "center",
  },
  input: { flex: 1, paddingHorizontal: 10, color: "#333" },
  dropdownWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#D0E1F9",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
  },
  dropdownText: { color: "#0047AB" },

  updateBtn: {
    backgroundColor: "#00A300",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 10,
  },
  cancelBtn: {
    backgroundColor: "#D63439",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },
  updateText: { color: "white", fontSize: 22, fontWeight: "bold" },

  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  avatarContainer: {
    position: "relative",
    borderWidth: 4,
    borderColor: "#D0E1F9",
    borderRadius: 60,
    padding: 2,
  },
  avatar: { width: 110, height: 110, borderRadius: 55 },
  pencilIcon: {
    position: "absolute",
    bottom: 0,
    right: 5,
    backgroundColor: "#2B5797",
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "white",
  },
  userInfoTextContainer: { flex: 1, marginLeft: 15 },
  userName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0047AB",
    marginBottom: 5,
  },
  infoLabel: { fontSize: 12, color: "#0047AB", fontWeight: "600" },
  infoBox: {
    backgroundColor: "white",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    marginBottom: 8,
  },
  infoValue: { fontSize: 13, color: "#555" },
  qrContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  qrImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    borderWidth: 1,
    borderColor: "#B22222",
    borderRadius: 15,
    padding: 10,
  },
  buttonGroup: { marginTop: 20, paddingBottom: 100 },
  actionBtn: {
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    marginBottom: 12,
  },
  walletBtn: { backgroundColor: "#00A300" },
  infoBtn: { backgroundColor: "#0047AB" },
  logoutBtn: { backgroundColor: "#D63439" },
  logoutContent: { flexDirection: "row", alignItems: "center" },
  actionBtnText: { color: "white", fontSize: 18, fontWeight: "500" },

  balanceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  balanceDisplay: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 12,
    borderRadius: 8,
    marginRight: 10,
    elevation: 2,
  },
  currencySign: { fontSize: 24, color: "#00A300", fontWeight: "bold" },
  balanceAmount: { fontSize: 24, color: "#00A300", fontWeight: "bold" },
  addBtn: {
    backgroundColor: "#00C800",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  addBtnText: { color: "white", fontWeight: "bold", fontSize: 18 },
  chartContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    elevation: 2,
    marginBottom: 20,
  },
  chartImage: { width: "100%", height: 200, resizeMode: "contain" },
  sectionTitle: {
    fontSize: 18,
    color: "#2B5797",
    fontWeight: "bold",
    marginVertical: 10,
  },
  transactionItem: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    alignItems: "center",
    elevation: 1,
  },
  transId: { flex: 1, color: "#2B5797", fontWeight: "600" },
  transDate: { color: "#888", fontSize: 12, marginRight: 10 },
  transAmount: { color: "#D63439", fontWeight: "bold" },

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
    width: 26,
    height: 26,
    resizeMode: "contain",
    tintColor: "#B22222",
  },
  navText: { fontSize: 10, color: "#B22222", marginTop: 2 },
  profileFab: {
    position: "absolute",
    top: -35,
    right: 20,
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  fabInner: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#B22222",
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

export default ProfilePassenger;
