import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import { signup, login, logout } from "./util/session_api_util";

document.addEventListener("DOMContentLoaded", () => {
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  const root = document.getElementById("root");
  ReactDOM.render(<Root />, root);
});
