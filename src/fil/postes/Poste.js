import React, { useState } from "react";
import "./Poste.css";
import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { Description } from "@mui/icons-material";

// ... (votre importation de réact et autres icônes)

function Poste({ utilisateur, image, likes, temps, description }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(likes);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);
  const [showCommentInput, setShowCommentInput] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleCommentSubmit = () => {
    if (commentText.trim() !== "") {
      const newComment = {
        user: "Toto",
        text: commentText,
      };

      setComments([...comments, newComment]);
      setCommentText("");
    }
  };

  const handleToggleCommentInput = () => {
    setShowCommentInput(!showCommentInput);
  };

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      handleCommentSubmit();
    }
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
                  <FavoriteIcon onClick={handleLike} className="postIcon" />
                ) : (
                  <FavoriteBorderIcon
                    onClick={handleLike}
                    className="postIcon"
                  />
                )}
                <span className="likes">{likesCount} likes</span>
                <ChatBubbleOutlineIcon
                  className="postIcon"
                  onClick={handleToggleCommentInput}
                />
                <div className="personne_bas">
                  <div className="username">{utilisateur}</div>
                  <div className="description">{description}</div>
                  {showCommentInput && (
                    <div className="comments">
                      {comments.map((comment, index) => (
                        <div key={index}>
                          <strong>{comment.user}:</strong> {comment.text}
                        </div>
                      ))}
                    </div>
                  )}
                  {showCommentInput && (
                    <input
                      type="text"
                      placeholder="Ajouter un commentaire..."
                      value={commentText}
                      onChange={handleCommentChange}
                      onKeyPress={handleEnterKey}
                    />
                  )}
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
