"use client";

import Image from 'next/image';
import { Container, Row, Col } from "react-bootstrap";

const AboutMeComponent = () => {
    const handleResumeDownload = () => {
        window.open('https://drive.usercontent.google.com/u/0/uc?id=1-n2WBCyNCc1ezBTJ08-tgjkGKMR-wbhs&export=download');
    };

    return (
        <section className="about-me-container" id="about">    
            <Container>
                <Row>
                    <Col xs={12} md={12} xl={12}>
                        <div className="section-heading-container">
                            <h3 className="section-heading-text">&lt;About&nbsp;Me&nbsp;/&gt;</h3>
                            <p className="section-heading-line"></p>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center align-items-center">
                    <Col className="about-me-text-section" xs={12} md={6} xl={6}>
                        <p>
                            Hey there! I'm Sunny Shaban, a BSCS student at FAST-NUCES. I'm certified by Microsoft in AI engineering and hold certifications from MongoDB and IBM as a full stack developer. With over 25+ certifications in computer science, I've focused on projects involving OCR and NLP. 
                        </p>
                        <p>
                            Currently, I'm working on a trespasser detection web app, aiming to integrate it with security systems for enhanced safety measures. In my role as a full stack developer, I've utilized React.js for front-end and Django for back-end on various projects. At Bytewise LTD, I'm honored to be a React and Next.js fellow.
                        </p>
                    </Col>
                    <Col className="about-me-image-section" xs={6} md={6} xl={6}>
                        <Image
                            src="/images/headshot.jpg"
                            alt="Sunny Shaban Headshot"
                            width={500} // Adjust width and height as needed
                            height={500} // Adjust width and height as needed
                            layout="responsive"
                            loading="lazy" // Add lazy loading attribute
                            className="about-me-image"
                        />
                    </Col>
                </Row>
                <Row className="justify-content-center align-items-center">
                    <Col className="download-button-container" xs={12}>
                        <button className="download-button" onClick={handleResumeDownload}>
                            <svg
                                viewBox="0 0 640 512"
                                width="20"
                                height="16"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                fill="white"
                                d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"
                                ></path>
                            </svg>
                            <span>Resume</span>
                        </button>
                    </Col>
                </Row>
            </Container>    
        </section>
    );
};

export default AboutMeComponent;
