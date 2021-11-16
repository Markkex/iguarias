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
                <source src={video} type="video/mp4"></source>
              </video>
            </div>
            <div className="menu-options">
              <div onClick={handleClose} className="cancel-icon">
                <Button>
                  <CloseIcon />
                </Button>
              </div>
              <div className="menu-selector">
                <Link to="/about" className="underline">
                  About
                </Link>
                <Link to="menus" className="underline">
                  Menus
                </Link>
                <Link to="hours&location" className="underline">
                  Hours & Location
                </Link>
                <Link to="reservations" className="underline reservation">
                  Reservations
                </Link>
              </div>
              <div className="social-media">
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
                <a href="tel:+351 932 520 144">
                  <LocalPhoneIcon
                    className="social"
                    style={{ fill: "white" }}
                  />
                </a>
              </div>
              <div className="address">
                <a href="https://www.google.com/maps/dir//iguarias+da+vila/@37.0548381,-7.7482457,17.5z/data=!4m8!4m7!1m0!1m5!1m1!1s0xd10013b15ecc349:0xbaa24384b014ab85!2m2!1d-7.7465802!2d37.0554329">
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
