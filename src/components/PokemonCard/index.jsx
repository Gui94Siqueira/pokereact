import * as React from "react";
import { CardMedia } from "@mui/material";

import { typeHandler } from "../../utils";
import './card.css';

export default function PokemonCard({ name, image, types }) {
  return (
    <div className="card">
      <CardMedia component="img" height="200" image={image} alt="green iguana" />
      <h2 className="title">{name}</h2>
      <p className="id">{typeHandler(types)}</p>
      <a className="btn">Detalhes</a>    
    </div>
  );
}