import React, { useState } from "react";
import "./Poste.css";
import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { Description } from "@mui/icons-material";

function Poste({ utilisateur, image, likes, temps, description }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(likes);

  const jaime = () => {
    if (isLiked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
    setIsLiked(!isLiked);
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
                {isLiked ? (
                  <FavoriteIcon onClick={jaime} className="postIcon" />
                ) : (
                  <FavoriteBorderIcon onClick={jaime} className="postIcon" />
                )}
                <span className="likes">{likesCount} likes</span>
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
