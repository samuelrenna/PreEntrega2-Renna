import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../Logo/Logo';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

function NavBar() {
return (
    <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <NavLink className="navbar-brand" to="/"> <Logo /> </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>

                        <NavDropdown title="Xbox">
                            <NavDropdown.Item><NavLink to={"/xbox/consolas"} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Consolas</NavLink></NavDropdown.Item>
                            <NavDropdown.Item><NavLink to={"/xbox/juegos"} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Juegos</NavLink></NavDropdown.Item>
                            <NavDropdown.Item><NavLink to={"/xbox/accesorios"} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Accesorios</NavLink></NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="PlayStation">
                            <NavDropdown.Item><NavLink to={"/playstation/consolas"} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Consolas</NavLink></NavDropdown.Item>
                            <NavDropdown.Item><NavLink to={"/playstation/juegos"} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Juegos</NavLink></NavDropdown.Item>
                            <NavDropdown.Item><NavLink to={"/playstation/accesorios"} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Accesorios</NavLink></NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Nintendo">
                            <NavDropdown.Item><NavLink to={"/nintendo/consolas"} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Consolas</NavLink></NavDropdown.Item>
                            <NavDropdown.Item><NavLink to={"/nintendo/juegos"} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Juegos</NavLink></NavDropdown.Item>
                            <NavDropdown.Item><NavLink to={"/nintendo/accesorios"} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Accesorios</NavLink></NavDropdown.Item>
                        </NavDropdown>

                        <NavLink className="nav-link" to="/"> <CartWidget /> </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
);
}

export default NavBar;