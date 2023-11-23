import React from "react";
import "./Acceuil.css";
import Navigation from "./navigation/Navigation";
import Fil from "./fil/Fil";
function Acceuil() {
  return (
    <div className="acceuil">
      <div className="acceuil_nav">
        <Navigation />
      </div>
      <div className="acceuil_fil">
        <Fil />
      </div>
    </div>
  );
}

export default Acceuil;
