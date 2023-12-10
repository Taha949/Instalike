import React, { useState } from "react";
import "./Acceuil.css";
import Navigation from "./navigation/Navigation";
import Fil from "./fil/Fil";
import AddPostForm from "./fil/newPost/NewPost";
import postData from "./postData.json";
import Suggestions from "./suggestions/Suggestions";

function Acceuil() {
  const [showAddPostForm, setShowAddPostForm] = useState(false);
  const [postes, setPostes] = useState(postData);

  const handleAddPostClick = () => {
    setShowAddPostForm((prevShowAddPostForm) => !prevShowAddPostForm);
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
        <Suggestions />
      </div>

      <div className="add-post-button" onClick={handleAddPostClick}>
        +
      </div>

      {showAddPostForm && <AddPostForm onAddPost={handleAddPost} />}
    </div>
  );
}

export default Acceuil;
