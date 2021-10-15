import React from "react";
import { Container, Navbar, Nav, NavDropdown, Badge } from "react-bootstrap";
import CartNavbar from "../../../containers/CartNavbar.container";

const Header = (props) => {
    const { itemNumber } = props;

    return (
        <header data-test="header">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">TechShop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse
                        id="basic-navbar-nav"
                        className="justify-content-end"
                    >
                        <Nav>
                            <Nav.Link href="/cart">
                                <div className="d-inline-flex" id="cartItemNo">
                                    Cart
                                    {itemNumber > 0 && (
                                        <>
                                            &nbsp;
                                            <span className="badge rounded-pill bg-primary px-2 ">
                                                {itemNumber}
                                            </span>
                                        </>
                                    )}
                                </div>
                            </Nav.Link>
                            <Nav.Link href="#link">Sign In</Nav.Link>
                            <NavDropdown
                                title="Account"
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item href="#action/3.1">
                                    Profile
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Order History
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/logout">
                                    logout
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default CartNavbar(Header);
