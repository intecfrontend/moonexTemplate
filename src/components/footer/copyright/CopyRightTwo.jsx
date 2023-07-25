import React from "react";
import SocialTwo from "../../social/SocialTwo";

const logo = "assets/img/root/logo-white.png";

const CopyRightTwo = () => {
  return (
    <div className="row align-items-center">
      <div className="col-12 col-md-3">
        <a href="index.html">
          <img src={logo} alt="" loading="lazy" />
        </a>
      </div>
      {/* End .col */}

      <div className="col-12 col-md-5">
        <p className="ptf-footer-copyright has-3-color">
          {/* ©{new Date().getFullYear()}{" "} */}
          <span className="has-white-color">
            tel: 0032 (0)499 388 227<br />Benedikt Lantsoght            <br />B.Lantsoght@gmail.com
          </span>
        </p>
      </div>
      {/* End .col */}

      <div className="col-12 col-lg">
        <div className="ptf-footer-socials has-white-color">
          <SocialTwo />
          {/* <!--Social Icon--> */}
        </div>
      </div>
      {/* End .col */}
    </div >
  );
};

export default CopyRightTwo;
