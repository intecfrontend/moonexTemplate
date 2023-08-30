import React from "react";
import { Link } from "react-router-dom";

const menuContent = [
  {
    name: "Home",
    activeClass: "sf-with-ul",
    menuClass: "",

  },
  {
    name: "Portfolio",
    activeClass: "",
    menuClass: "",
    
  },
  {
    name: "Education",
    activeClass: "",
    menuClass: "",

  },
  {
    name: "References",
    activeClass: "",
    menuClass: "",
    
  },  {
    name: "Contact",
    activeClass: "",
    menuClass: "",
    
  },
];

const DropdownMenu = () => {
  return (
    <ul className="sf-menu">
      {menuContent.map((item, i) => (
        <li className={`menu-item-has-children ${item.menuClass}`} key={i}>
          <a href="#" className={item.activeClass}>
          <span>{item.name}</span>
          </a>


        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;
