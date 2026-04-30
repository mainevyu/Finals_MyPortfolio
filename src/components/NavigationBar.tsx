import { Navbar, Nav, Container } from "react-bootstrap";

function NavigationBar() {
  return (
    <Navbar expand="lg" fixed="top" className="navbar-custom">
      <Container fluid className="px-5">

        <Navbar.Brand href="#" className="brand">
          My Portfolio
        </Navbar.Brand>

        <Nav className="ms-auto nav-links">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>

      </Container>
    </Navbar>
  );
}

export default NavigationBar;