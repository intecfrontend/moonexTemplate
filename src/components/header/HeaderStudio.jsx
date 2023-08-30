import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "../form/Search";
import DropdownMenu from "./menu/DropdownMenu";
import MobileMenu from "./menu/MobileMenu";
import EN from "../../assets/img/languageicon/ENred.png";
import "../../App.css"
import Modal from "./Modal";
import "./App1.css";


const HeaderStudio = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [click1, setClick1] = useState(false);
  const handleClick1 = () => setClick1(!click1);

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  // New state variable to handle modal visibility
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Function to show the modal
  const handleShowModal = () => {
    setIsModalVisible(true);
  };

  // Function to hide the modal
  const handleHideModal = () => {
    setIsModalVisible(false);
  };
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <header className="ptf-header ptf-header--style-2 ptf-header--opaque">
        <div
          className={
            navbar
              ? "ptf-navbar ptf-navbar--main ptf-navbar--sticky ptf-navbar--fixed "
              : "ptf-navbar ptf-navbar--main ptf-navbar--sticky"
          }
        >
          <div className="container-xxl">
            <div className="ptf-navbar-inner">
              {/* <!--Logo--> */}
              <Link className="ptf-navbar-logo" to="/">
                <img
                  className="black"
                  src="assets/img/root/logo-dark.png"
                  alt=""
                  loading="lazy"
                />
                <img
                  className="white"
                  src="assets/img/root/logo-white.png"
                  alt=""
                  loading="lazy"
                />
              </Link>
              {/* <!--Navigation--> */}
              <nav className="ptf-nav ptf-nav--default">
                {/* <!--Menu--> */}
                <DropdownMenu />
              </nav>
              {/* <!--Buttons--> */}

              {/* <!--Navbar Search--> */}
              <div
                className={
                  click ? "ptf-navbar-search is-open" : "ptf-navbar-search"
                }
              >
                <div
                  className="ptf-navbar-search__toggle"
                >
                  {modalOpen && <Modal setOpenModal={setModalOpen} />}

                  <img onMouseEnter={() => {
                    setModalOpen(true);
                  }} src={EN} alt="enicon" className="bol" />
                  <i className="lnir lnir-close"></i>
                </div>
              </div>
              {/* <!--Offcanvas Menu Toggle--> */}
              <div
                className="ptf-offcanvas-menu-icon js-offcanvas-menu-toggle bar right"
                onClick={handleClick1}
              >
                <i className="lnir lnir-menu"></i>
              </div>
              {/* Toggle bar icon */}
            </div>
          </div>
        </div>
      </header>
      {/* End header */}

      <div
        className={
          click1 ? "ptf-offcanvas-menu is-open" : "ptf-offcanvas-menu "
        }
      >
        <div className="ptf-offcanvas-menu__header">
          <div className="ptf-language-switcher">
            <a className="is-active" href="#">
              Eng
            </a>
            <a href="#">Fra</a>
            <a href="#">Ger</a>
          </div>
          <span
            className="ptf-offcanvas-menu-icon js-offcanvas-menu-toggle"
            onClick={handleClick1}
          >
            <i className="lnir lnir-close"></i>
          </span>
        </div>
        {/* End .ptf-offcanvas-menu__header */}

        <MobileMenu />
      </div>
      {/* End sidebar menu */}

    </>
  );
};

export default HeaderStudio;
