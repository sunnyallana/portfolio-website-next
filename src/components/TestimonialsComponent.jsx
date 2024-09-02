"use client";

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { FaQuoteLeft } from 'react-icons/fa';
import Image from 'next/image'; // For optimized image loading

// Example testimonials data
const testimonials = [
  {
    image: '/images/testimonials/sunny-shaban-ali-allana-muhammad-hassan-naviwala.jfif',
    name: 'Muhammad Hassan Naviwala',
    role: `Dynamics AX/365 FO Technical Consultant @ MazikGlobal Pakistan | Microsoft Certified Trainer | AI & Copilot Expert | Azure Cloud Specialist | DevOps Engineer | Business Transformation Strategist`,
    text: `One area where Sunny truly shines is in his leadership skills, setting him apart from his peers. His ability to work hard and solve problems efficiently has been evident throughout our collaboration. Sunny consistently demonstrates respect for his seniors and displays a keen enthusiasm for learning new skills.`,
  },
  {
    image: '/images/testimonials/sunny-shaban-ali-allana-hasan-zain.jfif',
    name: 'Hasan Zain',
    role: `CEO @ The Great Student | Ed tech Startup | Media Production Specialist | Scaling DTC`,
    text: `From the moment Sunny joined our team, it was clear that he possesses a deep understanding of web development and a keen sense of what it takes to build and maintain a high-quality online presence. His technical expertise is matched by his ability to offer insightful and effective suggestions that have significantly enhanced our projects.`,
  },
  {
    image: '/images/testimonials/sunny-shaban-ali-allana-musawar-ali.jfif',
    name: 'Musawar Ali',
    role: 'PHD Scholar | Computer Vision Researcher @ eyecan.ai',
    text: `Sunny has a remarkable ability to grasp complex programming principles and apply them effectively in practical scenarios. His relentless pursuit of self-improvement, combined with his excellent teamwork and communication skills, make him a valuable asset to any organization.`,
  },
  {
    image: '/images/testimonials/sunny-shaban-ali-allana-bradley-britto.jfif',
    name: 'Bradley Britto',
    role: `Team Lead - Learning & Development | SquareTrade | ibex. Pakistan`,
    text: `Sunny possesses an exceptionally sharp mind, allowing him to quickly grasp and apply new processes with ease. His dedication to maintaining a disciplined work strategy sets him apart from his peers, demonstrating his commitment to excellence and productivity.`,
  },
  {
    image: '/images/testimonials/sunny-shaban-ali-allana-ammar-jamshed.jfif',
    name: 'Ammar Jamshed',
    role: `Linkedln Top Voice | Keynote Speaker and Trainer on Data & AI | Data Science Trainer | Course Author at Simpliv & Udemy | Ranked Kaggle Mentor 2023 | Github Contributor`,
    text: `Sunny works really hard and he is very enthusiastic about giving new ideas and discussing them with his team.`,
  },
];

const Testimonial = ({ image, name, role, text }) => (
  <div className="testimonial">
    <div className="testimonial-content">
      <Image src={image} alt={name} className="testimonial-image" layout="responsive" width={200} height={200} />
      <div className="testimonial-text-container">
        <span className="quote-icon"><FaQuoteLeft /></span>
        <p className="testimonial-text">{text}</p>
      </div>
    </div>
    <div>
      <h5 className="testimonial-name">{name}</h5>
      <p className="testimonial-role">{role}</p>
    </div>
  </div>
);

Testimonial.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const TestimonialCarousel = () => {
  const chunkedTestimonials = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    chunkedTestimonials.push(testimonials.slice(i, i + 2));
  }

  return (
    <Carousel
      className='testimonial-carousel'
      interval={null} // Disable automatic sliding
      ride="carousel" // Ensure that the carousel doesn't automatically cycle
    >
      {chunkedTestimonials.map((chunk, index) => (
        <Carousel.Item key={index}>
          <Row className="justify-content-center">
            {chunk.map((testimonial, i) => (
              <Col xs={12} md={6} lg={6} xl={6} key={i} className="d-flex justify-content-center mb-4">
                <Testimonial
                  image={testimonial.image}
                  name={testimonial.name}
                  role={testimonial.role}
                  text={testimonial.text}
                />
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

const TestimonialsComponent = () => (
  <section id="testimonials" className="testimonials-section-container">
    <Container>
      <Row className="justify-content-center align-items-center">
        <Col xs={12} md={12} xl={12}>
          <div className="section-heading-container">
            <h3 className="section-heading-text">&lt;Testimonials&nbsp;/&gt;</h3>
            <p className="section-heading-line"></p>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center">
        <Col xs={12}>
          <TestimonialCarousel />
        </Col>
      </Row>
    </Container>
  </section>
);

export default TestimonialsComponent;