import axios from "axios";
import config from "../Config";

const API_URL = config.apiUrl;
import AsyncStorage from '@react-native-community/async-storage';

const register = (fields) => {
    console.log("fields ==>33", fields)
    console.log("API_URL ==>API_URL", API_URL + "register")
    return axios.post(API_URL + "register", fields);
};

const login = (fields) => {
    console.log("fields ==>123", fields)
    console.log("API_URL ==>123API_URL", API_URL + "login")
    return axios
        .post(API_URL + "login", fields)
        .then((response) => {
            console.log("response ==>", response.data)
            if (response.data.accessToken) {
                AsyncStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
};

const logout = () => {
    AsyncStorage.removeItem("user");
};

const authServices = {
    register,
    login,
    logout,
};

export default authServices