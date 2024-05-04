import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import WorkPage from './WorkPage';
import logixhunt from '../assets/logixhunt.png';
import weather from '../assets/weather.png';
import myAssignment from '../assets/pavan-assignment.png';
import onlineeducation from '../assets/Code-with-React.png';
const Work = () => {
  const projectData = [
    {
      title: 'Logixhunt Clone',
      content: [
        'LogixHunt is software development. and Im Buld this website using MERN Stack and some changes API to get the data.',
        'Using React, Node js , Express js and Im Using Backend to Store MongoDb Database. that website Clone of logixhunt Company',
      ],
      buttonText: 'Live Demo',
      buttonDetails: 'Github',
      Githublink:"",
      buttonOutline: false,
      imageSrc: logixhunt,
      link: "https://logixhunt.netlify.app/"
    },
    {
      title: 'Weather App',
      content: [
        "Stay ahead of the weather with My Weather App. Seamlessly designed to provide with up-to-date forecasts and show background video to weather condition,",
        " detailed weather information. Check Now!"

      ],
      buttonText: 'Live Demo',
      buttonDetails: 'Github',
      Githublink:"https://weather-app-react-chi-blush.vercel.app/",
      buttonOutline: false,
      imageSrc: weather,
      link: "https://weather-app-react-chi-blush.vercel.app/"
    },
    {
      title: 'My Assignment',
      content: [
        'Online course purchases are simplified with React component reusability. The virtual DOM ensures swift updates to course listings, while React s ecosystem streamlines state management.',
        'Building user-friendly interfaces for selecting and purchasing courses.'
      ],
      buttonText: 'Live Demo',
      buttonDetails: 'Github',
      Githublink:"https://github.com/Nayakpawan/Assinment",
      buttonOutline: false,
      imageSrc: myAssignment,
      link: "https://pavan-assinment.vercel.app/"
    },
    {
      title: 'Online-education',
      content: [
        "Online education has revolutionized the way we learn, offering flexibility and accessibility to a diverse range of learners.",
        "With React, building online education platforms becomes not just efficient but also engaging."
        

      ],
      buttonText: 'Live Demo',
      buttonDetails: 'Github',
      Githublink:"https://github.com/Code-with-react/Online-Education",
      buttonOutline: false,
      imageSrc: onlineeducation,
      link: "https://online-education-mu.vercel.app/"
    },
  ];
  return (
    <section className="pt-0" id='work'>
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5" data-aos="zoom-in" data-aos-delay="200">
            <h5 className='text-primary'>Works</h5>
            <h2>My Creative Works</h2>
          </Col>
        </Row>
        <Row>

          {projectData.map((project, index) => (
            <Col md={4} sm={6} lg={6} data-aos="fade-up"
     data-aos-duration="2000">
              <WorkPage key={index} {...project} />
            </Col>
          ))}



        </Row>
      </Container>
    </section>
  )
}

export default Work