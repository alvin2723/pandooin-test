import React from "react";
import SocialIcon from "./social-icon";

const Footer = () => {
  return (
    <footer id="footer" className="w-full bg-dark-green py-6">
      <div className="container w-full max-w-7xl relative flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-4 lg:gap-0">
        <p className="text-white text-base">
          © 2023 Zamrood by PT Teknologi Pandu Wisata
        </p>
        <ul className="list-none flex items-center justify-center gap-6">
          <SocialIcon
            socialIcon="facebook"
            linkIcon="https://web.facebook.com/profile.php?id=100094528566390"
          />
          <SocialIcon
            socialIcon="instagram"
            linkIcon="https://www.instagram.com/zamrood.asia/"
          />
          <SocialIcon
            socialIcon="email"
            linkIcon="mailto:zamrood@pandooin.com"
          />
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
