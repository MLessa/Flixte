import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";
import { Overlay } from "react-native-elements";

export default class LoaderOverlay extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isVisible: false
    };
  }

  render() {
    let { isVisible } = this.props;
    return (
      <Overlay
        borderRadius={15}
        isVisible={isVisible}
        windowBackgroundColor="rgba(0, 0, 0, .5)"
        overlayBackgroundColor="white"
        width="auto"
        height="auto"
      >
        <View style={styles.overlayContainer}>
          <Image
            style={{ width: "60%", height: "60%" }}
            source={require("../images/preloader.gif")}
          />
        </View>
      </Overlay>
    );
  }
}

const styles = StyleSheet.create({
  overlayContainer: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center"
  }
});
