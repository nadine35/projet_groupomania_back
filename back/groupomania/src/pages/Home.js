import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <ul className="inscription">
          <input type="text" />
      </ul>
      <h2>Inscription</h2>
      <h2>Connexion</h2>
    </div>
  );
};

export default Home;
