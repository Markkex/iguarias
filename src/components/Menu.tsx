import React, { FC, useState } from "react";
import logo from "../media/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, Modal, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import video from "../media/iguarias-video.mp4";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import tripadvisor from "../media/Orion_tripadvisor.svg";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Menu: FC = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setAnimation(true);
    setOpen(true);
  };
  const [animation, setAnimation] = useState(false);
  const handleClose = () => {
    setTimeout(() => setOpen(false), 300);
    setAnimation(false);
  };
  return (
    <div className="menu">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <div>
        <div className="menu-opener" onClick={handleOpen}>
          <Button>
            <MenuIcon />
          </Button>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          className={animation ? "animation" : "no-animation"}
        >
          <Box className="modal-menu">
            <div className="menu-video">
              <video autoPlay muted loop id="my-video">
                <source src={video} type="video/mp4" />
              </video>
            </div>
            <div className="menu-options">
              <div onClick={handleClose} className="cancel-icon">
                <Button>
                  <CloseIcon />
                </Button>
              </div>
              <div className="menu-selector">
                <Link to="/" className="underline" onClick={handleClose}>
                  Home
                </Link>
                <Link to="/about" className="underline" onClick={handleClose}>
                  About
                </Link>
                <Link to="menus" className="underline" onClick={handleClose}>
                  Menus
                </Link>
                <Link
                  to="hours&location"
                  className="underline"
                  onClick={handleClose}
                >
                  Hours & Location
                </Link>
                <Link
                  to="reservations"
                  className="underline reservation"
                  onClick={handleClose}
                >
                  Reservations
                </Link>
              </div>
              <div className="social-media">
                <a href="tel:+351 932 520 144">
                  <LocalPhoneIcon
                    className="social"
                    fontSize="large"
                    style={{ fill: "white" }}
                  />
                </a>
                <a
                  href="https://www.instagram.com/iguariasdavila/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramIcon
                    className="social"
                    fontSize="large"
                    style={{ fill: "white" }}
                  />
                </a>
                <a
                  href="https://www.facebook.com/IguariasDaVila/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FacebookIcon
                    className="social"
                    fontSize="large"
                    style={{ fill: "white" }}
                  />
                </a>
                <a
                  href="https://www.tripadvisor.pt/Restaurant_Review-g1903584-d18589601-Reviews-Iguarias_da_Vila-Fuseta_Olhao_Faro_District_Algarve.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={tripadvisor} alt="logo" className="social" />
                </a>
              </div>
              <div className="address">
                <a
                  href="https://www.google.com/maps/place/Iguarias+da+Vila/@37.0554067,-7.7488342,17z/data=!3m1!4b1!4m5!3m4!1s0xd10013b15ecc349:0xbaa24384b014ab85!8m2!3d37.0554329!4d-7.7465802"
                  target="_blank"
                  rel="noreferrer"
                >
                  Iguarias da Vila
                  <br />
                  Praça da República 5
                  <br />
                  8700-035
                  <br />
                  Fuseta
                  <br />
                  Portugal
                </a>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Menu;
