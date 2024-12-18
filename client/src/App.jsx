import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./Components/StartPage/StartPage";
import SearchActivities from "./Components/SearchActivities/SearchActivities";
import ActivityDetails from "./Components/ActivityDetails/ActivityDetails";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="main-content">
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/search" element={<SearchActivities />} />
            <Route path="/activities/:id" element={<ActivityDetails />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
