import React from "react";
import ReactDOM from "react-dom/client";
import OrbSkill from "./OrbSkill/OrbSkill.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/heaven-burns-red/orb-skill" element={<OrbSkill />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
