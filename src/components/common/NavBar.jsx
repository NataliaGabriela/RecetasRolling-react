import Container from 'react-bootstrap/Container';
import {Nav, Navbar} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import '../../App.css';

const NavBar = () => {
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand  as={Link} to='/'>Recetas Rolling</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end className='nav-link' to='/'>Inicio</NavLink>
            <NavLink end className='nav-link' to='/administrador'>Administrador</NavLink>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      );
};
export default NavBar;