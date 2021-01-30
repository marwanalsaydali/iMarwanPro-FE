import React from "react";
import { Link } from "gatsby";

const Nav = () => {
  return (
    <nav>
      <div>
        <Link to="/">Logo</Link>
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/gears">Gears</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Nav;
