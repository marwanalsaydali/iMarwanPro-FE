import React from "react";
import MediaLinks from "./medialinks";
const Footer = () => {
  return (
    <footer className="footer">
      <MediaLinks />
      <p className="text-xs">&copy; iMarwanPro {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
