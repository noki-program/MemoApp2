import React from "react";
import { StyleSheet, View, Text } from "react-native";
import CircleButton from "../elements/CircleButton";

class MemoDetailScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.memoHeader}>
          <View>
            <Text style={styles.memoHeaderTitle}>講座のアイデア</Text>
            <Text style={styles.memoHeaderDate}>2020/11/28</Text>
          </View>
        </View>

        <View style={styles.memoContents}>
          <Text>講座のアイデア</Text>
        </View>

        <CircleButton color="white" style={styles.editButton}>✎</CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: 78,
  },

  memoHeader: {
    height: 100,
    backgroundColor: "#17313C",
    justifyContent: "center",
    padding: 10,
  },

  memoHeaderTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },

  memoHeaderDate: {
    fontSize: 12,
    color: "#fff",
  },

  memoContents: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: "#ddd",
    flex: 1,
  },

  editButton: {
    top: 155,
  },
});

export default MemoDetailScreen;