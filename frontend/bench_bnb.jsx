import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import { signup, login, logout } from "./util/session_api_util";
import configureStore from "./store/store";
import * as actions from "./actions/session_actions";

document.addEventListener("DOMContentLoaded", () => {
  //// Testing ****
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  window.store = configureStore();
  // window.getState = store.getState;
  window.actions = actions;
  /// testing ^^^^

  const store = configureStore();

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
