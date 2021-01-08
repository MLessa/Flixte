import axios from "axios";
const APPJson = require("../../app.json");
import DeviceInfo from "react-native-device-info";
const qs = require("qs");

class baseService {
  constructor(serviceName) {
    this.service = axios.create({
      baseURL: "http://api.flixte.com/" + serviceName
    });
  }

  get = async (path, par, successCallback, errorCallback) => {
    try {
      if (successCallback)
        successCallback(await this.service.get(path, { params: par }));
      else return await this.service.get(path, { params: par });
    } catch (e) {
      if (errorCallback) errorCallback(e);
      else return e;
    }
  };

  post = async (path, data, params, successCallback, errorCallback) => {
    try {
      if (params) path += "?" + qs.stringify(params);
      if (successCallback) successCallback(await this.service.post(path, data));
      else return await this.service.post(path, data);
    } catch (e) {
      if (errorCallback) errorCallback(e);
      else return e;
    }
  };
  getBasicPostBody = () => {
    return {
      AppVersion: APPJson.appVersion,
      DeviceID: DeviceInfo.getUniqueID(),
      IsAppRequest: true,
      ResponseLocale: DeviceInfo.getDeviceLocale()
    };
  };
}

export default baseService;
