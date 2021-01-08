import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableHighlight
} from "react-native";
import FooterBar from "../components/footerBar";
import HeaderBar from "../components/headerBar";
import { translate } from "../locales";
import TextField from "../components/textField";


export default class Main extends Component {
  static navigationOptions = {
    header: null
  };


  render() {
    const { navigation } = this.props;
    const { push } = navigation;
    return (
      <View style={styles.container}>
        <HeaderBar style={styles.header} />
        <ScrollView style={styles.content}>
          <Text>Flixte Main</Text>
          <Text>Flixte Main</Text>
          <Text>Flixte Main</Text>
          <Text>Flixte Main</Text>
        </ScrollView>

        <FooterBar activeButton="Home" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1
  },
  header: {
    // display: "flex"
  },
  container: {
    flex: 1,
    backgroundColor: "#221f1f",
    justifyContent: "center",
    alignItems: "center"
  }
});
