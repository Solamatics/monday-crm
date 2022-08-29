import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/crm-logo.png";
import "../index.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <div className="logo__container">
        <img src={logo} alt="logo" />
      </div>
      <div className="controls__container">
        <div className="icon" onClick={() => navigate("/tickets")}>
          +
        </div>
        <div className="icon" onClick={() => navigate("/")}>
          Back
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
