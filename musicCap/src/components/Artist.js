import React from "react";

const Artist = ({ url, name, match, mbid }) => (
  <li>
    <title>{name}</title>
    <a href={url}>Link for {name}</a>
    <p>Match: {match}</p>
    <p>Unique ID: {mbid}</p>
  </li>
);

export default Artist;