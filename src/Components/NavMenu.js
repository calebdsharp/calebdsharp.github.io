import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';

import '../style/NavMenu.css';

class NavMenu extends Component {

  render() {
    return (
      <Nav>
        <Nav.Item>
          <Nav.Link className="name" href="/">Caleb Sharp</Nav.Link>
        </Nav.Item>
        <div className="d-flex justify-content-end">
          <Nav.Item>
            <Nav.Link href="/projects">Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/photos">Photos</Nav.Link>
          </Nav.Item>
        </div>
      </Nav>
    );
  }
}
export default NavMenu;
