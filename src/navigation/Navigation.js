import React from "react";
import "./Navigation.css";
import HomeIcon from "@mui/icons-material/Home";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SettingsIcon from "@mui/icons-material/Settings";

function Navigation() {
  return (
    <div className="navigation">
      <img
        className="image"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJsAAACbCAMAAABCvxm+AAAAY1BMVEUAAAD///9sbGydnZ34+PiRkZEeHh78/Pzo6Oja2trFxcWVlZXv7+9zc3PT09O9vb1BQUGIiIiurq5fX1+mpqYxMTEPDw96enoqKiri4uJYWFgICAhmZmZOTk7MzMxJSUkXFxdw2NimAAAEx0lEQVR4nO2c6XqqMBCGAVklWFkUUCvc/1WeCmZjiUq2eZ7j96+1pG8m22Rm0HEs69xc8iJp3QXZRnvqVBc+VLaH6qnxbANxymO4bE5YRGDZHMdDcNmcLoHL5jgHwGz9AS6b4ySA2ToEl83xIrhsTgGYLYzhsjk5YDanBcyWA2a7+nDZ/paqbYJ11YDZTq1tAoES2wACFbYBBMptAwh0sQ0gUGMbQKCzbYCvvvpKl8LjJcvT3TtK8+xyDI2R3ao7H4x6pfhe3UyAnYI4ek0zUxQHJ81kYYVec6wIVVqHtv5sLKeKa21kzY8U2UM/mg7wY/L6f79UctSB9quA7KFfDWjbFwEvpBzuOPkHyX6XZ95rZflun0y6pXhYG26uxWl5/eTpMuXoErULgl2hKPvcIz3XLN2PSrSabXjb/n5iu5epQwuZLTfY3ErATAp1J0RFW5XZ2RnrV6rQTkjOalc8P6nlkKqDnza5ZRL/Vof4kI4sP3KdXFAs09tsNHo8PEpHIFaDdiP+2oblRR5Gw45LplykxtkkKyHecNMmibNx+p8R96OswjtuLv384Suzbww9S/GPdxXbyBFPN1SK/zAs/87Psud+d6Fs0fBJiQ0XqzhVSfOCOGLYpXffjx7y/XvaEZswLoI/sF3JwawihJXhxvarZAGdVaOJDgGmo5UVz8f3Egtrphw3tlv+/BoseXYoHz0VMr+iJ8sO/0JFWDIVN+ateerJsEv0eLvFPSNd3bCyZiIdXRyEfF4Og+UPnemr0Yz4ATJFVoZhG5u38OF+CYroecTdamaFe6bYCiGa6y6E4U2xia3GWM48W85zoH1RFPvJop0tIDNsHrsM2gJfUJqCrcfyp2e6EbYzg+BzYZiwYqiTyY3MCBvj/rfTs/HIcE9G1QRbSCfWYe5ShPQUQ/ynJtio2dolbyekluPdbwNs1DD+srPTkTnHm9UAG40qrTmwxF2OOsNsxANYHNGH6Khyg2qAjQzpenaYHGh3w2xkNq3HhBoyI82yNZgNCZ7Eu4zPbr/62Up87Vx11B3qCkTs1UA/m4fZRMUIeMJF3JPa2TLAbJDtdgM838KP1ikbR/m/9zfQ5wJxkQCepx0JGMLzQyD7b5D9XtD3Bcj3LMH9tLd+P4V8r+dGdZhYgOIhoONIoONvfD76HavpYtsW751Kabz3RZz8Jo6TzzuDP1cRJ5fLL8ykNL/wVl6GLztj8jIzKc3LvJfPCph8VtCt5/jU5rPezgP2l3kecCa1eUCp/OlMNH/aK2iNOrBIvsJbcd6ZydfLl/2pztfL1TlwUl7nIFkfwkp9fYhsXQ2RhroayPVIXB3X9o1ETx0XPbdccPVvk7rBGlTd4KTeEqXlR3h66y0h16mCru8FXRcNup4cdB3+nzLJ9xeU7mtTAX7vw4H8vswgsO8ZDfr0/azeGNlXX31lWJDfxob8Fjvkt/8hf2sC5G+bgPwtHa0R12WbFATVtElYGWNZfAUYLKlJQuiR67ZgDecCNpyrNlKnVI97ENSlOlwel9K2ADReubUEd6Q13m5hnqrPq/dC3Y594bjAwTbIgkjQIoE352hEBYFbrWwcqgA26fhgVADqbJ2Eytoc0IV1FsjzixqKm74YZ0yK/NJYN+A/3UI8QMYyTCsAAAAASUVORK5CYII="
      />
      <div className="boutons">
        <div className="bouton">
          <button>
            <img
              className="userImage userImageHome"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZkn1jq7Y_no3d4KLY3w9y4aOwSWtoenBPKw&usqp=CAU"
              alt="Nom de l'utilisateur"
            />
            <span>Utilisateur</span>
          </button>
          <button>
            <HomeIcon />
            <span>Accueil</span>
          </button>
        </div>
        <div className="bouton">
          <button>
            <ChatIcon />
            <span>Messagerie</span>
          </button>
        </div>
        <div className="bouton">
          <button>
            <FavoriteIcon />
            <span>Mes Likes</span>
          </button>
        </div>
        <div className="bouton">
          <button>
            <SettingsIcon />
            <span>Paramètres</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
