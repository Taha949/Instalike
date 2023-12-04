import React, { useState } from "react";

const NewPost = ({ onAddPost }) => {
  const [nouveauPoste, setNouveauPoste] = useState({
    utilisateur: "Toto38",
    likes: 0,
    image: "",
    description: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setNouveauPoste((prevPoste) => ({
      ...prevPoste,
      [name]: value,
    }));
  };

  const handleAddPostSubmit = (e) => {
    e.preventDefault();
    const nouveauPosteData = {
      utilisateur: nouveauPoste.utilisateur,
      image: nouveauPoste.image,
      likes: 0,
      temps: "maintenant",
      description: nouveauPoste.description,
    };

    console.log("Nouveau Poste Data:", nouveauPosteData);

    onAddPost(nouveauPosteData);

    setNouveauPoste({
      utilisateur: "Toto38",
      likes: 0,
      image: "",
      description: "",
    });
  };

  return (
    <div className="add-post-form">
      <form onSubmit={handleAddPostSubmit}>
        <label>
          Image (URL):
          <input
            type="text"
            name="image"
            value={nouveauPoste.image}
            onChange={handleFormChange}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={nouveauPoste.description}
            onChange={handleFormChange}
            required
          ></textarea>
        </label>
        <button type="submit">Ajouter un nouveau post</button>
      </form>
    </div>
  );
};

export default NewPost;
