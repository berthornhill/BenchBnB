import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import { signup, login, logout } from "./util/session_api_util";
import configureStore from "./store/store";
import * as actions from "./actions/session_actions";

document.addEventListener("DOMContentLoaded", () => {
  // window.login = login;
  // window.signup = signup;
  // window.logout = logout;

  const store = configureStore();

  window.store = store;
  window.getState = store.getState;
  window.actions = actions;
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
