import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

import Appbar from "./src/components/Appbar";
import MemoDetailScreen from "./src/screens/MemoDetailScreen";
import MemolistScreen from "./src/screens/MemoListScreen";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Appbar />
        {/* <MemolistScreen /> */}
        <MemoDetailScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFDF6",
    alignItems: "center",
    justifyContent: "center",
  },
});
