// Messagerie.js
import React, { useState } from "react";
import { Avatar } from "@mui/material";
import "./Messagerie.css";
import suggestionsData from "../suggestions/suggestions.json";
import Navigation from "../navigation/Navigation";

const Messagerie = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handlePersonClick = (person) => {
    setSelectedPerson(person);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      const newMessage = {
        username: selectedPerson.username,
        message: inputValue,
        isUserMessage: true,
      };

      setMessages([...messages, newMessage]);
      setInputValue("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleInputSubmit(event);
    }
  };

  return (
    <div className="messagerie-container">
      <div className="messagerie-navigation">
        <Navigation />
      </div>
      <div className="messagerie-content">
        {selectedPerson && (
          <div className="chat-header">
            <div className="chat-header-info">
              <Avatar>{selectedPerson.avatar}</Avatar>
              <span>{selectedPerson.username}</span>
              <p>{selectedPerson.bio}</p>
            </div>
          </div>
        )}
        <div className="messagerie-suggestions">
          <h2>Contacts</h2>
          {suggestionsData.map((person) => (
            <div
              key={person.id}
              className={`person ${selectedPerson === person ? "active" : ""}`}
              onClick={() => handlePersonClick(person)}
            >
              <Avatar>{person.avatar}</Avatar>
              <span>{person.username}</span>
            </div>
          ))}
        </div>
        <div className="messagerie-chat">
          {selectedPerson && (
            <div className="chat-container">
              <div className="autre_pers">
                {" "}
                Yo le boss le projet d'IHM c'est à rendre pour quand{" "}
              </div>
              <div className="chat-messages">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`chat-message ${
                      message.isUserMessage ? "user-message" : ""
                    }`}
                  >
                    {message.message}
                  </div>
                ))}
              </div>
              <div className="chat-input">
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Tapez votre message ici"
                  disabled={!selectedPerson}
                />
                <button onClick={handleInputSubmit}>Envoyer</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messagerie;
