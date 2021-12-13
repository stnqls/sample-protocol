import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="inner">
        <ul className="footer__lists">
          <li className="footer__lists__item">
            © LOA-PROTOCOL. ALL RIGHTS RESERVED.
          </li>
          <li className="footer__lists__logo">
            <img
              src="/images/footer_logo_pc.png"
              alt="footerLogo"
              className="footer__lists__logo__img"
            />
          </li>
          <ul className="footer__lists__p">
            <li className="footer__lists__p__l">CONTACT US</li>
            <li className="footer__lists__p__r">help : admin@loaprotocol.io</li>
          </ul>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
