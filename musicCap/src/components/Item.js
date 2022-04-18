import React from "react";
import Container from "./Container";

const Item = ({ searchTerm }) => {
  return (
    <div>
      <h2>Music Artists like {searchTerm}</h2>
      <Container searchTerm={searchTerm} />
    </div>
  );
};

export default Item;