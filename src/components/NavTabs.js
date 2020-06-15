import React, { Component } from 'react';
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Row } from 'react-bootstrap';

function NavTabs() {
    // We'll go into the Hooks API later, for now, we are just using some code
    // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
    // This allows the component to check the route any time the user uses a link to navigate.
    const location = useLocation();

    return (

        <>
            {/* <header className="header" Style={{ marginTop: "auto" }}> */}

                
                <div  className="text-white bg-dark text-center">
                    <h4>Sudar Meruva</h4>
                    <h5>DEVOPS | AGILE | CICD | Digital Transformation | Customer Experience</h5>
                    <h5>(732) 259-6656 | <a href="mailto:smeruva@gmail.com">smeruva@gmail.com</a> | Bridgewater, NJ 08807</h5>
                    <h5 className="noBottomMargin"><a href="https://bit.ly/2XLl7v4">LinkedIn</a> | <a href="https://bit.ly/2XIh2Ys">Resume</a>  | <a href="https://bit.ly/3dRNuO0">Github</a></h5>
                    </div>
            {/* </header> */}

                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Home
                        </Link>
                            <Link to="/Portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>Portfolio
                        </Link>
                            <Link to="/technologies" className={location.pathname === "/technologies" ? "nav-link active" : "nav-link"}>Technologies
                        </Link>
                        </Nav>
                        {/* <Nav>
                            <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Sudar Meruva
                    </Link>
                        </Nav> */}
                    </Navbar.Collapse>
                </Navbar>
        </>
    );
}

export default NavTabs;

