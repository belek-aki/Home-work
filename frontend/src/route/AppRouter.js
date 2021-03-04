import React from "react";
import {Router, Route, Switch, Redirect} from "react-router-dom";
import { history } from "../index";
import AddPerson from "../containers/add-peroson-container";
import LoginPage from "../containers/login-container";
import HomePage from "../components/HomePage";
import PersonList from "../containers/person-list-container";


export default function AppRouter () {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/add-person" component={AddPerson}/>
                <Route path="/login" component={LoginPage}/>
                <Route path="/person-list" component={PersonList}/>
                <Route path="/home" component={HomePage}/>
                {/*<Route component={() => <Redirect to="/home"/>}/>*/}
            </Switch>
        </Router>
    )
}