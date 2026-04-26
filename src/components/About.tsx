import { Container } from "react-bootstrap";
import profile from "../assets/image.jpg";

function About() {
  return (
    <div id="about" className="section">
      <Container fluid className="px-5">

        <div className="header text-center">
          <h1>About Me</h1>
        </div>

        <div className="about-card">
          <img src={profile} className="profile-img" />

          <p className="about-text">
            Hi! I am Charmaine Dagusen, 20 years old from Baguio City. 
            I am a student in the School of Information Technology major in Multimedia. 
            I am passionate about visual design, photography, and videography. 
            I love creating digital content that tells meaningful stories and showcases creativity. 
            I am also part of a multimedia production team in our local church, where I continue 
            to improve my technical and creative skills.
          </p>
        </div>

      </Container>
    </div>
  );
}

export default About;