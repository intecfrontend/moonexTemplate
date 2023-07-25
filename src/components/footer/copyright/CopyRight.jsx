import React from "react";
import SocialTwo from "../../social/SocialTwo";

const logo = "assets/img/root/logo-dark.png";

const CopyRight = () => {
  return (
    <div className="row align-items-center justify-content-center">
      <div className="col-12 col-md">
        <a href="index.html">
          <img src={logo} alt="" loading="lazy" />
        </a>
      </div>
      <div className="col-12 col-md text-md-center text-lg-center">
        <p className="ptf-footer-copyright has-black-color">
          {/* {/* ©{new Date().getFullYear()}{" "} */} */}
          <span>

            tel: 0032 (0)499 388 227<br />Benedikt Lantsoght            <br />B.Lantsoght@gmail.com
          </span>
        </p>
      </div>
      <div className="col-12 col-lg text-md-center text-lg-end">
        <div className="ptf-footer-socials is-right has-black-color ">
          <SocialTwo />
        </div>
      </div>
    </div >
  );
};

export default CopyRight;
