import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
} from "./types";

import AuthService from "../services/auth.service";
import AsyncStorage from '@react-native-community/async-storage';

/**
 * register
 * @param {string} fullName 
 * @param {string} email 
 * @param {string} password 
 */
export const register = (fields) => (dispatch) => {
    fields.name = fields.firstName + ' ' + fields.lastName;

    console.log("fields 222 ==>", fields)
    return AuthService.register(fields).then(
        (response) => {
            dispatch({
                type: REGISTER_SUCCESS,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message,
            });

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: REGISTER_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};

/**
 * login
 * @param {string} email 
 * @param {string} password 
 */
export const login = (fields) => (dispatch) => {
    console.log("fields 122==>", fields);
    return AuthService.login(fields).then(
        (data) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { user: data },
            });

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: LOGIN_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};

export const checkLogin = () => (dispatch) => {
    return AsyncStorage.getItem('user').then(
        (data) => {
            console.log("data ==>", data)
            if (data) {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: { user: data },
                });
            } else {
                dispatch({
                    type: LOGIN_FAIL,
                });
            }

            return Promise.resolve();
        },
        (error) => {
            console.log("error ==>", error)
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: LOGIN_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};

export const logout = () => (dispatch) => {
    AuthService.logout();

    dispatch({
        type: LOGOUT,
    });
};