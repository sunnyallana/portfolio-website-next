"use client";

import { useState, useEffect, useCallback } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Image from 'next/image';

const NavBarComponent = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 10);

    const sections = ['home', 'skills', 'testimonials', 'projects'];
    let currentSection = 'home';

    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element && window.scrollY >= element.offsetTop - 160) {
        currentSection = section;
      }
    });

    setActiveLink(currentSection);
  }, []);

  const setActiveLink = (value) => {
    const links = document.querySelectorAll('.navbar-link');
    links.forEach(link => link.classList.remove('active'));

    const activeLink = document.querySelector(`.navbar-link[href="#${value}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className='navbar-link'>&lt;Home&nbsp;/&gt;</Nav.Link>
            <Nav.Link href="#skills" className='navbar-link'>&lt;Skills&nbsp;/&gt;</Nav.Link>
            <Nav.Link href="#testimonials" className='navbar-link'>&lt;Testimonials&nbsp;/&gt;</Nav.Link>
            <Nav.Link href="#projects" className='navbar-link'>&lt;Projects&nbsp;/&gt;</Nav.Link>
          </Nav>
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/sunnyallana" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile">
              <Image src="/images/linkedinLogo.svg" alt="LinkedIn Logo" width={24} height={24} loading="lazy" />
            </a>
            <a href="https://www.github.com/sunnyallana" target="_blank" rel="noreferrer" aria-label="GitHub Profile">
              <Image src="/images/githubLogo.svg" alt="GitHub Logo" width={24} height={24} loading="lazy" />
            </a>
            <a href="https://www.instagram.com/imsunnyallana" target="_blank" rel="noreferrer" aria-label="Instagram Profile">
              <Image src="/images/instagramLogo.svg" alt="Instagram Logo" width={24} height={24} loading="lazy" />
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
