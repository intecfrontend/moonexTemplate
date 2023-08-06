import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const StyledDiv = styled.div`
text-transform: none;
margin-bottom: 5vh;
margin-top: 5vh;
`;
const blogContent = [
  {
    img: "post-1",
    cat: "Linkedin",
    date: "1989 - present",
    title: "Over 1000 references",
    description: `
    Each contact I've made carries a story, and through my connection with each one of them, you'll discover a significant part of me that sets it apart from the rest. Plenty of people to chose from ... the choice is yours!`,
    link: "https://www.linkedin.com/in/benedikt-lantsoght-02481319/",
  },
  {
    img: "post-2",
    cat: "Inspiration",
    date: "2009 - 2011",
    title: "Complete Marketing for Volvo World Golf Championship",
    description: `Among many contacts, I chose Volvo. For the years they organised the Volvo World Match Play Championship, I had the responsability to sort out and realise the Marketing of the event. It reflects who I am. Get to know me to understand why.`,
    link: "https://www.fincacortesin.com/de/volvo-world-match-play",
  },
  {
    img: "post-3",
    cat: "Student Letters",
    date: "June, 2023",
    title: "One of many...",
    description: `As a teacher, I had the privilege of guiding and supporting numerous students on their journey to becoming developers. One of these talented individuals was Nina Wolfs, whose determination and hard work stood out. After helping her secure a job, I was pleasantly surprised when she showed her gratitude by gifting me a box of chocolates. It was a heartwarming gesture that reminded me why I love being an educator - witnessing the success and appreciation of my students. Nina's success story and her thoughtful gift serve as cherished reminders of the meaningful connections we create through teaching and mentorship.`,
    link: "https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAABgAEz4BDSR2fN_qvyKkYT3DeVE1TiMXS_g&keywords=nina%20wolfs&origin=RICH_QUERY_SUGGESTION&position=0&searchId=babe0b3a-4f8b-4153-ae95-31ed19022ec8&sid=*)r"
  },
];

const Blog = () => {
  return (
    <>
      {blogContent.map((val, i) => (
        <div className="col-xl-4 col-lg-4" key={i}>
          <div className="grid-item filter-1 filter-4">
            {/* <!--Blog Post--> */}
            <article className="ptf-post ptf-post--style-4">
              <div className="ptf-post__media">
                <img
                  src={`assets/img/home/default/${val.img}.png`}
                  alt=""
                  loading="lazy"
                />
                <div className="ptf-post__media__content">
                  <header className="ptf-post__header">
                    <div className="ptf-post__meta">
                      <span className="cat">{val.cat}</span>
                      <span className="date">{val.date}</span>
                    </div>
                    <h3 className="ptf-post__title">{val.title}</h3>
                  </header>
                </div>
              </div>
              <div className="ptf-post__content">
                <header className="ptf-post__header">
                  <div className="ptf-post__meta">
                    <span className="cat">{val.cat}</span>
                    <span className="date">{val.date}</span>
                  </div>
                  <h3 className="ptf-post__title">
                    <Link to={val.link} >{val.title}</Link>
                  </h3>
                </header>

                <div className="ptf-post__excerpt">

                </div>

                <footer className="ptf-post__footer">
                  <Link to={val.link} className="ptf-read-more-link" >
                  <StyledDiv  id="sentence">{val.description}</StyledDiv>

                    Continue
                  </Link>
                </footer>
              </div>
            </article>
          </div>
        </div>
      ))}
    </>
  );
};

export default Blog;
