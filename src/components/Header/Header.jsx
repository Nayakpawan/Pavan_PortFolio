import React, { useRef, useEffect } from "react";

import { Button, Container } from "reactstrap";
import logo from "../../assets/pavan-icon.png";
import { Link } from "react-scroll";

import "../../styles/header.css";


const nav__links = [
  {
    display: "Home",
    path: "home",
  },
  {
    display: "About Us",
    path: "about",
  },
  {
    display: "Work",
    path: "work",
  },
  {
    display: "Skills",
    path: "skills",
  },
  {
    display: "Contact",
    path: "contect",
  },
];


const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  useEffect(() => {
    const handleScroll = () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="logo" className="logo-img"/>
            <h5>Pavan Portfolio</h5>
          </div>

          {/* ======= menu ======= */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
              {nav__links.map((item, index) => (
                <Link
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                </Link>
              ))}
            </div>
          </div>

          {/* ======== nav right icons ========= */}
          <div className="nav__right d-flex align-items-center gap-4">
            <div className="">
              <Button className='hiremebtn' color="success" outline>Hire Me</Button>
            </div>
            <span className="mobile__menu" onClick={toggleMenu}>
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
