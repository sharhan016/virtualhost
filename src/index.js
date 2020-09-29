import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import axios from "axios";
//import { LogoutSuccess } from "./store/actions/Auth";
import thunk from "redux-thunk";


let token = localStorage.getItem("token");
axios.defaults.headers["Authorization"] = `${token}`;
axios.defaults.baseURL = "http://eslot.in/event_portal/api/v1";
axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const store = createStore(rootReducer, applyMiddleware(thunk))
const rootElement = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    rootElement
);



serviceWorker.unregister();

