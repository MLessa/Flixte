import React, { Component } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

export default class button extends Component {
  render() {
    let { width, text, action, googleBtn, style, disabled } = this.props;
    return (
      <TouchableOpacity
        onPress={action}
        underlayColor="black"
        style={[
          googleBtn ? styles.googleBtn : styles.defaultBtn,
          style,
          { width: width },
          disabled ? styles.disabled : {}
        ]}
        disabled={disabled}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  disabled: {
    backgroundColor: "#cccccc"
  },
  googleBtn: {
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    borderColor: "#f79722",
    borderWidth: 1
  },
  defaultBtn: {
    backgroundColor: "#d46f02",
    alignItems: "center",
    justifyContent: "center",
    height: 40
  },
  button: {
    alignItems: "center"
  },
  buttonText: {
    fontFamily: "FranklinGothic",
    fontSize: 15,
    color: "#fff",
    letterSpacing: 1,
    textTransform: "uppercase"
  }
});
