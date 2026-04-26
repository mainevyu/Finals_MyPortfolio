import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Project() {
  const projects = [
    {
      title: "Student Services Portal",
      desc: "React + Typescript",
      link: "https://mainevyu.github.io/mg_lab5_dagusen"
    },
    {
      title: "Feedback App",
      desc: "MongoDB Fetch",
      link: "https://mainevyu.github.io/Finals_Lab1_Dagusen/"
    },
    {
      title: "Book Request Form",
      desc: "Controlled and Uncontrolled",
      link: "https://github.com/yourusername/portfolio"
    }
  ];

  return (
    <div id="projects" className="section">
      <Container fluid className="px-5">

        <div className="header text-center">
          <h1>Projects</h1>
        </div>

        <Row className="mt-4">
          {projects.map((p, i) => (
            <Col md={4} key={i} className="mb-4">
              <Card className="project-card">

                <Card.Body className="text-center">
                  <Card.Title>{p.title}</Card.Title>
                  <Card.Text>{p.desc}</Card.Text>

                  <Button
                    href={p.link}
                    target="_blank"
                    className="btn-navy w-100"
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