import React, { Component } from "react";
import { View, StyleSheet, Image, ActivityIndicator, Text } from "react-native";
import Button from "../components/button";
import authenticationService from "../services/authenticationService";
import { Avatar } from "react-native-elements";
import { withNavigation } from "react-navigation";
import { NavigationEvents } from "react-navigation";

class headerBar extends Component {
  state = {
    isLoggedIn: false,
    isHeaderLoaded: false
  };

  async componentDidMount() {
    await this.checkLoginState();
  }

  checkLoginState = async () => {
    await authenticationService.getLoginData(
      async response => {
        this.setState({
          ...this.state,
          userData: response,
          isLoggedIn: true,
          isHeaderLoaded: true
        });
      },
      async () => {
        this.setState({
          ...this.state,
          isLoggedIn: false,
          isHeaderLoaded: true
        });
      }
    );
  };

  logout = async () => {
    await authenticationService.logOut(this.checkLoginState);
  };

  keepLoginState = () => {
    if (!this.state.isLoggedIn) {
      this.checkLoginState();
    }
  };

  renderUserHeaderSide = () => {
    const { navigation } = this.props;
    const { push } = navigation;
    if (this.state.isHeaderLoaded) {
      if (this.state.isLoggedIn) {
        if (this.state.userData.isGoogleUser) {
          return (
            <Avatar
              rounded
              source={{
                uri: this.state.userData.googleUserInfo.user.photo
              }}
              onPress={() => this.logout()}
            />
          );
        } else {
          return (
            <Avatar
              rounded
              title={this.state.userData.Title}
              onPress={() => this.logout()}
            />
          );
        }
      } else {
        return <Button width={100} text="LOGIN" action={() => push("Login")} />;
      }
    } else {
      return <ActivityIndicator size="large" color="#d46f02" />;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <NavigationEvents onWillFocus={() => this.keepLoginState()} />
        <Image
          resizeMode="contain"
          style={styles.logo}
          source={require("../images/icon-flixte.png")}
        />

        {this.renderUserHeaderSide()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: 15,
    backgroundColor: "#1c1a1a",
    height: 45,
    justifyContent: "space-between",
    flexDirection: "row",
    width: "90%"
  },
  logo: {
    width: 50,
    height: 50
  }
});

export default withNavigation(headerBar);
