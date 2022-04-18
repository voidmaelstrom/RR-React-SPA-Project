import React from "react";
import NoArtists from "./NoArtists";
import Artist from "./Artist";
const Gallery = props => {
  const results = props.data;
  let artists;
  let noArtists;
  // map variables to each item in fetched artis array and return artist component
  let i = 0
  if (results.length > 0) {
    artists = results.map(artist => {
      let name = artist.name;
      let url = artist.url;
      let mbid = artist.mbid;
      let match = artist.match;
      i++;
      return <Artist key={i} url={url} name={name} match={match} mbid={mbid}/>;
    });
  } else {
    noArtists = <NoArtists />; // return 'not found' component if no artists fetched
  }
  return (
    <div>
      <ul>{artists}</ul>
      {noArtists}
    </div>
  );
};

export default Gallery;