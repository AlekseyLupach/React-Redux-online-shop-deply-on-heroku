import React from "react";
import { Link } from "react-router-dom";

import logoVisa from "../img/footer/logo-visa.png";
import logoApplePay from "../img/footer/logo-apple-pay.png";
import logoGooglePay from "../img/footer/logo-google-pay.png";
import logoMasterCard from "../img/footer/logo-mastercard.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper container">
        <h3 className="header__logo footer__logo">
          <Link to="/">
            A-Store |<i className="fa fa-apple" aria-hidden="true"></i>
          </Link>
        </h3>
        <p>© A-Store, 2021 | All rights reserved.</p>
        <img src={logoMasterCard} alt="master-card" />
        <img src={logoVisa} alt="visa" />
        <img src={logoGooglePay} alt="google-pay" />
        <img src={logoApplePay} alt="apple-pay" />
      </div>
    </footer>
  );
}

export default Footer;
