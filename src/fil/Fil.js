import React, { useState } from "react";
import "./Fil.css";
import Messagerie from "./ Messagerie";
import Poste from "./postes/Poste";
function Fil() {
  const [postes, setPostes] = useState([
    {
      utilisateur: "taha.maata",
      image: "campus.png",
      likes: 54,
      temps: "1d",
    },
    {
      utilisateur: "thomas_foret",
      image:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
      likes: 432,
      temps: "5h",
    },
    {
      utilisateur: "BIG_P",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
      likes: 140,
      temps: "30min",
    },
    {
      utilisateur: "kobee_18",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGCAaQ5u1TMTij5ELPWi5-VPtlSqELw-R6lj0EpYmNcGt56kOQaCokzS0IK81MOSphlkw&usqp=CAU",
      likes: 14,
      temps: "18h",
    },
  ]);
  return (
    <div className="fil">
      <div className="fil_gauche">
        <div className="poste">
          {postes.map((poste) => (
            <Poste
              utilisateur={poste.utilisateur}
              image={poste.image}
              likes={poste.likes}
              temps={poste.temps}
            />
          ))}
        </div>
      </div>
      <div className="fil_droite">
        <Messagerie />
      </div>
    </div>
  );
}

export default Fil;
