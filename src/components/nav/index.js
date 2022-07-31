import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./style.scss"

function Navegacion() {
    return (
        <Navbar className='navegacion' bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home"><img className='imgLogo' src='img/NUEVO LOGO.png'></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className='nombrePagina' href="#home">Alto Libro</Nav.Link>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navegacion;