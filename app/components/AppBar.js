import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import colors from "../config/colors";

function AppBar({ titles, onChevronPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
      onPress={() => onChevronPress()}
      >
        <MaterialCommunityIcons
          name="chevron-left"
          color={colors.white}
          size={30}
        />
      </TouchableOpacity>
      <Text style={styles.titles}>{titles}</Text>
      <MaterialCommunityIcons
        name="dots-horizontal-circle-outline"
        color={colors.white}
        size={30}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  titles: {
    color: colors.white,
    fontSize: 20,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    paddingVertical: 10,
  },
});

export default AppBar;
