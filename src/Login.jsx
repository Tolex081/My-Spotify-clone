import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";
import logo from "../src/images/spotify-logo.png";

const Login = () => {
  return (
    <div className="logo">
      <img src={logo} alt="logo" />

      <a href={loginUrl} target="blank">
        LOGIN WITH SPOTIFY
      </a>
    </div>
  );
};

export default Login;
