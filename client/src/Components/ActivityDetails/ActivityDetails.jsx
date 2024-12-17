import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ActivityDetails.css";

const ActivityDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    const fetchActivityDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/activities/${id}`
        );
        setActivity(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des détails :", error);
      }
    };

    fetchActivityDetails();
  }, [id]);

  if (!activity) {
    return <p>Chargement des détails...</p>;
  }

  return (
    <div className="activity-details-container">
      <button className="back-button" onClick={() => navigate("/search")}>
        Retour aux activités
      </button>
      <div className="details-card">
        {activity.image && (
          <img
            src={`http://localhost:3001${activity.image}`}
            alt={activity.name}
            className="details-image"
          />
        )}
        <div className="details-content">
          <h1 className="details-title">{activity.name}</h1>
          <p className="details-description">{activity.description}</p>
          {activity.website_link ? (
            <a
              href={activity.website_link}
              target="_blank"
              rel="noopener noreferrer"
              className="details-link"
            >
              Visiter le site
            </a>
          ) : (
            <p className="details-link">Aucun site web disponible</p>
          )}
          <p className="details-phone">
            📞 {activity.phone || "Numéro non disponible"}
          </p>
          <p className="details-address">
            📍{" "}
            {activity.address ? (
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  activity.address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="details-address-link"
              >
                {activity.address}
              </a>
            ) : (
              "Adresse non disponible"
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetails;
