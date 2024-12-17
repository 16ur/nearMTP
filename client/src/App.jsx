import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./Components/StartPage/StartPage"; // Page d'accueil
import SearchActivities from "./Components/SearchActivities/SearchActivities"; // Page des activités

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/search" element={<SearchActivities />} />{" "}
      </Routes>
    </Router>
  );
}

export default App;
