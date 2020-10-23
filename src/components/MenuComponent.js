import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default class MenuComponent extends Component {
  
  renderCategories() {
    const categories = this.props.categories || [];
    return categories.map((category, idx) => {
      const url = "/categories/" + category.id;
      return (
        <NavDropdown.Item key={idx} href={url}>
          {category.title}
        </NavDropdown.Item>
      );
    });
  }
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">ActivKids</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/categories">Categories</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              {this.renderCategories()}
              <NavDropdown.Divider />
              <NavDropdown.Item href="/activities">
                View all Activities
              </NavDropdown.Item>
              <NavDropdown.Item href="/activities-new">
                Add a new activity
              </NavDropdown.Item>
              <NavDropdown.Divider />
             
            </NavDropdown>
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
    );
  }
}