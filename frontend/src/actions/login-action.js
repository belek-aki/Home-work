import axios from 'axios';
import {history} from "../index";
import { PERSONS, USER_TOKEN_KEY} from "../store/storage_keys";
import point from "./point";

export const LOGIN_CHANGE_FIELD = "LOGIN_CHANGE_FIELD/";
export const USERNAME_FILED = "USERNAME_FILED";
export const PASSWORD_FIELD = "PASSWORD_FIELD";
export const LOGIN_REQUEST = "LOGIN_PAGE/LOGIN_REQUEST";
export const LOGIN_REQUEST_SUCCESS = "LOGIN_PAGE/LOGIN_REQUEST_SUCCESS";
export const LOGIN_REQUEST_FAILED = "LOGIN_PAGE/LOGIN_REQUEST_FAILED";
export const FAILED_VALIDATION = "LOGIN_PAGE/FAILED_VALIDATION";
export const CLEAR_FIELDS = "LOGIN_PAGE/CLEAR_FIELDS";
export const CLEAR_ERRORS = "LOGIN_PAGE/CLEAR_ERRORS";
export const LOGOUT = "LOGIN_PAGE/LOGOUT";
export const GET_PERSON_SUCCESS = "GET_PERSON_SUCCESS";
export const GET_PERSONS_FAILED = "GET_PERSONS_FAILED"

export const FIELDS = {
    login: LOGIN_CHANGE_FIELD + USERNAME_FILED,
    password: LOGIN_CHANGE_FIELD + PASSWORD_FIELD
};

export function changeField(field, value) {
    return {
        type: FIELDS[field],
        value
    };
}

export const changeLoginField = (name, value) => dispatch => {
    dispatch(changeField(name, value))
};

export const validateLogin = (username, password) => {
    let usernameError = "";
    let passwordError = "";
    if (!username)
        usernameError = "Enter username!";
    if (!password)
        passwordError = "Enter password!";
    return {
        usernameError,
        passwordError
    }
};

export const login = () => (dispatch, getState) => {
    dispatch({type: CLEAR_ERRORS});
    const {username, password} = getState().login;
    const {usernameError, passwordError} = validateLogin(username, password);
    const baseURL = `${point}/api-token-auth/`
    if (!usernameError && !passwordError) {
        dispatch({type: LOGIN_REQUEST});
        axios
            .post(baseURL, {
                username,
                password
            }).then(result => {
            const {token} = result.data;
            localStorage.setItem(USER_TOKEN_KEY, token);
            dispatch({type: LOGIN_REQUEST_SUCCESS, token});

            const baseUrl = `${point}/get-persons/`;
            axios.get(baseUrl, {headers: {Authorization: `JWT ${token}`}
                }).then(result => {
                    // const persons = result.data;
                    // localStorage.setItem(PERSONS, JSON.stringify(result.data))
                    localStorage.setItem(PERSONS, JSON.stringify(result.data))
                    dispatch({type: GET_PERSON_SUCCESS, persons: result.data})
                })
                .catch(({response}) => {
                    dispatch({type: GET_PERSONS_FAILED, error: response})
                })
            history.push('/home')
        }).catch(({response}) => {
            dispatch({type: LOGIN_REQUEST_FAILED, error: response});
        });
    } else {
        dispatch({type: FAILED_VALIDATION, usernameError, passwordError});
    }
};
