import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Acceuil from "./Acceuil";
import Profile from "./profil/Profile";
import Messagerie from "./messagerie/Messagerie";
import "./App.css";
import Profile__ from "./profil/Profile__";

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/messagerie">Messagerie</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/acceuil">Acceuil</Link>
          <Link to="/profile__">Profile__</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/messagerie" element={<Messagerie />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/acceuil" element={<Acceuil />} />
          <Route path="/profile__" element={<Profile__ />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
