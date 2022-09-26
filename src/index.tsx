import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import Pages from "./p2-homeworks/h5-rrd-v6/Pages";
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import store from "./p2-homeworks/h10/bll/store";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <Pages/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
