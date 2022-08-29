import React from "react";
import { Link } from "react-router-dom";
import AvatarDisplay from "./AvatarDisplay";
import StatusDisplay from "./StatusDisplay";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import DeleteBlog from "./DeleteBlog";

import "../index.css";

const TicketCard = () => {
  return (
    <div className="ticket__card">
      <Link to="">
        <div className="ticket__color"></div>
        <h3>title</h3>
        <AvatarDisplay />
        <StatusDisplay />
        <PriorityDisplay />
        <ProgressDisplay />
      </Link>
      <DeleteBlog />
    </div>
  );
};

export default TicketCard;
