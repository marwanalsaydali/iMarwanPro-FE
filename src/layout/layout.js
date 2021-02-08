import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
const Layout = ({ children }) => {
  return (
    <div className="app">
      <Nav />
      <main className="container mx-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
