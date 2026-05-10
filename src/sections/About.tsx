import { Container } from "react-bootstrap";
import profile from "../assets/image.jpg";

function About() {
  return (
    <div id="about" className="section">
      <Container>
        <div className="header text-center mb-5">
          <h1 className="display-4 fw-bold">About Me</h1>
          <p className="sub-header">Web Developer | Programmer | Photographer | Student</p>
        </div>

        <div className="about-card">
          <div className="about-image-container">
            <img src={profile} className="profile-img" alt="Charmaine Dagusen" />
          </div>

          <div className="about-content">
            <h2>Hi! I'm <strong>Charmaine</strong></h2>
            <p className="about-text">
              I am a 20-year-old student from Baguio City currently taking up 
              Information Technology major in Multimedia at the University of Baguio. 
              I’m passionate about visual design, photography, and videography, 
              and I enjoy creating digital content that tells meaningful stories 
              and showcases creativity. 
            </p>
            <p className="about-text">
              I’m also part of a multimedia production team in our local church, 
              where I continue to develop both my technical and creative skills.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
