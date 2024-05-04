import React, { useEffect, useState } from "react";
import Typewriter from 'typewriter-effect';
import Helmet from "../components/Helmet/Helmet.jsx";
import { Container, Row, Col, Progress } from "reactstrap";
import { IoSchoolSharp } from "react-icons/io5";
import { FaSchool } from "react-icons/fa";
import "../styles/hero-section.css";

import { Link } from "react-router-dom";

import "../styles/home.css";
import homehero from '../assets/pavanp.png'

import whyImg from "../assets/Delivery Service for free.jpg";
import Work from "./Work.jsx";
import Skills from "./Skills.jsx";
import Contact from "./Contact.jsx";
import { Button } from 'reactstrap';
import { MdDownload } from "react-icons/md";
import resume from '../assets/PavanResume.pdf(2).pdf';
import reacticon from '../assets/Icon/React.svg';
import nextjs from '../assets/Icon/Next.svg';
import nodejsicon from '../assets/Icon/Node.svg'
import Aos from "aos";

const Home = () => {
  const [currentComponent, setCurrentComponent] = useState(1);

  const showComponent = (componentNumber) => {
    setCurrentComponent(componentNumber);
  };
  const openLinkedInProfile = () => {
    window.open("https://www.linkedin.com/in/pavan-nayak-0528b0233", "_blank");
  };
  const openGithub = () => {
    window.open("https://github.com/Nayakpawan", "_blank");
  }
  const openYoutube = () => {
    window.open("https://www.youtube.com/@Code-with-react", "_blank");
  }
  useEffect(() => {
    Aos.init();
  })
  return (
    <Helmet title="Home">
      <section id="home">
        <Container>
          <Row>
            <Col lg="6" md="6" data-aos="zoom-in" data-aos-delay="400">
              <div className="hero__content">
                <h5 className="mb-3">Hi, I'm </h5>
                <div className="mb-4 hero__title">
                  <h1>Pavan Kumar Nayak</h1>
                  <Typewriter
                    wrapperClassName="typewriter-wrapper"
                    options={{
                      strings: [
                        'MERN Stack Web Developer',
                        'Website Developer',
                        'Front-End web  Developer',
                        'Full Stack Developer',
                        'Back-End Developer'
                      ],
                      autoStart: true,
                      loop: true,

                    }}
                  />
                </div>

                <p>
                  Welcome to my portfolio! I'm a MERN stack developer passionate
                  about creating dynamic and user-friendly web applications.

                </p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    Hire Me <i class="ri-arrow-right-s-line"></i>
                  </button>

                  <button className="all-btn">
                    <a href={resume} download>Download CV <MdDownload /></a>
                  </button>
                </div>
                <Col lg="6" md="6">
                  <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                    <div className="social__links d-flex align-items-center gap-4 justify-content-end">
                      <p className="m-0">Follow: </p>
                      <span>
                        {" "}
                        <Link to='/'>
                          <i class="ri-facebook-line"></i>
                        </Link>{" "}
                      </span>

                      <span>
                        <Link to="" onClick={openGithub}>
                          <i class="ri-github-line"></i>
                        </Link>
                      </span>

                      <span>
                        {" "}
                        <Link to="" onClick={openYoutube}>
                          <i class="ri-youtube-line"></i>
                        </Link>{" "}
                      </span>

                      <span>
                        {" "}
                        <Link onClick={openLinkedInProfile} to=''>
                          <i class="ri-linkedin-line"></i>
                        </Link>{" "}
                      </span>
                    </div>


                  </div>
                </Col>
              </div>
            </Col>

            <Col lg="6" md="6" className="mt-5 px-4">
              <div className="hero__img">
                <img src={homehero} alt="hero-img" className="w-75 front-img" />
                <div class="elem elem-1" data-aos="zoom-in-right" data-aos-delay="800">
                  <p class="elem-title mt-3">
                    <img src={reacticon} alt="" srcset="" className="elem-img" />
                  </p>
                  <p class="elem-text mt-3">React Devloper</p>
                </div>
                <div class="elem elem-2" data-aos="fade-left" data-aos-delay="900">
                  <p class="elem-title mt-3">
                    <img src={nodejsicon} alt="" srcset="" className="elem-img" />
                  </p>
                  <p class="elem-text mt-3">Node Js Devloper</p>
                </div>
                <div class="elem elem-4" data-aos="fade-left" data-aos-delay="600">
                  <p class="elem-title mt-3">
                    <img src={nextjs} alt="" srcset="" className="elem-img" />
                  </p>
                  <p class="elem-text mt-3">Next Js  Developer</p>
                </div>
              </div>

            </Col>
          </Row>
        </Container>
      </section>


      <div className="text-center mt-5 about-section" id="about" data-aos="zoom-in" data-aos-delay="200">
        <h5 className='text-primary'>About Us</h5>
        <h2>Get in More About Me.</h2>
      </div>
      <section className="why__choose-us">

        <Container>
          <Row>
            <Col lg="6" md="6" data-aos="flip-left" data-aos-delay="600">
              <img src={whyImg} alt="why-tasty-treat" className="w-100" />
            </Col>

            <Col lg="6" md="6">
              <div className="why__tasty-treat" data-aos="fade-left" data-aos-delay="400"
              >
                <h2 className="tasty__treat-title mb-4">
                  6 Month's Experience On React<span> Development.</span>
                </h2>
                <Button onClick={() => showComponent(1)} color="primary">About Me</Button>
                <Button onClick={() => showComponent(2)} color="info" className='ms-3'>Main Skills</Button>
                <Button onClick={() => showComponent(3)} color="success" className='ms-3'>Educations</Button>

                {currentComponent === 1 && <div className="mt-3" data-aos="zoom-in-right" data-aos-delay="400">
                  <h6><i class="ri-checkbox-circle-line"></i> Hello! I'm Pavan Kumar Nayak, a passionate MERN stack developer.</h6>
                  <div className="ms-4 text-secondary"><span>Introduction</span></div>
                  <div className="">

                    <h6>
                      <i class="ri-checkbox-circle-line"></i> I have 6 months of hands-on experience in building web applications</h6> <h6 className="ms-4">using the MERN stack.</h6>
                    <div className="ms-4 text-secondary"><span>Experience</span></div>
                    <div>
                      <h6><i class="ri-checkbox-circle-line"></i> Developed several web applications, including a Logixhunt Clone app, a</h6><h6 className="ms-4">weather app, and a Online-education.</h6></div>
                    <div className="ms-4 text-secondary"><span>Project's</span></div>
                    <div>
                      <h6><i class="ri-checkbox-circle-line"></i> Continuously learning and exploring new technologies to enhance my</h6><h6 className="ms-4">skills.</h6></div>
                    <div className="ms-4 text-secondary"><span>Future Enhacement</span></div>

                  </div>
                </div>
                }
                {currentComponent === 2 && <div className="mt-3" data-aos="zoom-in" data-aos-delay="200">
                  <div className="div"><h6>Mongo DB</h6><h6>50%</h6><Progress
                    animated
                    color="primary"
                    striped
                    value={70}
                  />
                  </div>
                  <div className="div"><h6>Express JS</h6><h6>50%</h6><Progress
                    animated
                    color="primary"
                    striped
                    value={70}
                  /></div>
                  <div className="div"><h6>React JS</h6><h6>70%</h6>
                    <Progress
                      animated
                      color="primary"
                      striped
                      value={70}
                    /></div>
                  <div className="div"><h6>Next JS</h6><h6>20%</h6><Progress
                    animated
                    color="primary"
                    striped
                    value={70}
                  /></div>

                </div>

                }
                {currentComponent === 3 && <div>
                  <Row className="mt-3" data-aos="zoom-in" data-aos-delay="200">
                    <Col md='6' lg='6'>
                      <h3><IoSchoolSharp className="mb-2" /> College</h3>
                      <div className="">
                        <h6><i class="ri-checkbox-circle-line"></i>  Master of Computer Applications.</h6>
                        <h6><i class="ri-checkbox-circle-line"></i>  Pt. Ravishankar Shukla University</h6>
                        <h6><i class="ri-checkbox-circle-line"></i>  Complete Year 2023-2024</h6>
                        <h6><i class="ri-checkbox-circle-line"></i>  Average Percentage - 80%</h6>
                      </div>
                    </Col>
                    <Col md='6' lg='6'>
                      <div className="">
                        <h3><FaSchool className="mb-2" /> School</h3>
                        <div className="">
                          <h6><i class="ri-checkbox-circle-line"></i>  12th Grade (CGBSE) - 2021</h6>
                          <h6><i class="ri-checkbox-circle-line"></i>  Gov. Boys School Patan <span className="ms-4">Chhattisgarh</span></h6>
                          <h6><i class="ri-checkbox-circle-line"></i>  Stream : Mathematics</h6>
                          <h6><i class="ri-checkbox-circle-line"></i>  Percentage - 56%</h6>
                        </div>
                      </div>
                    </Col>

                  </Row>

                </div>}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Work />

      <Skills />
      <Contact />
    </Helmet>
  );
};

export default Home;
