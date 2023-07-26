import React, { useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import HeaderStudio from "./components/header/HeaderStudio";
import ServiceList from "./components/list/ServiceList";
import myFoto from "./assets/img/myfoto2.png";
import PortfolioThree from "./components/portfolio/PortfolioThree";
import Award from "./components/award/Award";
import Blog from "./components/blog/Blog";
import FooterThree from "./components/footer/FooterThree";
import CopyRightThree from "./components/footer/copyright/CopyRightThree";
import ContactJarallax from "./components/jarallax/ContactJarallax";
import './styles.css'; // Import the stylesheet
import "aos/dist/aos.css"; // Import the AOS CSS styles
import AOS from "aos"; // Import the AOS library
import { gsap, Elastic } from 'gsap';
import cvImage from "./assets/img/cvbutton.png";
import styled, { keyframes } from 'styled-components';
import FallingImage from './falling.js'


const HomeStudio = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    gsap.from(button, {
      y: -1000, // Start the button outside the viewport
      duration: 1.5, // Duration of the falling animation
      ease: Elastic.easeOut.config(0.5, 0.1), // Use Elastic ease for spring effect
      delay: 0.75 // Optional delay before the animation starts
    });
  }, []);
  return (
    <div className="ptf-site-wrapper animsition ptf-is--home-studio">
      <Helmet>
        <title>Benedikt Lantsoght - Portfofio</title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderStudio />
      {/* End Header Agency */}

      <div className="ptf-site-wrapper__inner">
        <div className="ptf-main">
          <div className="ptf-page ptf-page--home-studio">
            {/*=============================================
            Start Service Section 
            ============================================== */}
            <section className="fullHeight digicontainer">
              {/* <!--Spacer--> */}




              <img className="myfoto" src={myFoto} alt="myfoto" />

              <h1 className="whitetext fz-120 fz-90--lg fz-60--md lh-1p1">
                Digitally Yours
              </h1>
              <div className="whitetextsmall fz-120 fz-90--lg fz-60--md lh-1p1">
                Normal on request
              </div>
              <FallingImage/>

            </section>

            {/*=============================================
            Start Service Section 
            ============================================== */}
            <section>
              <div className="container-xxl">
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "8.125rem", "--ptf-md": "4.0625rem" }}
                ></div>

                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="1000"
                >
                  <h2 className="h5 d-inline-flex">Latest Work</h2>
                  <Link
                    className="ptf-link-with-arrow fz-14 d-none d-lg-inline-flex"
                    to="/works-grid"
                    style={{ marginLeft: "3.125rem" }}
                  >
                    All Projects <i className="lnil lnil-chevron-right"></i>
                  </Link>
                </div>
                {/* End .ptf-animated-block */}

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "5.625rem", "--ptf-md": "2.8125rem" }}
                ></div>

                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <div data-aos="zoom-in-up"
                    className="ptf-isotope-grid row"
                    style={{
                      "--bs-gutter-x": "4.75rem",
                      "--bs-gutter-y": "4.75rem",
                    }}
                  >
                    <PortfolioThree />
                  </div>
                </div>
              </div>
            </section>

            {/*=============================================
            Start Award Section 
            ============================================== */}
            <section className="ptf-custom--1562">
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
              <div className="container-xxl">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h2 className="h5">Lantsoght’s Awards</h2>
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "5.625rem", "--ptf-md": "2.8125rem" }}
                ></div>
              </div>
              <div className="container-xxl">
                <Award />
              </div>
            </section>

            {/*=============================================
            Start Blog Section 
            ============================================== */}
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
              <div className="container-xxl">
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h2 className="h5 d-inline-flex">What they say about me.</h2>
                  <Link
                    className="ptf-link-with-arrow fz-14 d-none d-lg-inline-flex"
                    to="/blog-grid"
                    style={{ marginLeft: "3.125rem" }}
                  >
                    Yes, important <i className="lnil lnil-chevron-right"></i>
                  </Link>
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "5.625rem", "--ptf-md": "2.8125rem" }}
                ></div>
              </div>
              <div className="container-xxl">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <div
                    className="row ptf-isotope-grid"
                    style={{
                      "--bs-gutter-x": "4.75rem",
                      "--bs-gutter-y": "4.75rem",
                    }}
                  >
                    <Blog />
                  </div>
                </div>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>

            {/*=============================================
            Start Contact Section 
            ============================================== */}
            <section
              className="jarallax jarallax-img"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL +
                  "assets/img/class.jpeg"
                  })`,
              }}
            >
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": " 12.5rem", "--ptf-md": "6.25rem" }}
              ></div>
              <ContactJarallax />
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>
          </div>
          {/* End .ptf-page */}
        </div>
        {/* End .ptf-main */}
      </div>
      {/* End .ptf-site-wrapper__inner */}

      {/*=============================================
        Start Footer Section 
        ============================================== */}
      <footer className="ptf-footer ptf-footer--style-2">
        <div className="container-xxl">
          <div className="ptf-footer__top">
            <FooterThree />
          </div>
          {/* End .ptf-footer__top */}

          <div className="ptf-footer__bottom">
            <CopyRightThree />
          </div>
          {/* End .ptf-footer__bottom */}
        </div>
      </footer>
    </div>
  );
};

AOS.init(); // Initialize AOS


export default HomeStudio;
