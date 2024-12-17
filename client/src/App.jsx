import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./Components/StartPage/StartPage";
import SearchActivities from "./Components/SearchActivities/SearchActivities";
import ActivityDetails from "./Components/ActivityDetails/ActivityDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/search" element={<SearchActivities />} />{" "}
        <Route path="/activities/:id" element={<ActivityDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
