import React from "react";
import { StyleSheet, View, Text } from "react-native";

class CircleButton extends React.Component {
  render() {
    const { style } = this.props;
    return (
      <View style={[styles.circleButton, style]}>
        <Text style={styles.circleButtonTitle}>
          {this.props.children}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circleButton: {
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

  circleButtonTitle: {
    fontSize: 32,
    lineHeight: 32,
    color: "#fff",
  },
});

export default CircleButton;