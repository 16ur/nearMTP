import React from "react";
import "./Footer.css";
import CV from "../../assets/CV_AXEL_MANGUIAN.pdf";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>nearMTP</h2>
          <p>
            Découvrez les meilleures activités et aventures autour de
            Montpellier. Explorez et cultivez votre curiosité !
          </p>
        </div>

        <div className="footer-section links">
          <h3>Liens Utiles</h3>
          <ul>
            <li>
              <a href="/">Accueil</a>
            </li>
            <li>
              <a href="/search">Activités</a>
            </li>
          </ul>
        </div>

        <div className="footer-section social">
          <h3>Retrouvez-moi</h3>
          <div className="social-links">
            <a
              href="https://axelmanguian.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-globe"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/axel-manguian/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a href={CV} download target="_blank" rel="noopener noreferrer">
              <i className="fas fa-file"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 nearMTP | Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
