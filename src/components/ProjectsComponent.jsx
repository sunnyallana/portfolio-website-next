"use client";

import React from 'react';
import { Row, Col, Container, Card, Carousel } from 'react-bootstrap';
import Image from 'next/image';

// Directly use paths for images in the public directory
const medTech = '/images/projects/sunny-shaban-ali-aleena-jabeen-med-tech-website.png';
const dealerInsights = '/images/projects/sunny-shaban-ali-allana-dealer-track-insights.jpg';
const eevi = '/images/projects/sunny-shaban-ali-allana-eevi-headstarter.jpg';
const invoiceWizard = '/images/projects/sunny-shaban-ali-allana-invoice-wizard.png';
const convoNest = '/images/projects/sunny-shaban-ali-allana-convo-nest.png';
const theGreatStudent = '/images/projects/sunny-shaban-ali-allana-the-great-student-hasan-zain.jfif';

// GitHub logo path
const githubLogo = '/images/githubLogo.svg'; // Ensure this path is correct

const projects = [
  {
    title: 'Sicher',
    description: 'An AI-powered web application that detects trespassers in real-time using CCTV cameras. It sends alerts to the security team and the owner of the property.',
    image: theGreatStudent,
    github: 'https://github.com/sunnyallana/sicher',
  },
  {
    title: 'The Great Student',
    description: 'An interactive web app to enhance the academic experience for students. It features a range of educational tools, including lecture videos, past papers, and query resolution.',
    image: theGreatStudent,
    github: 'https://github.com/sunnyallana/the-great-student',
  },
  {
    title: 'MedTech Website',
    description: `Website dedicated to providing innovative medical technology solutions. It offers a range of tools and services designed to improve healthcare delivery and patient outcomes.`,
    image: medTech,
    github: 'https://github.com/sunnyallana-med-tech-website',
  },
  {
    title: 'Dealer Insights',
    description: `Web application enabling users to choose one of Car's dealership to view reviews of the dealership's cars submitted by other users and submit their own reviews.`,
    image: dealerInsights,
    github: 'https://github.com/sunnyallana/dealerTrack-insights',
  },
  {
    title: 'EEVI',
    description: 'Allows users to effortlessly discover and manage events and meetings. Additionally, it features AI for scheduling tasks.',
    image: eevi,
    github: 'https://github.com/sunnyallana/headstarter-hackathon-0/',
  },
  {
    title: 'Invoice Wizard',
    description: 'An interactive web app designed to enhance the academic experience for students. It features a range of educational tools, including lecture videos, past papers, and query resolution.',
    image: invoiceWizard,
    github: 'https://github.com/sunnyallana/invoice-wizard',
  },
  {
    title: 'ConvoNest',
    description: 'Web application developed using Django framework, aimed at fostering community interaction and knowledge sharing through topic-based discussions within dedicated rooms.',
    image: convoNest,
    github: 'https://github.com/sunnyallana/convo-nest',
  },
  {
    title: 'SmartTrack',
    description: 'Attendance system using an ESP32 microcontroller, an RFID reader (MFRC522), and an OLED display. The system reads RFID card IDs and sends them to a server using HTTP requests for attendance tracking and logging.',
    image: theGreatStudent, // Placeholder
    github: 'https://github.com/sunnyallana/smartTrack',
  },
];

const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const ProjectsComponent = () => {
  const chunkedProjects = chunkArray(projects, 4);

  return (
    <section id="projects" className="projects-section-container">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="section-heading-container">
              <h3 className="section-heading-text">&lt;Projects&nbsp;/&gt;</h3>
              <p className="section-heading-line"></p>
            </div>
          </Col>
        </Row>
        <Carousel
          className='projects-carousel'
          interval={null} // Disable automatic sliding
          ride="carousel" // Ensure that the carousel doesn't automatically cycle
        >
          {chunkedProjects.map((chunk, index) => (
            <Carousel.Item key={index}>
              <Row>
                {chunk.map((project, i) => (
                  <Col xs={12} md={6} key={i} className="mb-4">
                    <Card className="project-card">
                      <Row noGutters>
                        <Col xs={12} md={8} xl={6}>
                          <Card.Body>
                            <p className='project-title'>{project.title}</p>
                            <p className='project-description'>{project.description}</p>
                            <div className="d-flex">
                              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-view-button">
                                View
                                <Image src={githubLogo} alt="GitHub Logo" width={16} height={16} className="github-logo" loading="lazy" />
                              </a>
                            </div>
                          </Card.Body>
                        </Col>
                        <Col xs={12} md={4} xl={6}>
                          <Image src={project.image} alt={project.title} width={500} height={300} layout="responsive" className="project-card-image" loading="lazy" />
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default ProjectsComponent;
