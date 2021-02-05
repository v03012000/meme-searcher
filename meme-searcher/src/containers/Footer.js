
import React from "react";

function Footer() {
    const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footer-contents">
      <p>Copyright ⓒ {year}</p>
      </div>
    </div>
  );
}

export default Footer;