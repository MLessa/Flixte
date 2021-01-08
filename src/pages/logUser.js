import React, { Component } from "react";
import { translate } from "../locales";
import authenticationService from "../services/authenticationService";
import { View, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";

export default class LogUser extends Component {
  constructor() {
    super();
    this.state = {
      userAccount: {
        Email: "",
        Password: ""
      }
    };
  }

  login = () => {
    const { navigation } = this.props;

    authenticationService.login(
      this.state.userAccount,
      () => this.props.navigation.navigate("Main"),
      error => console.log(error)
    );
  };

  render() {
    const { Email, Password } = this.state.userAccount;
    return (
      <View style={styles.container}>
        <Input
          value={Email}
          label={translate("login")}
          onChangeText={login =>
            this.setState({
              userAccount: { ...this.state.userAccount, Email: login }
            })
          }
        />
        <Input
          value={Password}
          label={translate("password")}
          onChangeText={pass =>
            this.setState({
              userAccount: { ...this.state.userAccount, Password: pass }
            })
          }
        />

        <Button onPress={this.login} title={translate("login")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {}
});
