import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Acceuil from "./Acceuil";
import Profile from "./profil/Profile";
import Messagerie from "./messagerie/Messagerie";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/messagerie">Messagerie</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/acceuil">Acceuil</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/messagerie" element={<Messagerie />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/acceuil" element={<Acceuil />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
