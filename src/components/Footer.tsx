import React from "react";
import logo from "../media/logo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
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
        <br />
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
        </div>
        <br />
      </div>
      <div className="footer-rights">
        ® 2021 Iguarias da Vila. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
