import React from 'react'
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import('../pages'))
const DetailPokemon = lazy(() => import('../pages/DetailPokemon'))
const MyPokemon = lazy(() => import('../pages/MyPokemon'))

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