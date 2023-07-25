import React from "react";

const socialList = [
  {
    iconName: "socicon-linkedin",
    link: "https://www.linkedin.com/in/benedikt-lantsoght-02481319/",
  },
  {
    iconName: "socicon-facebook",
    link: "https://www.facebook.com/profile.php?id=100083391497318",
  },



];

const SocialTwo = () => {
  return (
    <>
      {socialList.map((val, i) => (
        <a
          className="ptf-social-icon ptf-social-icon--style-1"
          target="_blank"
          rel="noopener noreferrer"
          href={val.link}
          key={i}
        >
          <i className={val.iconName}></i>
        </a>
      ))}
    </>
  );
};

export default SocialTwo;
