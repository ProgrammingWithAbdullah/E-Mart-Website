import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";

export default function Footer() {
  const latestyear = new Date();
  let currentYear = latestyear.getFullYear();

  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p className="logoname">E Mart</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-copyright">
        <hr />
        Designed By: Abdullah Amer
      </div>
    </div>
  );
}
