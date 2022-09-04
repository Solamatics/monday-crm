import React from "react";

const DeleteBlog = () => {
  const deleteTicket = () => {
    console.log("deleted");
  };
  return (
    <div className="delete__block">
      <div className="delete__icon" onClick={deleteTicket}>
        ✖
      </div>
    </div>
  );
};

export default DeleteBlog;
