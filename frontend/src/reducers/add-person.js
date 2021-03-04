import {merge} from 'extend-merge';
import createReducer from "./utils/base";

import {
    ADD_PERSON_CHANGE_FIELD, ADD_PERSON_FAILED, ADD_PERSON_SUCCESS,
    ADDRESS_FILED,
    FIRSTNAME_FILED, INN_FILED,
    LASTNAME_FILED,
    PATRONYMICNAME_FILED, PHONE_FILED
} from "../actions/add-person";

export const INITIAL_STATE = {
    last_name: "",
    first_name: "",
    patronymic_name: "",
    address: "",
    phone_number: "",
    inn: "",
};

export default createReducer({
        [ADD_PERSON_CHANGE_FIELD + LASTNAME_FILED]: (state, action) => merge({}, state, {
            last_name: action.value
        }),
        [ADD_PERSON_CHANGE_FIELD + FIRSTNAME_FILED]: (state, action) => merge({}, state, {
            first_name: action.value
        }),
        [ADD_PERSON_CHANGE_FIELD + PATRONYMICNAME_FILED]: (state, action) => merge({}, state, {
            patronymic_name: action.value
        }),
        [ADD_PERSON_CHANGE_FIELD + ADDRESS_FILED]: (state, action) => merge({}, state, {
            address: action.value
        }),
        [ADD_PERSON_CHANGE_FIELD + PHONE_FILED]: (state, action) => merge({}, state, {
            phone_number: action.value
        }),
        [ADD_PERSON_CHANGE_FIELD + INN_FILED]: (state, action) => merge({}, state, {
            inn: action.value
        }),
        [ADD_PERSON_SUCCESS]: (state, action) => merge({}, state, {
            person: action.person
        }),
        [ADD_PERSON_FAILED]: (state, action) => merge({}, state, {
            error: action.error
        })
    },
    INITIAL_STATE
)