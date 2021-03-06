import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify.js";

function Login() {
  return (
    <div className="login">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/1200px-Spotify_logo_with_text.svg.png" />
      <a href={loginUrl}>LOG IN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
