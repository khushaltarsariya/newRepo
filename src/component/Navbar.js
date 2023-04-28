import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="light">
        <Container fluid> 
        <Navbar.Brand href="/" style={{color: "white"}}>Madhav Impex</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href='/' style={{color: "white"}} >Home</Nav.Link>
            <Nav.Link href="/about" style={{color: "white"}}>About</Nav.Link>
            <Nav.Link href="/contact" style={{color: "white"}}>contact us</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
}

export default ColorSchemesExample;