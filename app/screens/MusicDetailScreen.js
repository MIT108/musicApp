import React from "react";
import { View, Text } from "react-native";
import Screen from "../components/Screen";
import AppBar from "../components/AppBar";

function MusicDetailScreen({navigation}) {
  return (
    <Screen>
      <AppBar
        titles={"Music Detail"}
        onChevronPress={() => navigation.goBack()}
      />
      <Text>MusicDetailScreen</Text>
    </Screen>
  );
}

export default MusicDetailScreen;
