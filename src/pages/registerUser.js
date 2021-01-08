import React, { Component } from "react";
import { translate } from "../locales";
import authenticationService from "../services/authenticationService";
import { View, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";

export default class RegisterUser extends Component {
  constructor() {
    super();
    this.state = {
      userAccount: {
        Email: "",
        Password: "",
        ConfirmPassword: "",
        Name: ""
      }
    };
  }

  register = () => {
    authenticationService.registerUser(
      this.state.userAccount,
      () => this.props.navigation.navigate("Main"),
      error => console.log(error)
    );
  };

  render() {
    const { Email, Password, Name, ConfirmPassword } = this.state.userAccount;

    return (
      <View style={styles.container}>
        <Input
          value={Name}
          label={translate("name")}
          onChangeText={name =>
            this.setState({
              userAccount: { ...this.state.userAccount, Name: name }
            })
          }
        />
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
        <Input
          value={ConfirmPassword}
          label={translate("confirmPassword")}
          onChangeText={pass =>
            this.setState({
              userAccount: { ...this.state.userAccount, ConfirmPassword: pass }
            })
          }
        />

        <Button onPress={this.register} title={translate("save")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {}
});
