import {Navbar, Container, Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import './App.css';


function Header(){
    return (
        <div>
            <div>
                <Navbar bg="dark" data-bs-theme="dark">
                    <Container>
                        <Navbar.Brand><NavLink to="/" className='navbar_brand'>E-Commerce Home </NavLink></Navbar.Brand>
                        <Nav className="me-auto nav_bar_wrapper">
                            <NavLink to="/AddProduct" className={({isActive}) => {
                                return isActive ? 'text-success' : '';
                            }}>AddProduct</NavLink>
                            <NavLink to="/UpdateProduct" className={({isActive}) => {
                                return isActive ? 'text-success' : '';
                            }} >UpdateProduct</NavLink>
                            <NavLink to="/Login" className={({isActive}) => {
                                return isActive ? 'text-success' : '';
                            }}>Login</NavLink>
                            <NavLink to="/Register" className={({isActive}) => {
                                return isActive ? 'text-success' : '';
                            }}>Register</NavLink>
                            
                        </Nav>
                    </Container>
                </Navbar>
            </div>
           
          

            
        </div>
    )
}
export default Header;
