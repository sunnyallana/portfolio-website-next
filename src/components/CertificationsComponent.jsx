"use client";

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';

// Define the certifications data with image paths relative to the public directory
const certifications = [
  { url: "https://learn.microsoft.com/api/credentials/share/en-us/SunnyShabanAli-6232/A3737F7CB799EA99?sharingId=3082081C59931CEC", image: '/images/certifications/sunny-shaban-ali-allana-web-developer-ai-engineer-microsoft-certified-fundamentals-badge.svg' },
  { url: "https://www.credly.com/badges/9cbee0d2-3508-4e38-a488-99538bf4e471/public_url", image: '/images/certifications/sunny-shaban-ali-allana-web-developer-ai-engineer-github_foundations.png' },
  { url: "https://learn.mongodb.com/c/6AD1UI_OT_aJ4S4FU1z3Lw", image: '/images/certifications/sunny-shaban-ali-allana-web-developer-ai-engineer-mongo-db-associate-developer.png' },
  { url: "https://www.credly.com/badges/df0dba9b-e56d-482a-a652-255d8be6fd8b", image: '/images/certifications/sunny-shaban-ali-allana-web-developer-ai-engineer-microsoft-azure-db-for-my-sql.png' },
  { url: "https://api.badgr.io/public/assertions/4NvkIsOXTy-wKBKlK8vfVQ?identity__email=study.sunnyallana%40gmail.com", image: '/images/certifications/sunny-shaban-ali-allana-web-developer-ai-engineer-postman-student-expert.png' },
  { url: "https://api.badgr.io/public/assertions/njHKqJJISj2qeCSh7LrpCQ?identity__email=study.sunnyallana%40gmail.com", image: '/images/certifications/sunny-shaban-ali-allana-web-developer-ai-engineer-postman-student-leader.png' },
  { url: "https://www.credly.com/badges/0be18a5e-43a3-4b25-a689-7ad630578ff7", image: '/images/certifications/sunny-shaban-ali-allana-web-developer-ai-engineer-IBM-data-analyst.png' },
  { url: "https://www.credly.com/badges/ab381004-8711-49b3-bd8b-11fe778d83e5", image: '/images/certifications/sunny-shaban-ali-allana-web-developer-ai-engineer-IBM-full-stack-software-developer.png' },
];

const CertificationsComponent = () => {
  return (
    <section id="certifications" className="certifications-section-container">
      <Container>
        <Row>
          <Col xs={12} md={12} xl={12}>
            <div className="section-heading-container">
              <h3 className="section-heading-text">&lt;Certifications&nbsp;/&gt;</h3>
              <p className="section-heading-line"></p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {certifications.map((cert, index) => (
            <Col xs={6} sm={6} md={4} lg={3} className="mb-4" key={index}>
              <div className="certification-card">
                <a 
                  href={cert.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={`Certification ${index + 1}`}
                >
                  <Image 
                    src={cert.image} 
                    alt={`Certification ${index + 1}`} 
                    className="certification-card-img" 
                    width={200} // Set appropriate width
                    height={200} // Set appropriate height
                    loading="lazy" // Lazy load images
                  />
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CertificationsComponent;