import React from "react";

const FooterLink = ({ href, text }) => {
  return (
    <li className="footer__list-item">
      <a href={href} className="footer__list-link">
        {text}
      </a>
    </li>
  );
};

export default FooterLink;
