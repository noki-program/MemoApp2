import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

import Appbar from "./src/components/Appbar";
import MemoList from "./src/components/MemoList";
import CircleButton from "./src/elements/CircleButton";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Appbar />
        <MemoList />
        <CircleButton>+</CircleButton>
    
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

  memoAddButton: {
    position: "absolute",
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    backgroundColor: "#E31676",
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    zIndex: 10,
  },

  memoAddButtonTitle: {
    fontSize: 32,
    lineHeight: 32,
    color: "#fff",
  },
});
