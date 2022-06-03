import React from "react";
import headerLogoPath from "../images/header-logo.svg";

const Header = () => {
  return (
    <>
      <header className='header'>
        <img
          className='header__logo'
          src={headerLogoPath}
          alt='Логотип Mesto'
        />
      </header>
    </>
  );
};

export default Header;
