import React, { createContext, useState } from "react";
import axios from "axios";
import { apiKey } from "../api/config.js";
export const MusicContext = createContext();

const MusicContextProvider = props => {
  const [music, setMusic] = useState([]);
  const [loading, setLoading] = useState(true);
  const runSearch = query => {
    axios
      .get(
        `http://ws.audioscrobbler.com/2.0/?method=artist.getSimilar&limit=30&format=json&api_key=${apiKey}&page=1&artist=${query}&format=json`
      )
      .then(response => {
        setMusic(response.data.similarartists.artist);
        setLoading(false);
      })
      .catch(error => {
        console.log(
          "Encountered an error with fetching and parsing data",
          error
        );
      });
  };
  return (
    <MusicContext.Provider value={{ music, loading, runSearch }}>
      {props.children}
    </MusicContext.Provider>
  );
};

export default MusicContextProvider;