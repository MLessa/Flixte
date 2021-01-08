import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Overlay } from "react-native-elements";

export default class infoOverlay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { visibilityController, info } = this.props;
    if (visibilityController) {
      return (
        <Overlay
          borderRadius={15}
          isVisible={true}
          windowBackgroundColor="rgba(0, 0, 0, .5)"
          overlayBackgroundColor="white"
          width="auto"
          height="auto"
        >
          <View style={styles.overlayContainer}>
            <Text style={{fontWeight: 'bold', fontSize:25}}>{info}</Text>
          </View>
        </Overlay>
      );
    }
    return null;
  }
}

const styles = StyleSheet.create({
  text:{
    fontFamily: "Heavitas",
    fontSize: 40,
    fontWeight: 'bold'
  },
  overlayContainer: {
    width: 180,
    height: 150,
    justifyContent: "center",
    alignItems: "center"
  }
});
