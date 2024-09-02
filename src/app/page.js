import BannerComponent from '../components/BannerComponent';
import AboutMeComponent from '../components/AboutMeComponent';
import SkillsComponent from '../components/SkillsComponent';
import CertificationsComponent from '../components/CertificationsComponent';
import TestimonialsComponent from '../components/TestimonialsComponent';
import ProjectComponent from '../components/ProjectsComponent';

export default function HomePage() {
  return (
    <>
      <BannerComponent />
      <AboutMeComponent />
      <SkillsComponent />
      <CertificationsComponent />
      <TestimonialsComponent />
      <ProjectComponent />
    </>
  );
}
