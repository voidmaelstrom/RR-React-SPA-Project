import React, { useContext, useEffect } from "react";
import { MusicContext } from "../context/MusicContext";
import Gallery from "./Gallery";
import Loader from "./Loader";

const Container = ({ searchTerm }) => {
  const { music, loading, runSearch } = useContext(MusicContext);
  useEffect(() => {
    runSearch(searchTerm);
    // eslint-disable-next-line
  }, [searchTerm]);

  return (
    <div className="music-container">
      {loading ? <Loader /> : <Gallery data={music} />}
    </div>
  );
};

export default Container;