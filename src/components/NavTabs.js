import React, { Component } from 'react';
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

function NavTabs() {
    // We'll go into the Hooks API later, for now, we are just using some code
    // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
    // This allows the component to check the route any time the user uses a link to navigate.
    const location = useLocation();

    return (

        <>

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
                    <Nav>
                    <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Sudar Meruva
                    </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default NavTabs;
