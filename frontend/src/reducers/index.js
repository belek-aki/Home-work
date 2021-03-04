import { combineReducers } from "redux";
import login from "./login";
import addPerson from "./add-person"

export default combineReducers({
    login,
    addPerson
});