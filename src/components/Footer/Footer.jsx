import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/pavan-icon.png";

import "../../styles/footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  const openLinkedInProfile = () => {
    window.open("https://www.linkedin.com/in/pavan-nayak-0528b0233", "_blank");
  };
  const openGithub = () => {
    window.open("https://github.com/Nayakpawan", "_blank");
  }
  const openYoutube = () => {
    window.open("https://www.youtube.com/@Code-with-react", "_blank");
  }
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className=" footer__logo text-start">
              <img src={logo} alt="logo" className="" />
              <h5>Pavan Portfolio</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt pariatur accusamus
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Address</h5>
            <ListGroup className="">
              <ListGroupItem className="footer_item border-0 ps-0">
              <p>Location: 2GWC+G56 Pandar, Chhattisgarh</p>
              </ListGroupItem>

            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="">
              <ListGroupItem className="footer_item border-0 ps-0">
                <p>Location: 2GWC+G56 Pandar, Chhattisgarh</p>
              </ListGroupItem>
              <ListGroupItem className=" footer_item border-0 ps-0">
                <span>Phone: 9630714105</span>
              </ListGroupItem>

              <ListGroupItem className=" footer_item border-0 ps-0">
                <span>Email: pawannayak0720@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <i class="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              Copyright - 2024, website made by PAVAN KUMAR NAYAK. All Rights
              Reserved.
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Follow: </p>
              <span>
                {" "}
                <Link to="/">
                  <i class="ri-facebook-line"></i>
                </Link>{" "}
              </span>

              <span>
                <Link to='/' onClick={openGithub}>
                  <i class="ri-github-line"></i>
                </Link>
              </span>

              <span>
                {" "}
                <Link to="/" onClick={openYoutube}>
                  <i class="ri-youtube-line"></i>
                </Link>{" "}
              </span>

              <span>
                {" "}
                <Link to="/" onClick={openLinkedInProfile}>
                  <i class="ri-linkedin-line"></i>
                </Link>{" "}
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
