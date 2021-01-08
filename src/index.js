import React from "react";
import Routes from "./routes";
import axios from "axios";
import RNSecureKeyStore, { ACCESSIBLE } from "react-native-secure-key-store";
import { GoogleSignin } from "react-native-google-signin";
import { webClientID } from "../app.json";
import "./config/StatusBarConfig";

GoogleSignin.configure({
  scopes: [
    "https://www.googleapis.com/auth/youtube",
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/userinfo.profile"
  ],
  webClientId: webClientID,
  offlineAccess: true
});

axios.interceptors.request.use(
  function(config) {
    console.log("interceptor");
    RNSecureKeyStore.get("accessToken").then(
      tokenID => {
        console.log(tokenID);
        config.headers.Authorization = `Bearer ${tokenID}`;
        return config;
      },
      () => {
        return config;
      }
    );
  },
  function(err) {
    return Promise.reject(err);
  }
);

const App = () => <Routes />;

export default App;
