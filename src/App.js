import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login.js";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player.js";
import { useDataLayerValue } from "./DataLayer.js";
import Helmet from "react-helmet";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
      spotify.getPlaylist("2Jb9R4KOfxAo6BX1A3Qsby").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
    }
  }, []);
  return (
    <div className="app">
      <Helmet>
        <link
          rel="icon"
          type="image/png"
          href="https://lh3.googleusercontent.com/eN0IexSzxpUDMfFtm-OyM-nNs44Y74Q3k51bxAMhTvrTnuA4OGnTi_fodN4cl-XxDQc"
          sizes="16x16"
        />
        <title>Spotify clone</title>
      </Helmet>
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
