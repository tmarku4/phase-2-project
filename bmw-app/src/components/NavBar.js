import {NavLink} from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Search from "./Search";





function NavBar({setSearchText}){
    
//     return (
//     //     <nav className="navbar">
//     //     <NavLink to="/">Home</NavLink>
//     //     <NavLink to="/cars">Cars</NavLink>
//     //     <NavLink to="/add_car">Add Car</NavLink>
//     // </nav>

// <Navbar bg="dark" data-bs-theme="dark">
// <Container>
//   <Navbar.Brand href="#home">Resources</Navbar.Brand>
//   <Nav className="me-auto">
//     <Nav.Link href="/"> Home
//     {/* <NavLink to="/">Home</NavLink> */}
//     </Nav.Link>
//     <Nav.Link href="/cars"> Cars
//     {/* <NavLink to="/cars">Cars</NavLink> */}
//     </Nav.Link>
//     <Nav.Link href="/add_car"> Add Car
//     {/* <NavLink to="/add_car">Add Car 
//     </NavLink> */}
//     </Nav.Link>
//   </Nav>
// </Container>
// </Navbar>
//     )

return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">RedLine Dealership</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"><NavLink to="/">Home</NavLink></Nav.Link>
            <Nav.Link href="#action2"><NavLink to="/cars">Inventory</NavLink></Nav.Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="#">
                 <NavLink to="/add_car">Sell Your Car</NavLink>
            </Nav.Link>
          </Nav>
          <Search setSearchText={setSearchText}/>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              
            />
            <Button>Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

}

export default NavBar
