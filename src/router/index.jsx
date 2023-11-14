import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";
import About from "../pages/about";

export const Router = () => {
  const [pokemonData, setPokemonData] = useState();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home setPokemonData={setPokemonData} />} />
        <Route path="/profile" element={<Profile pokemonData={pokemonData} />} />;
        <Route path="/about" element={<About pokemonData={pokemonData} />}/>;
      </Routes>
    </BrowserRouter>
  );
};