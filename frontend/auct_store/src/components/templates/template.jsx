import React from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

const Template = (props) => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        {props.children}
      </main>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Template;
