import React from "react";
import logo from "../media/logoclean.png";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery } from "@mui/material";
const Menu = () => {
  const mobile = useMediaQuery("(max-width:900px)");
  const laptop = useMediaQuery("(min-width:901px)");
  return (
    <div className="menu">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      {laptop && (
        <div className="menu-options">
          <ul>
            <li>About</li>
            <li>Menus</li>
            <li>Hours & Location</li>
            <li className="reservation">Reservations</li>
          </ul>
        </div>
      )}
      {mobile && <div></div>}
    </div>
  );
};

export default Menu;
