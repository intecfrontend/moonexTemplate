import React from "react";
import SocialTwo from "../../social/SocialTwo";

const CopyRightThree = () => {
  return (
    <div className="row align-items-center">
      <div className="addresscont2  col-12 col-md">
        <p className="ptf-footer-copyright has-black-color">
          {/* ©{new Date().getFullYear()}{" "} */}
          <span >
            tel: 0032 (0)499 388 227<br />B.Lantsoght@gmail.com
          </span>
        </p>
      </div>
      {/* End .col */}

      <div className="col-12 col-md d-none d-xl-block"></div>
      {/* End .col */}

      <div className="col-12 col-lg">
        <div className="ptf-footer-socials is-right has-black-color">
          {/* <!--Social Icon--> */}
          <SocialTwo />
        </div>
      </div>
      {/* End .col */}
    </div >
  );
};

export default CopyRightThree;
