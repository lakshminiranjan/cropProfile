import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import ProfilePage from "./components/ProfilePage";
import AgriInfo from "./components/Agri_info";
import CropInfo from "./components/Crop_Info";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/personal-info" />} />
        <Route path="/personal-info" element={<ProfilePage />} />
        <Route path="/agri" element={<AgriInfo />} />
        <Route path="/crop" element={<CropInfo />} />
      </Routes>
    </div>
  );
};

export default App;
