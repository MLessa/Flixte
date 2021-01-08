import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { translate } from "../locales";
import authenticationService from "../services/authenticationService";
import { NavigationEvents } from "react-navigation";
import { GoogleSignin, GoogleSigninButton } from "react-native-google-signin";

export default class Main_BKP extends Component {
  state = {
    isUserLogged: true,
    accessToken: null,
    isSigninInProgress: false
  };

  componentDidMount() {
    this.tryLogin();
  }

  tryLogin = () => {
    authenticationService.tryLogin(
      tokenID => this.setState({ isUserLogged: true, accessToken: tokenID }),
      () => {
        this.setState({ isUserLogged: false });
        GoogleSignin.configure({
          scopes: [
            "https://www.googleapis.com/auth/youtube",
            "https://www.googleapis.com/auth/userinfo.email",
            "https://www.googleapis.com/auth/userinfo.profile"
          ],
           webClientId: "148601440449-tsoln3ll0onrc7ej2463rqcars3ivgh0.apps.googleusercontent.com"
        });
      }
    );
  };

  logOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    } catch (error) {
      console.error(error);
    }
    authenticationService.logOut(() =>
      this.setState({ isUserLogged: false, accessToken: null })
    );
  };

  signinGoogle = async () => {
    console.log(1);
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
      this.setState({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log(2);
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log(3);
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log(4);
        // play services not available or outdated
      } else {
        console.log(5);
        // some other error happened
      }
    }
  };

  render() {
    const { navigation } = this.props;
    const { push } = navigation;

    return (
      <View style={styles.container}>
        <NavigationEvents onDidFocus={() => this.tryLogin()} />
        <Text>Flixte (logged? {this.state.isUserLogged.toString()})</Text>

        <Button
          onPress={() => this.logOut()}
          title={translate("logOut")}
          color="red"
        />

        {!this.state.isUserLogged ? (
          <View>
            <Button
              onPress={() => push("LogIn")}
              title={translate("login")}
              color="green"
            />
            <Button
              onPress={() => push("Register")}
              title={translate("register")}
              color="blue"
            />
            <GoogleSigninButton
              style={{ width: 192, height: 48 }}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Dark}
              onPress={this.signinGoogle}
              disabled={this.state.isSigninInProgress}
            />
          </View>
        ) : (
          <Button
            onPress={() => this.logOut()}
            title={translate("logOut")}
            color="red"
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#21201E",
    justifyContent: "center",
    alignItems: "center"
  },
  logoImage: {
    width: 300
    //  height: 100,
  }
});
