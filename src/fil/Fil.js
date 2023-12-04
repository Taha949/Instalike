import React from "react";
import Poste from "./postes/Poste";
import Messagerie from "./meesagerie/Messagerie";

function Fil({ postes }) {
  return (
    <div className="fil">
      <div className="fil_gauche">
        <div className="poste">
          {postes.map((poste, index) => (
            <Poste
              key={index}
              utilisateur={poste.utilisateur}
              image={poste.image}
              likes={poste.likes}
              temps={poste.temps}
              description={poste.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Fil;
