// App.js
import React from "react";
import ProfilePage from "./components/ProfilePage.js";
import Agri_Info from "./components/Agri_info.js";
import Crop_Info from "./components/Crop_Info.js";
import { Routes , Route , Navigate } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Routes>
        {/* Set the default route to ProfilePage */}
        <Route path="/" element={<Navigate to="/personal-info" />} />
        {/* Correct the path without hash */}
        <Route path="/personal-info" element={<ProfilePage />} />
        {/* Correct the path without hash */}
        <Route path="/agri" element={<Agri_Info />} />
        {/* Correct the path without hash */}
        <Route path="/crop" element={<Crop_Info />} />
      </Routes>
    </div>
  );
};

export default App;
