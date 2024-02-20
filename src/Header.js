import {Navbar, Container, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './App.css';


function Header(){
    return (
        <div>
          <Navbar bg="dark" data-bs-theme="dark">
            <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto nav_bar_wrapper">
                <Link to="/AddProduct">AddProduct</Link>
                <Link to="/UpdateProduct">UpdateProduct</Link>
                <Link to="/Login">Login</Link>
                <Link to="/Register">Register</Link>
                
            </Nav>
            </Container>
        </Navbar>
          

            
        </div>
    )
}
export default Header;
