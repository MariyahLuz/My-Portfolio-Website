import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "work.jpg" },
    { label: "Work History", logoSrc: "work.jpg" },
    { label: "Programming Skills", logoSrc: "work.jpg" },
    { label: "Projects", logoSrc: "work.jpg" },
    { label: "Interests", logoSrc: "work.jpg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
    { skill: "JavaScript", ratingPercentage: 60 },
    { skill: "React JS", ratingPercentage: 70 },
    { skill: "Python", ratingPercentage: 20},
    { skill: "Node JS", ratingPercentage: 50},

  ];

  const projectsDetails = [
    {
      title: "MpaMpe Crowdfunding Website",
      duration: { fromDate: "2021", toDate: "Present" },
      description:
        "A crowdfunding platform for raising funds digitaly. Link 'http://mpampe.com/' ",
      subHeading: "Technologies Used: NodeJs, Css, HTML.",
    },

    {
      title: "Desire Luzinda Foudation",
      duration: { fromDate: "2021", toDate: "Present" },
      description:
        "An NGO website.Link ' https://desireluzindafoundation.org/' ",
      subHeading:
        "Technologies Used: JavaScipt, Css, HTML.",
    },

    {
      title: "Mobile E-shop ",
      duration: { fromDate: "2020", toDate: "2022" },
      description:
        "An ecommerce mobile application designed to sell products online with payment system integration.",
      subHeading:
        "Technologies Used:  Ionic, HTML, CSS, JavaScript",
    },
    {
      title: "Caltec School Website",
      duration: { fromDate: "July 2020", toDate: "Aug 2021" },
      description:
        "A secondary School website",
      subHeading:
        "Technologies Used: ReactJS, TailWind Css, JavaScript.",
    },
    
    

    // {
    //   title: "Nakimuli Foudation",
    //   duration: { fromDate: "2021", toDate: "Present" },
    //   description:
    //     "An NGO website.Link 'https://nakimulifoundation.org/'",
    //   subHeading:
    //     "Technologies Used: JavaScipt, Css, HTML.",
    // },


  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Makerere Universty"}
        subHeading={"BACHELOR OF SCIENCE IN COMPUTER SCIENCE"}
        fromDate={"2019"}
        toDate={"2024"}
      />

      <ResumeHeading
        heading={"Caltec Academy Makerere"}
        subHeading={"O-Level and A-Level"}
        fromDate={"2012"}
        toDate={"2017"}
      />
      <ResumeHeading
        heading={"Primary "}
        subHeading={"Guiding Star Primary School"}
        fromDate={"2009"}
        toDate={"2011"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
      <ResumeHeading
          heading={"MpaMpe (Co-Founder & CEO)"}
          // subHeading={"Co-Founder & CEO"}
          fromDate={"2021"}
          toDate={"Present"}
        />
        <ResumeHeading
          heading={"Desire Luzinda Foundation (Head Of IT and Volunteer)"}
          // subHeading={"Head Of IT and Volunteer"}
          fromDate={"2021"}
          toDate={"Present"}
        />
        <ResumeHeading
          heading={"Stratcom Computer Solutions Limited (Intern)"}
          // subHeading={"Intern"}
          fromDate={"July 2021"}
          toDate={"Sept 2021"}
        />
        <ResumeHeading
          heading={"URA (Data Center Intern)"}
          // subHeading={"Data Center Intern"}
          fromDate={"July 2023"}
          toDate={"Aug 2023"}
        />
       
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Leadership & Entrepreneurship"
        description="In addition to my enthusiasm for technology, I'm passionate about leadership and entrepreneurship, seeking opportunities to develop and apply leadership skills in various contexts."
      />
      
      <ResumeHeading
        heading="Innovation and Creativity"
        description="I'm intrigued by creative problem-solving and innovative thinking, aiming to contribute fresh ideas and approaches to challenges."/>
    
      <ResumeHeading
        heading="Continuous Learning"
        description="Committed to continuous learning, consistently seeking opportunities to expand knowledge and skills in diverse areas." />
      
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something I can never compromise with." />
      
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
