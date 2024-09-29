import React from "react";
import "./Header.css";
import AboutPage from "./About-Page/About-Page";

function Header() {
  return (
    <header>
      <div className="header">
        <h1 className="hello">HELLO</h1>
      </div>
      <AboutPage />
    </header>
  );
}

export default Header;
