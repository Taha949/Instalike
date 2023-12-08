import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./Suggestions.css";
import suggestionsData from "./suggestions.json";

function Suggestions() {
  // Use a state variable to keep track of the followed users
  const [followed, setFollowed] = useState([]);

  // Define a function to handle the follow button click
  const handleFollow = (id) => {
    // If the user is already followed, remove the user id from the followed array
    if (followed.includes(id)) {
      setFollowed(followed.filter((userId) => userId !== id));
    }
    // Otherwise, add the user id to the followed array
    else {
      setFollowed([...followed, id]);
    }
  };

  return (
    <div className="suggestions">
      <div className="suggestions__title">Suggestions for you</div>
      <div className="suggestions__usernames">
        {suggestionsData.map((user) => (
          <div key={user.id} className="suggestions__username">
            <div>
              <span className="avatar">
                <Avatar>{user.avatar}</Avatar>
              </span>
              <div className="username__info">
                <span className="username">{user.username}</span>
                <span className="relation">{user.relation}</span>
              </div>
            </div>
            <button
              className="follow__button"
              style={{
                backgroundColor: followed.includes(user.id)
                  ? "gray"
                  : "dodgerblue",
                color: followed.includes(user.id) ? "white" : "white",
              }}
              onClick={() => handleFollow(user.id)}
            >
              {followed.includes(user.id) ? "Abonné" : "S'abonner"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Suggestions;
