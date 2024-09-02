import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image'; // Import Image component from next/image

// Define the skills data with image paths relative to the public directory
const skillsData = [
  { src: '/images/skills/sunny-shaban-ali-allana-web-developer-ai-engineer-html.svg', name: 'HTML' },
  { src: '/images/skills/sunny-shaban-ali-allana-web-developer-ai-engineer-css.svg', name: 'CSS' },
  { src: '/images/skills/sunny-shaban-ali-allana-web-developer-ai-engineer-bootstrap.svg', name: 'Bootstrap' },
  { src: '/images/skills/sunny-shaban-ali-allana-web-developer-ai-engineer-javascript.svg', name: 'JavaScript' },
  { src: '/images/skills/sunny-shaban-ali-allana-web-developer-ai-engineer-reactjs.svg', name: 'ReactJS' },
  { src: '/images/skills/sunny-shaban-ali-allana-web-developer-ai-engineer-nextjs.svg', name: 'NextJS' },
  { src: '/images/skills/sunny-shaban-ali-allana-web-developer-ai-engineer-mongodb.svg', name: 'MongoDB' },
  { src: '/images/skills/sunny-shaban-ali-allana-web-developer-ai-engineer-cpp.svg', name: 'C++' },
  { src: '/images/skills/sunny-shaban-ali-allana-web-developer-ai-engineer-python.svg', name: 'Python' },
  { src: '/images/skills/sunny-shaban-ali-allana-web-developer-ai-engineer-django.svg', name: 'Django' },
  { src: '/images/skills/sunny-shaban-ali-allana-web-developer-ai-engineer-github.svg', name: 'GitHub' },
  { src: '/images/skills/sunny-shaban-ali-allana-web-developer-ai-engineer-azure.svg', name: 'Azure' },
  { src: '/images/skills/sunny-shaban-ali-allana-web-developer-ai-engineer-postman.svg', name: 'Postman' },
];

const SkillsComponent = () => {
  return (
    <section id="skills" className="skills-section-container">
      <Container>
        <Row>
          <Col xs={12} md={12} xl={12}>
            <div className="section-heading-container">
              <h3 className="section-heading-text">&lt;Skills&nbsp;/&gt;</h3>
              <p className="section-heading-line"></p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {skillsData.map((skill, index) => (
            <Col xs={6} sm={6} md={4} lg={3} className="mb-4" key={index}>
              <div className="skill-card">
                <Image 
                  src={skill.src} 
                  alt={`${skill.name} logo`} // Improve accessibility with meaningful alt text
                  className="skill-card-logo" 
                  layout="responsive" 
                  width={200} 
                  height={200} // Set appropriate dimensions
                  loading="lazy" // Enable lazy loading
                />
                <div className="skill-card-overlay">
                  <p className="skill-card-name">{skill.name}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default SkillsComponent;
