import {
    ImageBackground,
    Platform,
    SafeAreaView,
    StyleSheet,
    View,
  } from "react-native";
  import React from "react";
  import colors from "../config/colors";
  
  function Screen({ children, style, imageBackground = null }) {
    return imageBackground ? (
      <View style={[styles.view, style]}>
        <ImageBackground
          source={imageBackground}
          resizeMode="cover"
          style={styles.image}
        >
          <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>
        </ImageBackground>
      </View>
    ) : (
      <SafeAreaView style={[styles.screen, style]}>
        <View style={[styles.view, style]}>{children}</View>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    image: {
      flex: 1,
      padding: 20,
    },
    screen: {
      flex: 1,
      paddingHorizontal: 20,
      paddingVertical: 40,
      backgroundColor: colors.white,
    },
    view: {
      flex: 1,
      ...Platform.select({
        android: {
          marginHorizontal: 0,
          // marginTop: StatusBar.currentHeight,
        },
        ios: {
          marginHorizontal: 20,
        },
      }),
    },
  });
  
  export default Screen;