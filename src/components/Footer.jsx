import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import "./css/Footer.css";


const Footer = () => {
  return (
    <footer className='foot'>
      <Container fluid>
        <Row>
          <Col md={6}>
            <h5>My Website</h5>
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <a href="#privacy" className="text-white me-3">Privacy Policy</a>
            <a href="#terms" className="text-white">Terms of Service</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
