import React from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import {SimpleLineIcons} from 'react-native-vector-icons';
import Screen from "../components/Screen";
import colors from "../config/colors";


function HomeScreen({navigation}) {
  return (
    <Screen style={styles.container}>
      <Image
        source={require("../assets/homPagePosterCopy.jpg")}
        style={styles.poster}
      />
      <View style={styles.body}>
        <Text style={styles.welcomeText}>BEST MUSIC COLLECTION</Text>
        <TouchableOpacity style={styles.buttonContainer}
        onPress={() => navigation.navigate("SearchScreen")}
        >
            <Text  style={styles.buttonText}>Get Started</Text>
            <SimpleLineIcons 
                name="arrow-right-circle"
                size={30}
                color={colors.white}
            />
        </TouchableOpacity>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    margin: -20,
  },
  poster: {
    height: "70%",
    width: "100%",
  },
  body: {
    padding: 20,
  },
  welcomeText: {
    color:  colors.black,
    fontSize: 40
  },
  buttonContainer: {
    backgroundColor: colors.black,
    display: "flex",
    flexDirection: "row",
    paddingVertical: 20,
    paddingHorizontal: 30,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
    borderRadius: 50
  },
  buttonText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default HomeScreen;
