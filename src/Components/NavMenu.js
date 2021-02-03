import React, {Component} from 'react';
import Nav from 'react-bootstrap/Nav';

class NavMenu extends Component {

  render() {
    return (<Nav>
      <Nav.Item>
        <Nav.Link className="name" href="/">Caleb Sharp</Nav.Link>
      </Nav.Item>
      <ul>
        <Nav.Item>
          <Nav.Link href="/projects">Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/photos">Photos</Nav.Link>
        </Nav.Item>
      </ul>
    </Nav>);
  }
}
export default Header;
