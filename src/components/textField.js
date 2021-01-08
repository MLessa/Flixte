import React, { Component } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default class TextField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fieldVal: "",
      leftPadding: 0,
      isTextVisible: true,
      secure: false,
      validationMessage: null
    };
  }

  componentDidMount() {
    let { secure } = this.props;
    if (secure) {
      this.setState({ secure: true });
      this.setState({ isTextVisible: false });
      this.setState({ leftPadding: 13 });
    }
  }

  renderViewPassword = () => {
    if (this.state.secure) {
      return (
        <View style={styles.seePassword}>
          <TouchableOpacity
            onPress={() => {
              this.setState({ isTextVisible: !this.state.isTextVisible });
            }}
          >
            <Icon
              style={styles.seePasswordIcon}
              name={this.state.isTextVisible ? "eye" : "eye-off"}
              size={20}
              color="#000"
            />
          </TouchableOpacity>
        </View>
      );
    }
    return null;
  };

  renderValidationMessage = () => {
    if (this.state.validationMessage) {
      return (
        <View>
          <Text
            style={[
              styles.validationMessage,
              this.state.secure ? { left: 13 } : {}
            ]}
          >
            {this.state.validationMessage}
          </Text>
        </View>
      );
    }
  };

  render() {
    let {
      width,
      onUpdate,
      placeholder,
      style,
      validationFunction
    } = this.props;

    return (
      <View style={styles.textInputMain}>
        <View style={styles.textInputContainer}>
          <TextInput
            style={[
              styles.content,
              style,
              { width: width },
              { left: this.state.leftPadding }
            ]}
            secureTextEntry={!this.state.isTextVisible}
            onChangeText={text => {
              this.setState({ fieldVal: text });
              if (validationFunction)
                this.setState({ validationMessage: validationFunction(text) });
              onUpdate(text);
            }}
            value={this.state.fieldVal}
            placeholder={placeholder}
            placeholderTextColor="#444444"
          />
          {this.renderViewPassword()}
        </View>
        {this.renderValidationMessage()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInputMain: {
    flexDirection: "column",
    alignContent: "center",
    alignSelf: "center"
  },
  validationMessage: {
    color: "#d46f02"
  },
  seePasswordIcon: {
    color: "#fff",
    paddingTop: 15,
    paddingRight: 5
  },
  seePassword: {
    right: 15,
    justifyContent: "space-between",
    marginTop: 15
  },
  textInputContainer: {
    flexDirection: "row",
    alignSelf: "center"
  },
  content: {
    backgroundColor: "#1c1a1a",
    height: 40,
    borderBottomWidth: 3,
    borderBottomColor: "#d46f02",
    fontFamily: "FranklinGothic",
    color: "white"
  }
});
