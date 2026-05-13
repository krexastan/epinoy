import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons, Entypo } from "@expo/vector-icons";

const ViolationDriver = () => {
  const router = useRouter();

  const violations = [
    { id: 1, title: "Recorded violation", time: "1 Hour ago" },
    { id: 2, title: "Recorded violation", time: "1 Hour ago" },
    { id: 3, title: "Recorded violation", time: "1 Hour ago" },
  ];

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/epinoy/bg.png")}
        style={styles.headerBackground}
      >
        <SafeAreaView style={styles.headerContent}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={28} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Violation</Text>
        </SafeAreaView>
      </ImageBackground>

      <View style={styles.content}>
        <TouchableOpacity style={[styles.actionButton, styles.payButton]}>
          <Text style={styles.actionButtonText}>Pay Fines</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.actionButton, styles.appealButton]}>
          <Text style={styles.actionButtonText}>Appeal</Text>
        </TouchableOpacity>

        <View style={styles.listContainer}>
          <Text style={styles.listTitle}>List of recorded violation</Text>

          <ScrollView showsVerticalScrollIndicator={false}>
            {violations.map((item) => (
              <TouchableOpacity key={item.id} style={styles.violationItem}>
                <View style={styles.idBadge}>
                  <Text style={styles.idText}>{item.id}</Text>
                </View>

                <View style={styles.violationDetails}>
                  <Text style={styles.violationTitleText}>{item.title}</Text>
                  <Text style={styles.violationTimeText}>{item.time}</Text>
                </View>

                <View style={styles.verticalDivider} />

                <View style={styles.chevronContainer}>
                  <Entypo name="chevron-right" size={32} color="#D3D3D3" />
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <TouchableOpacity style={styles.viewButton}>
            <Text style={styles.viewButtonText}>View</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F7FF",
  },
  headerBackground: {
    height: 120,
    width: "100%",
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    paddingHorizontal: 20,
  },
  backButton: {
    position: "absolute",
    left: 20,
    top: 50,
  },
  headerTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  actionButton: {
    width: "100%",
    height: 65,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  payButton: {
    backgroundColor: "#00A300",
  },
  appealButton: {
    backgroundColor: "#154194",
  },
  actionButtonText: {
    color: "white",
    fontSize: 26,
    fontWeight: "500",
  },
  listContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    marginTop: 10,
    flex: 1,
    maxHeight: 400,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  listTitle: {
    textAlign: "center",
    color: "#154194",
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 15,
  },
  violationItem: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#154194",
    borderRadius: 12,
    marginBottom: 12,
    overflow: "hidden",
    height: 70,
  },
  idBadge: {
    backgroundColor: "#C92424",
    width: 50,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  idText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  violationDetails: {
    flex: 1,
    paddingLeft: 12,
  },
  violationTitleText: {
    color: "#154194",
    fontSize: 18,
    fontWeight: "500",
  },
  violationTimeText: {
    color: "#888",
    fontSize: 12,
  },
  verticalDivider: {
    width: 2,
    height: "70%",
    backgroundColor: "#D3D3D3",
  },
  chevronContainer: {
    paddingHorizontal: 10,
  },
  viewButton: {
    backgroundColor: "#154194",
    borderRadius: 10,
    paddingVertical: 10,
    width: "70%",
    alignSelf: "center",
    marginTop: 10,
  },
  viewButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default ViolationDriver;
