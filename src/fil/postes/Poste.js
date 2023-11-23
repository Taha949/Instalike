import React, { useState } from "react";
import "./Poste.css";
import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { Description } from "@mui/icons-material";

//const [jaimeDeja, setJaimeDeja] = useState(false);

function Poste({ utilisateur, image, likes, temps, description }) {
  const [sss, setLikes] = useState(0);

  const jaime = () => {
    setLikes(sss + 1);
  };

  return (
    <div className="postContainer">
      <div className="poste">
        <div className="entete">
          <div className="personne">
            <Avatar>{utilisateur.charAt(0).toUpperCase()}</Avatar>
            {utilisateur} <span>{temps}</span>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="postContent">
          <div className="image">
            <img src={image} alt="" />
          </div>
          <div className="footer">
            <div className="footerIcons">
              <div className="iconsMain">
                <FavoriteBorderIcon onClick={jaime} className="postIcon" />{" "}
                <span className="likes">{likes + sss} likes</span>
                <ChatBubbleOutlineIcon className="postIcon" />
                <div className="personne_bas">
                  <div className="username">{utilisateur}</div>
                  <div className="description">{description}</div>
                </div>
              </div>
              <div className="iconSave">
                <BookmarkBorderIcon className="postIcon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Poste;
