import React from 'react'
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages";
import DetailPokemon from "../pages/DetailPokemon";
import MyPokemon from "../pages/MyPokemon";

export default function Router() {
  return (
    <Suspense fallback={<div/>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail-pokemon" element={<DetailPokemon />} />
        <Route path="/my-pokemon" element={<MyPokemon />} />
      </Routes>
    </Suspense>
  );
}