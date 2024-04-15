import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

function TopNav() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null
  }


  return (
    <Navbar expand="lg" className="bg-body-tertiary" 
      bg={(resolvedTheme === "light")? "light": "dark"} 
      data-bs-theme={(resolvedTheme === "light")? "light": "dark"}>
      <Container>
        <Navbar.Brand href="#home">
          <img src="/images/logo.png" alt="logo" width="37" height="30" /> MyApp
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#link">API Docs</Nav.Link>
            <NavDropdown title="Community" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;