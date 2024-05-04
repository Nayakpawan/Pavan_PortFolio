import React, { useState } from 'react';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';
// import img from '../assets/Icon/Node.svg';
import { Col, Row, Container } from 'reactstrap';
import BootstrapIcon from '../assets/Icon/BootstrapIcon.svg'
import MongoDB from '../assets/Icon/MongoDB.svg'
import ReactIcon from '../assets/Icon/React.svg'
import Node from '../assets/Icon/Node.svg'
import Express from '../assets/Icon/Express.svg'
import PHP from '../assets/Icon/PHP.svg'
import HTML from '../assets/Icon/HTML.svg'
import CSS from '../assets/Icon/CSS.svg'
import Tailwind from '../assets/Icon/Tailwind.svg'
import Next from '../assets/Icon/Next.svg'
import Javascript from '../assets/Icon/Javascript.svg'
import Adobe from '../assets/Icon/Adobe.svg'
const Skills = () => {
    const [open, setOpen] = useState(false);

    const toggle = (id) => {
        setOpen((prevState) => (prevState === id ? '' : id));
    };


    const accordionData = [
        {
            icon: ReactIcon,
            title: 'React JS',
            descr: 'I am good in React. I know almost all concept of React. Skill - 70%'
        },
        {
            icon: Next,
            title: 'Next JS',
            descr: 'After completing the React I will start learning Next JS Skill - 50%'
        },
        {
            icon: MongoDB,
            title: 'MongoDB',
            descr: 'Now, I am learning Mongo DB. Skill - 85%.'
        },
        {
            icon: Express,
            title: 'Express JS',
            descr: 'Now, I am learning and using Express JS with Node JS. Skill - 75%'
        },


        {
            icon: Node,
            title: 'Node JS',
            descr: 'Currently, I am learning and using Node JS. Skill - 75%'
        },
        {
            icon: HTML,
            title: 'HTML',
            descr: 'I hava deep understanding in HTML. Skills - 90%'
        },
        {
            icon: CSS,
            title: 'CSS',
            descr: 'I Good in CSS. And i design UI professionaly  Skills - 90%'
        },
        {
            icon: Javascript,
            title: 'Javascript',
            descr: 'I have deep understanding in Javascript and their core concepts with best Practices. Skill - 80% '
        },
        {
            icon: BootstrapIcon,
            title: 'Bootstrap',
            descr: 'I use Bootstrap for enhancing my productivity and reduce time. Skills - 85%'
        },
        {
            icon: Tailwind,
            title: 'Tailwind',
            descr: 'I use Tailwind CSS but little-bit. I am learning Tailwind CSS. Skills - 30%'
        },
        {
            icon: PHP,
            title: 'Php',
            descr: 'I have little-bit knowledge about PHP. but i maked one project(Library Management) in PHP. Skills - 40%'
        },
        {
            icon: Adobe,
            title: 'Video Editing',
            descr: 'I am also Video Editor. I know video editing tools like CAPCUT and many more.'
        }
    ]

    return (
        <section className="pt-0" id='skills'>
            <Container>
                <Row>
                    <Col lg="12" className="text-center mb-5" data-aos="zoom-in" data-aos-delay="200">
                        <h5 className='text-primary'>Skills</h5>
                        <h2>My Creative Skills</h2>
                    </Col>
                </Row>
                <Row>
                    {accordionData.map((item, index) => (
                        <Col key={index} xs={12} md={4} lg={4} className="mb-4 px-5 ff" data-aos="fade-up"
                            data-aos-duration="2000">
                            <Accordion open={open} toggle={() => toggle(String(index + 1))}>
                                <AccordionItem>
                                    <AccordionHeader targetId={String(index + 1)} className="faq d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <img src={item.icon} alt="" className='img-fluid w-50' />
                                            <p className="ml-3 mb-0 my-text">{item.title}</p>
                                        </div>
                                    </AccordionHeader>
                                    <AccordionBody accordionId={String(index + 1)}>
                                        {item.descr}
                                    </AccordionBody>
                                </AccordionItem>
                            </Accordion>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Skills;
