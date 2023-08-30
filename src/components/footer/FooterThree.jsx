import React from "react";
import FooterList from "../list/FooterList";

const FooterThree = () => {
  return (
    <div className="row myrow">
      <div className="col-12 col-lg">
        {/* <!--Animated Block--> */}
        <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
          <a href="index.html">
          </a>
        </div>
      </div>
      {/* End .col */}

      <div className="mapimgwrap col-12 col-lg">
        {/* <!--Animated Block--> */}
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="100"
        >
          <div className="ptf-widget ptf-widget-links has-black-color">
            <FooterList />
          </div>
        </div>
      </div>
      {/* End .col */}

      <div className="addresscont col-12 col-lg">
        {/* <!--Animated Block--> */}
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="200"
        >
          <div className="ptf-widget ptf-widget-text">
            <a className="ptf-filled-link fz-36 has-black-color" href="mailto:B.Lantsoght@gmail.com ">
              Benedikt Lantsoght
            </a>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "0.625rem" }}
            ></div>
            <p className="fz-18">Soldatenstr. 63,<br/> BE1082 Sint Agatha Berchem, Brussel </p>     
            <div className="fz-36 has-black-color ptf-filled-link">
            tel: 0499 388 227
            </div>      
          </div> 
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default FooterThree;
