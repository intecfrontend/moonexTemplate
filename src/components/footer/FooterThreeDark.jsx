import React from "react";
import FooterList from "../list/FooterList";

const FooterThreeDark = () => {
  return (
    <div className="row">
      <div className="col-12 col-lg">
        {/* <!--Animated Block--> */}
        <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
          <a href="index.html">
            <img src="assets/img/root/logo-white.png" alt="" loading="lazy" />
          </a>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12 col-lg">
        {/* <!--Animated Block--> */}
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="100"
        >
          <div className="ptf-widget ptf-widget-links has-white-color">
            <FooterList />
          </div>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12 col-lg">
        {/* <!--Animated Block--> */}
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="200"
        >
          <div className="ptf-widget ptf-widget-text">
            <a className="fz-36 has-white-color" href="mailto:B.Lantsoght@gmail.com">
              B.Lantsoght@gmail.com
            </a>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "0.625rem" }}
            ></div>
            <p className="fz-18 has-3-color">
              Soldatenstr. 63, BE1082 Sint Agatha Berchem, Brussel
            </p>
          </div>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default FooterThreeDark;
