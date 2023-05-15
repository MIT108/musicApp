import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import colors from "../config/colors";

function SearchItem({ navigation }) {
  return (
    <Pressable
      onPress={() => navigation.navigate("MusicDetailScreen")}
      style={styles.container}
    >
      <Text>SearchItem</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.primary,
  },
});

export default SearchItem;
