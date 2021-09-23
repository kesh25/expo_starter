import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View} from "react-native";  

function Screen({ children, style }) {
  // console.log(Constants.statusBarHeight)
  return (
    <SafeAreaView style={[styles.screen, style]} forceInset={{ top: 'never' }}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    // paddingTop: Constants.statusBarHeight,
    flex: 1, 
  },
  view: {
    flex: 1
  }
});

export default Screen;
