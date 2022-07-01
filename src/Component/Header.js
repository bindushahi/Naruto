import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";

import "./style.css";

const Header = () => {
  const [backgrounds, setBackgrounds] = useState(false);
  const changeBackground = () => {
    if (window.screenY > 80) {
      setBackgrounds(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="lg"
      className={backgrounds ? "navbar" : "navbars"}
    >
      <Container>
        <Navbar.Brand>E-Learning </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <li className="nav-link">
            <Link to="/"></Link>Home
          </li>
          <li className="nav-link">
            <Link to="/"></Link>About Us
          </li>
          <li className="nav-link">
            <Link to="/"></Link>Contact
          </li>
        </Navbar.Collapse>
        <Nav>
          <li className="icons">
            <FaFacebookSquare />
          </li>
          <li className="icons">
            <AiFillInstagram />
          </li>
          <li className="icons">
            <AiFillLinkedin />
          </li>
          <li className="icons">
            <FiTwitter />
          </li>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
