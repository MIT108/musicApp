import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Screen from "../components/Screen";
import Search from "../components/Search";
import SearchItem from "../components/SearchItem";
import colors from "../config/colors";
import AppBar from "../components/AppBar";

const mockData = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
];

function SearchScreen({navigation}) {
  return (
    <Screen style={styles.screen}>
      <AppBar titles={"Search Screen"} onChevronPress={() => navigation.goBack()} />
      <Search />
      <ScrollView style={styles.scrollView}>
        {mockData.map((item) => (
          <SearchItem key={item.id} navigation={navigation} />
        ))}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    paddingVertical: 10,
    marginTop: 20,
    flexGrow: 1,
  },
});

export default SearchScreen;
