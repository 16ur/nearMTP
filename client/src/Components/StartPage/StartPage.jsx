import React from "react";
import { Link } from "react-router-dom";
import "./StartPage.css";

const StartPage = () => {
  return (
    <div className="start-page">
      <div className="home-container">
        <header className="header">
          <h1>Bienvenue sur nearMTP</h1>
          <p>
            Découvrez les meilleures activités et aventures à faire autour de
            Montpellier.
          </p>
          <Link to="/search" className="explore-button">
            Explorer les activités
          </Link>
        </header>
      </div>
    </div>
  );
};

export default StartPage;
