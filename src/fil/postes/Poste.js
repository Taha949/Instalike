import React from "react";
import "./Poste.css";
import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

function Poste({ utilisateur, image, likes, temps }) {
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
                <FavoriteBorderIcon className="postIcon" />{" "}
                <ChatBubbleOutlineIcon className="postIcon" />
                <span className="likes">{likes}likes</span>
                <div className="personne_bas">
                  <div className="username">{utilisateur}</div>
                  <div className="description">
                    Description Description Description
                  </div>
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
