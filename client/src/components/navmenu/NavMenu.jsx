import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './NavMenu.css';

const NavMenu = () => {
  
  return (

    <Navbar>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          <Link as={Link} to="/" href="#home">Home</Link>
          <Link as={Link} to="/aboutus">About Us</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavMenu;
