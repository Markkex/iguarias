import React, { FC, useState } from "react";
import logo from "../media/logo.png";
import { Button, Modal, Box, useMediaQuery } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
const Menu: FC = () => {
  const [open, setOpen] = useState(false);
  const mobile = useMediaQuery("(max-width:1000px)");
  const desktop = useMediaQuery("(min-width:1001px)");
  const handleOpen = () => {
    setOpen(true);
  };
  const [animation, setAnimation] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="menu">
      <div className="logo">
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div>
        {mobile && (
          <div className="menu-opener">
            <Button onClick={handleOpen}>
              <MenuIcon className="menuicon" />
            </Button>
            <Modal open={open} onClose={handleClose}>
              <Box className="modal">
                <div className="cancel-icon" onClick={handleClose}>
                  <Button>
                    <CloseIcon />
                  </Button>
                </div>
                <div className="menu-options">
                  <a href="#" className="underline" onClick={handleClose}>
                    Home
                  </a>
                  <a href="#about" className="underline" onClick={handleClose}>
                    About
                  </a>
                  <a href="#menu" className="underline" onClick={handleClose}>
                    Menu
                  </a>
                  <a
                    href="#hours&location"
                    className="underline"
                    onClick={handleClose}
                  >
                    Hours & Location
                  </a>
                  <a
                    href="#reservations"
                    className="underline"
                    onClick={handleClose}
                  >
                    Reservations
                  </a>
                </div>
              </Box>
            </Modal>
          </div>
        )}
        {desktop && (
          <div className="menu-opener" onClick={handleOpen}>
            <a href="#" className="underline">
              Home
            </a>
            <a href="#about" className="underline">
              About
            </a>
            <a href="#menu" className="underline">
              Menu
            </a>
            <a href="#hours&location" className="underline">
              Hours & Location
            </a>
            <a href="#reservations" className="underline">
              Reservations
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
