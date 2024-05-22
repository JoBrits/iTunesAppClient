import React from "react";
import { Link } from "react-router-dom";

// Images
import ItunesLogoImg from "../../images/ITunes_logo.png";

// Styles
import { Wrapper, Content, ReactLogo, ReactItunes } from "./Header.styles";

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <ReactLogo src={ItunesLogoImg} alt="iTunes Logo" />
        <ReactItunes> 
          <Link to="/">React Itunes Search APP</Link>
          <Link to="/favorites">My Favorites</Link>
        </ReactItunes>
      </Content>
    </Wrapper>
  );
};

export default Header;
