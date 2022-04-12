import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="text-center mt-5">
      <p>
        {/*  <small> &copy;copyright &#64;{new Date().getFullYear()}</small> */}
        <small> &copy;copyright &#64;{year}</small>
      </p>
    </footer>
  );
};

export default Footer;
