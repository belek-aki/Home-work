import React from 'react'
import {Provider} from "react-redux";
import AppRouter from "./route/AppRouter"
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";
import { loadingBarMiddleware } from "react-redux-loading-bar";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk, loadingBarMiddleware()))
);

export default function App() {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    );
}

