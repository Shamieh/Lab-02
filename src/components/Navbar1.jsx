import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./css/Navbar1.css";
import { Link } from 'react-router-dom';


const Navbar1 = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" >
        
          <Navbar.Brand href="/">Movie List</Navbar.Brand>
            <Link to= "/" className='nav-link'>Home</Link>
            <Link to="/movies" className='nav-link'>Movies</Link>
            
        
      </Navbar>

      </>

  );
}

export default Navbar1;
