import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SearchActivities.css";

const SearchActivities = () => {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchActivities = async (keyword = "", category = "") => {
    setLoading(true);
    try {
      const response = await axios.get(
        "http://localhost:3001/activities/search",
        {
          params: { keyword, category },
        }
      );
      setActivities(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des activités :", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  useEffect(() => {
    fetchActivities(keyword, category);
  }, [category]);

  return (
    <div className="search-container">
      <h1 className="app-title">Activités près de Montpellier</h1>

      <div className="form-container">
        <input
          type="text"
          placeholder="Mots-clés"
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
            fetchActivities(e.target.value, category);
          }}
          className="input-field"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="select-field"
        >
          <option value="">Toutes les catégories</option>
          <option value="Aventure">Aventure</option>
          <option value="Culture">Culture</option>
        </select>
      </div>

      {!loading && activities.length === 0 && (
        <p className="no-results">Aucune activité trouvée.</p>
      )}

      <div className="grid-container">
        {activities.map((activity) => (
          <div className="card" key={activity.id}>
            <img
              src={activity.image}
              alt={activity.name}
              className="card-image"
            />
            <div className="card-content">
              <h3 className="card-title">{activity.name}</h3>
              <p className="card-description">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchActivities;