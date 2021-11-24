import React from "react";
import logo from "../media/logo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import tripadvisor from "../media/Orion_tripadvisor.svg";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="logo" />
        </div>
        <br />
        <div className="footer-directions">
          <p>Praça da Republica 5</p>
          <p>8700-035</p>
          <p>Fuzeta</p>
        </div>
        <div className="footer-social">
          <a href="tel:+351 932 520 144">
            <LocalPhoneIcon fontSize="large" style={{ fill: "white" }} />
          </a>
          <a
            href="https://www.instagram.com/iguariasdavila/"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon fontSize="large" style={{ fill: "white" }} />
          </a>
          <a
            href="https://www.facebook.com/IguariasDaVila/"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon fontSize="large" style={{ fill: "white" }} />
          </a>
          <a
            href="https://www.tripadvisor.pt/Restaurant_Review-g1903584-d18589601-Reviews-Iguarias_da_Vila-Fuseta_Olhao_Faro_District_Algarve.html"
            target="_blank"
            rel="noreferrer"
          >
            <img src={tripadvisor} alt="logo" className="icon-fix" />
          </a>
        </div>

        <div className="footer-reservation-button">MAKE A RESERVATION</div>
      </div>
      <div className="footer-rights">
        ® 2021 Iguarias da Vila. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
