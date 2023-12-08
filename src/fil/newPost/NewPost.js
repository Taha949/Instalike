import React, { useState } from "react";
import "./NewPost.css";

const NewPost = ({ onAddPost }) => {
  const [nouveauPoste, setNouveauPoste] = useState({
    utilisateur: "Lisa",
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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setNouveauPoste((prevPoste) => ({
        ...prevPoste,
        image: reader.result,
      }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
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
      utilisateur: "Lisa",
      likes: 0,
      image: "",
      description: "",
    });
  };

  return (
    <div className="add-post-form">
      <form onSubmit={handleAddPostSubmit}>
        <label>
          Image (Upload):
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
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
