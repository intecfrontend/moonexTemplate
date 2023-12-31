import React from "react";

const myStudies = [
  {
    date: "finished June 1989",
    img: "logo-2",
    delayAnimation: "0",
    studieList: [
      {
        title: "St Luc Tournai (FR)",
        subTitle: "3years: Bachelor with distinction",
      },
    ],
  },
  {
    date: "finished June 2018",
    img: "logo-4",
    delayAnimation: "100",
    studieList: [
      {
        title: "Syntra Web Development HTML/PHP (NL)",
        subTitle: "1year: Full Time",
      },
      {
        title: "Self Study Web Development (EN)",
        subTitle: "Ongoing: Youtube - Udemy",
      },
    ],
  },
];


const Jobs = [
  {
    date: "finished June 1989",
    img: "logo-4",
    delayAnimation: "0",
    studieList: [
      {
        title: "St Luc Tournai (FR)",
        subTitle: "3years: Bachelor with distinction",
      },
    ],
  },
  {
    date: "finished June 2018",
    img: "logo-2",
    delayAnimation: "100",
    studieList: [
      {
        title: "Syntra Web Development HTML/PHP (NL)",
        subTitle: "1year: Full Time",
      },
      {
        title: "Self Study Web Development (EN)",
        subTitle: "Ongoing: Youtube - Udemy",
      },
    ],
  },
];

const Award = () => {
  return (
    <ul
      className="ptf-rewards-list ptf-rewards-list--small"
      style={{
        "--ptf-border-width": "2px",
        "--ptf-border-color": "var(--ptf-color-black)",
      }}
    >
      {myStudies.map((val, i) => (
        <li
          className="ptf-rewards-item"
          data-aos="fade"
          data-aos-delay={val.delayAnimation}
          key={i}
        >
          <div className="ptf-rewards-item__date">{val.date}</div>
          <div className="ptf-rewards-item__logo">
            <img
              src={`assets/img/root/rewards/${val.img}.png`}
              alt="brand"
              loading="lazy"
            />
          </div>
          {/* End .ptf-rewards-item__logo */}

          <div className="ptf-rewards-item__content">
            {val.studieList.map((list, i) => (
              <div className="ptf-rewards-project" key={i}>
                <div className="ptf-rewards-project__content">
                  <h5>
                    <a href="#">{list.title}</a>
                  </h5>
                  <span>{list.subTitle}</span>
                </div>
                <div className="ptf-rewards-project__link">
                  {/* <a
                    className="ptf-link-with-arrow text-uppercase fz-14"
                    href="#"
                  >
                    See project
                  </a> */}
                </div>
              </div>
            ))}
            {/* End .ptf-rewards-project */}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Award;
