import { useState } from "react";
import { Container, Row, Col, Card, Button, Dropdown } from "react-bootstrap";
import p1 from "../assets/prelims1.png";
import p2 from "../assets/prelims2.png";
import p3 from "../assets/prelims3.png";
import m1 from "../assets/midterms1.png";
import m2 from "../assets/midterms2.png";
import m3 from "../assets/midterms3.png";
import f1 from "../assets/finals1.png";
import f2 from "../assets/finals2.png";
import f3 from "../assets/finals3.png";

function Project() {
  const [category, setCategory] = useState("prelims");

  const allProjects = {
    prelims: [
      {
        title: "Sample Resume",
        desc: "TypeScript and JSX",
        link: "https://mainevyu.github.io/APTECH1_Dagusen/",
        img: p1
      },
      {
        title: "Student Dashboard",
        desc: "TypeScript in React",
        link: "https://mainevyu.github.io/FG_LAB2_Dagusen/",
        img: p2
      },
      {
        title: "Student Components",
        desc: "React State",
        link: "https://mainevyu.github.io/FG_LAB3_Dagusen/",
        img: p3
      }
    ],
    midterms: [
      {
        title: "Student Services Portal",
        desc: "Client-Side Routing",
        link: "https://mainevyu.github.io/MG_LAB5_Dagusen/",
        img: m1
      },
      {
        title: "Book Request Form",
        desc: "Controlled and Uncontrolled",
        link: "https://mainevyu.github.io/MG_LAB6_Dagusen/",
        img: m2
      },
      {
        title: "Student Form",
        desc: "Book Request and Event Feedback",
        link: "https://mainevyu.github.io/MG_LAB_EXAM/",
        img: m3
      }
    ],
    finals: [
      {
        title: "Course Feedback System",
        desc: "JSON and MongoDB API",
        link: "https://mainevyu.github.io/Finals_Lab1_Dagusen/",
        img: f1
      },
      {
        title: "Contact Form",
        desc: "Sending Email using EmailJS",
        link: "https://mainevyu.github.io/Finals_Lab2_Dagusen/",
        img: f2
      },
      {
        title: "City Issue Reporting",
        desc: "Single Page Web Application",
        link: "https://mainevyu.github.io/Finals_Lab3_Dagusen/",
        img: f3
      }
    ]
  };

  const projects = allProjects[category as keyof typeof allProjects];

  return (
    <div id="projects" className="section">
      <Container>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1>Projects</h1>

          <Dropdown>
            <Dropdown.Toggle className="btn-custom">
              {category.toUpperCase()}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setCategory("prelims")}>
                Prelims
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setCategory("midterms")}>
                Midterms
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setCategory("finals")}>
                Finals
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <Row>
          {projects.map((p, i) => (
            <Col md={4} key={i} className="mb-4">
              <Card className="project-card text-center">
                  <div className="project-img-container">
                    <Card.Img 
                      variant="top" 
                      src={p.img || "https://placeholder.com"} 
                      className="project-screenshot" 
                    />
                  </div>
                <Card.Body>
                  <Card.Title>{p.title}</Card.Title>
                  <Card.Text>{p.desc}</Card.Text>

                  <Button
                    href={p.link}
                    target="_blank"
                    className="btn-custom w-100"
                  >
                    View Project
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

      </Container>
    </div>
  );
}

export default Project;
