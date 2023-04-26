import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../../App";
import Crewpage from "../pages/crewPage";
import DestinationPage from "../pages/destinationPage";
import HomePage from "../pages/homePage";
import TechnologyPage from "../pages/technologyPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/Home" element={<HomePage />} />
          <Route path="/Destination" element={<DestinationPage />} />
          <Route path="/crew" element={<Crewpage />} />
          <Route path="technology" element={<TechnologyPage />} />
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
