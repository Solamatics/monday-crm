import React from "react";
import { Link } from "react-router-dom";
import AvatarDisplay from "./AvatarDisplay";
import StatusDisplay from "./StatusDisplay";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import DeleteBlog from "./DeleteBlog";
import "../index.css";

const TicketCard = ({ color, ticket, status, priority, progress }) => {
  return (
    <div className="ticket__card">
      <Link to={`/ticket/${ticket.documentId}`} id="link">
        <div className="ticket__color" style={{ backgroundColor: color }}></div>
        <h3>{ticket.title}</h3>
        <AvatarDisplay ticket={ticket} />
        <StatusDisplay status={status} />
        <PriorityDisplay priority={priority} />
        <ProgressDisplay progress={progress} />
      </Link>
      <DeleteBlog />
    </div>
  );
};

export default TicketCard;
