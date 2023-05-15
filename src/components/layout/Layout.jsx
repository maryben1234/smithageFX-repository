import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <section>
        <Navbar />
        <div style={{ padding: "0 13px" }}>{children}</div>
        <Footer />
      </section>
    </>
  );
};

export default Layout;
