import React, { Component } from "react";
import { View, TouchableOpacity, StyleSheet, Image, Text } from "react-native";
import ShadowView from "react-native-simple-shadow-view";
import { translate } from "../locales";
import { withNavigation } from "react-navigation";

class footer extends Component {
  constructor(props) {
    super(props);
  }

  moveToAddNewCustomer = () => {};
  render() {
    let activeButton = this.props.activeButton;

    return (
      <ShadowView style={styles.container}>
        <TouchableOpacity
          onPress={() => this.moveToAddNewCustomer()}
          style={styles.icon}
        >
          <View style={styles.btnView}>
            <Image
              resizeMode="contain"
              style={[
                styles.btnImg,
                activeButton === "Home" ? styles.btnImgActive : ""
              ]}
              source={require("../images/inicio-icon.png")}
            />
            <Text style={styles.btnName}>{translate("begin")}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.moveToAddNewCustomer()}
          style={styles.icon}
        >
          <View style={styles.btnView}>
            <Image
              resizeMode="contain"
              style={[
                styles.btnImg,
                activeButton === "Stations" ? styles.btnImgActive : ""
              ]}
              source={require("../images/stations-icon.png")}
            />
            <Text style={styles.btnName}>{translate("stations")}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.moveToAddNewCustomer()}
          style={styles.icon}
        >
          <View style={styles.btnView}>
            <Image
              resizeMode="contain"
              style={[
                styles.btnImg,
                activeButton === "Playlists" ? styles.btnImgActive : ""
              ]}
              source={require("../images/playlist-icon.png")}
            />
            <Text style={styles.btnName}>{translate("playlists")}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.moveToAddNewCustomer()}
          style={styles.icon}
        >
          <View style={styles.btnView}>
            <Image
              resizeMode="contain"
              style={[
                styles.btnImg,
                activeButton === "Search" ? styles.btnImgActive : ""
              ]}
              source={require("../images/search-icon.png")}
            />
            <Text style={styles.btnName}>{translate("search")}</Text>
          </View>
        </TouchableOpacity>
      </ShadowView>
    );
  }
}

const styles = StyleSheet.create({
  btnView: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8
  },
  btnName: {
    color: "#fff",
    margin: 3,
    fontFamily: "Heavitas",
    fontSize: 9
  },
  btnImgActive: {
    tintColor: "#FFFFFF"
  },
  btnImg: {
    width: "55%",
    height: "55%",
    tintColor: "#5F5F5F"
  },
  icon: {
    flex: 1
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#221f1f",
    height: 65,
    borderBottomWidth: 2,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: "#d46f02",

    shadowColor: "black",
    shadowOpacity: 20.5,
    shadowRadius: 6.5,
    shadowOffset: { width: 1.7, height: 1.1 }
  }
});

export default withNavigation(footer);
