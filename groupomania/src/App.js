import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Profil from "./pages/Profil";




const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/profil" element={<Profil />}/>
        <Route path="/trending" element={<Trending />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
