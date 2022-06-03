import React from "react";

const Footer = () => {
  // Определение текущего года
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className='footer'>
        <p className='footer__copyright'>&copy; {currentYear} Mesto Russia</p>
      </footer>
    </>
  );
};

export default Footer;
