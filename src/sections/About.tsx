import { Container } from "react-bootstrap";
import profile from "../assets/image.jpg";

function About() {
  return (
    <div id="about" className="section">
      <Container fluid className="px-5">

        <div className="header text-center">
          <h1>About Me</h1>
          <>Web Developer | Programmer | Photographer | Student</>
        </div>

        <div className="about-card">
          <img src={profile} className="profile-img" />

          <p className="about-text">
            ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ 
            Hi! I am <strong>Charmaine Dagusen</strong>, a 20-year-old student from Baguio City currently taking up Information 
            Technology major in Multimedia at the University of Baguio. I’m passionate about visual design, photography, and 
            videography, and I enjoy creating digital content that tells meaningful stories and showcases creativity. I’m also part 
             a multimedia production team in our local church, where I continue to develop both my technical and creative skills.
          </p>
        </div>

      </Container>
    </div>
  );
}

export default About;