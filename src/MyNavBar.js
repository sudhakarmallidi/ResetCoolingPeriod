import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MyNavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"> Cooling Period Reset</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default MyNavBar;