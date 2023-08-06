import React from "react";
import { Link } from "react-router-dom";
import map from "../../assets/img/pfimages/map.png";
import "../../App.css"


const footerItems = [
  {
    itemName: <img src={map} alt="" />,
    link: "https://www.google.com/maps/place/Rue+des+Soldats+63,+1082+Berchem-Sainte-Agathe/@50.8619391,4.2957623,18.22z/data=!4m6!3m5!1s0x47c3c14514b03857:0xf10ce296a7aac747!8m2!3d50.861765!4d4.2963397!16s%2Fg%2F11hbtgq6_r?entry=ttu"
  },
];

const FooterList = () => {
  return (
    <div className="mapimgcontainer">
      <ul className="mapimg">
        {footerItems.map((item, i) => (
          <li key={i}>
            <Link to={item.link} target="_blank">{item.itemName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterList;
