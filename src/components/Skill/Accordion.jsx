import React, { useState } from 'react';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap';

const iconMap = {
  Bootstrap: require('../../assets/Icon/BootstrapIcon.svg'),
  MongoDB: require('../../assets/Icon/MongoDB.svg'),
  React: require('../../assets/Icon/React.svg'),
  Node: require('../../assets/Icon/Node.svg'),
  Express: require('../../assets/Icon/Express.svg'),
  PHP: require('../../assets/Icon/PHP.svg'),
  HTML: require('../../assets/Icon/HTML.svg'),
  CSS: require('../../assets/Icon/CSS.svg'),
  Tailwind: require('../../assets/Icon/Tailwind.svg'),
  Next: require('../../assets/Icon/Next.svg'),
};

const AccordionExpandDefault = ({ icon, title, descr }) => {
  const [open, setOpen] = useState('1');

  const toggle = (id) => {
    setOpen(open === id ? null : id);
  };

  return (
    <>
      <Accordion open={open} toggle={toggle} className='accordion'>
        <AccordionItem>
          <AccordionHeader targetId="1">
            <img src={icon} alt="" />
          </AccordionHeader>
          <AccordionBody accordionId="1">
            <strong>This is the first item's accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">Accordion Item 2</AccordionHeader>
          <AccordionBody accordionId="2">
            <strong>This is the second item's accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3"><label htmlFor="" className='title'>{title}</label></AccordionHeader>
          <AccordionBody accordionId="3">
            {descr}
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </>
  );
};

const ImageIcon = ({ iconName }) => {
  return <img src={iconMap[iconName]} alt="" style={{ height: '2rem', width: '2rem' }} />;
};

export default AccordionExpandDefault;
