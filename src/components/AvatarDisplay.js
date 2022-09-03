import React from "react";
import blankAvatar from "../images/blank-profile.png";

const AvatarDisplay = ({ ticket }) => {
  return (
    <div className="avatar__container">
      <div className="img__container">
        <img
          src={ticket.avatar ? ticket.avatar : blankAvatar}
          alt={`pic of ${ticket.owner}`}
        />
      </div>
    </div>
  );
};

export default AvatarDisplay;
