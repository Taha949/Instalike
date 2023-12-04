import React, { useState } from "react";
import "./Acceuil.css";
import Navigation from "./navigation/Navigation";
import Fil from "./fil/Fil";
import Messagerie from "./fil/meesagerie/Messagerie";
import AddPostForm from "./NewPost";
import postData from "./postData.json"; // Update the path accordingly

function Acceuil() {
  const [showAddPostForm, setShowAddPostForm] = useState(false);
  const [postes, setPostes] = useState(postData);

  const handleAddPostClick = () => {
    setShowAddPostForm(true);
  };

  const handleAddPost = (nouveauPosteData) => {
    setPostes((prevPostes) => [...prevPostes, nouveauPosteData]);
    setShowAddPostForm(false);
  };

  return (
    <div className="acceuil">
      <div className="acceuil_nav">
        <Navigation />
      </div>
      <div className="acceuil_fil">
        <Fil postes={postes} />
      </div>
      <div>
        <Messagerie />
      </div>

      <div className="add-post-button" onClick={handleAddPostClick}>
        +
      </div>

      {showAddPostForm && <AddPostForm onAddPost={handleAddPost} />}
    </div>
  );
}

export default Acceuil;
