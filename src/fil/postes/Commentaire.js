import React, { useState } from "react";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { Avatar } from "@mui/material";

// Composant Commentaire
function Commentaire({
  comments,
  showCommentInput,
  handleToggleCommentInput,
  handleCommentChange,
  handleCommentSubmit,
  commentText,
}) {
  return (
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
  );
}
