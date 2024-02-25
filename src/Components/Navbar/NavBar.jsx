import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';

function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center"> <Logo /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="nav-link" activeclassname="active" exact="true" to="/">Home</NavLink>

                        <NavDropdown title="Xbox">
                            <NavDropdown.Item as={NavLink} to="/xbox/consolas" activeclassname="active">Consolas</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/xbox/juegos" activeclassname="active">Juegos</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/xbox/accesorios" activeclassname="active">Accesorios</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="PlayStation">
                            <NavDropdown.Item as={NavLink} to="/playstation/consolas" activeclassname="active">Consolas</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/playstation/juegos" activeclassname="active">Juegos</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/playstation/accesorios" activeclassname="active">Accesorios</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Nintendo">
                            <NavDropdown.Item as={NavLink} to="/nintendo/consolas" activeclassname="active">Consolas</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/nintendo/juegos" activeclassname="active">Juegos</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/nintendo/accesorios" activeclassname="active">Accesorios</NavDropdown.Item>
                        </NavDropdown>

                        
                    </Nav>
                </Navbar.Collapse>
                <NavLink className="nav-link" to="/"> <CartWidget /> </NavLink>
            </Container>
        </Navbar>
    );
}

export default NavBar;
