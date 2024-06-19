import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//Nav bar with buttons linked to the dashboard and creating new user
function NavBar() {
    let navigate = useNavigate();

    return (
        <>
            <Navbar expand='lg' className='bg-dark'>
                <Container>
                    <Navbar.Toggle className='bg-light'/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link onClick={() => navigate("/")}>
                                <h5 className='text-white'><b>Dashboard</b></h5>
                            </Nav.Link>

                            <Nav.Link onClick={() => navigate("/formcreate")}>
                                <h5 className='text-white'><b>Create</b></h5>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    )
}

export default NavBar