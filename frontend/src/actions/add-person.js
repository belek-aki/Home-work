import {FAILED_VALIDATION, LOGIN_REQUEST} from "./login-action";
import axios from "axios";
import point from "./point";

export const ADD_PERSON_CHANGE_FIELD = "ADD_PERSON_CHANGE_FIELD/";
export const LASTNAME_FILED = "LASTNAME_FILED";
export const FIRSTNAME_FILED = "FIRSTNAME_FILED"
export const PATRONYMICNAME_FILED = "PATRONYMICNAME_FILED"
export const ADDRESS_FILED = "ADDRESS_FILED"
export const PHONE_FILED = "PHONE_FILED"
export const INN_FILED = "INN_FILED"
export const ADD_PERSON_REQUEST = "ADD_PERSON_REQUEST"
export const ADD_PERSON_SUCCESS = "ADD_PERSON_SUCCESS"
export const ADD_PERSON_FAILED = "ADD_PERSON_FAILED"


export const FIELDS = {
    last_name: ADD_PERSON_CHANGE_FIELD + LASTNAME_FILED,
    first_name: ADD_PERSON_CHANGE_FIELD + FIRSTNAME_FILED,
    patronymic_name: ADD_PERSON_CHANGE_FIELD + PATRONYMICNAME_FILED,
    address: ADD_PERSON_CHANGE_FIELD + ADDRESS_FILED,
    phone_number: ADD_PERSON_CHANGE_FIELD + PHONE_FILED,
    inn: ADD_PERSON_CHANGE_FIELD + INN_FILED
};

export function changeField(field, value) {
    return {
        type: FIELDS[field],
        value
    };
}

export const changeAddPersonField = (name, value) => dispatch => {
    dispatch(changeField(name, value))
};

export const validateLogin = (last_name, first_name, patronymic_name, address, phone_number, inn) => {
    let last_nameError = "";
    let first_nameError = "";
    let patronymic_nameError = "";
    let addressError = "";
    let phoneError = "";
    let innError = "";
    if (!last_name)
        last_nameError = "Enter last_name!";
    if (!first_name)
        first_nameError = "Enter first_name!";
    if (!patronymic_name)
        patronymic_nameError = "Enter patronymic_name!";
    if (!address)
        addressError = "Enter address!";
    if (!phone_number)
        phoneError = "Enter phone!";
    if (!inn)
        innError = "Enter inn!";
    return {
        last_nameError,
        first_nameError,
        patronymic_nameError,
        addressError,
        phoneError,
        innError,
    }
};

export const addPersonChange = () => (dispatch, getState) => {
    const {last_name, first_name, patronymic_name, address, phone_number, inn} = getState().addPerson;
    const {
        last_nameError,
        first_nameError,
        patronymic_nameError,
        addressError,
        phoneError,
        innError
    } = validateLogin(last_name, first_name, patronymic_name, address, phone_number, inn);
    const baseURL = `${point}/add-person/`
    console.log(last_name, first_name, patronymic_name, address, phone_number, inn)
    if (!last_nameError && !first_nameError && !patronymic_nameError && !addressError && !phoneError && !innError) {
        dispatch({type: ADD_PERSON_REQUEST});
        axios
            .post(baseURL, {
                last_name, first_name, patronymic_name, address, phone_number, inn
            }).then((result) => {
            dispatch({type: ADD_PERSON_SUCCESS, person: result.data})
            console.log(result)
        })
            .catch(({response}) => {
                dispatch({type: ADD_PERSON_FAILED, error: response})
                console.log(response)
            })
    } else {
        dispatch({
            type: FAILED_VALIDATION, last_nameError,
            first_nameError,
            patronymic_nameError,
            addressError,
            phoneError,
            innError
        });
    }
}