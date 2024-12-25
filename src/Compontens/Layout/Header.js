import React from 'react'
import "../../style/Header.css"
import lulogo from "../../Image/lulogo.webp"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
    <nav className='header'>
      <div className="bgcolor d-flex justify-content-around align-items-center d-sm-none d-lg-block">
         <a className='about' href='aboutus'>About letsupdrade</a>
        <a className='explore' href='p'>Explore program</a>
      </div>
      <div>
      <img alt='logo' className='img' src={lulogo}></img>
      </div>
      <div className='bgcolor'>
        <a className='refer' href='k'> Refer & Earn</a>
        <a className='login' href='l'>Login</a>
      </div>
      </nav>

      <Navbar collapseOnSelect id='nav' expand="lg" fixed='top' className="d-lg-none">
        <Container>
          <Navbar.Brand href="#">
            <img  className="img" src={lulogo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="align-items-center">
            <Nav className="w-100">
              <Nav.Link href="#" className="about">About LetsUpgrade</Nav.Link>
              <Nav.Link href="#" className="explore">Explore Program</Nav.Link>
              <Nav.Link href="#" className="refer">Refer & Earn</Nav.Link>
              <Nav.Link href="#" className="login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
