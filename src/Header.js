import React, {Component} from 'react';
import Nav from 'react-bootstrap/Nav';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {handleShowHome, handleShowProjects, handleShowAbout} = this.props;
  return (
    <Nav>
      <Nav.Item>
        <Nav.Link className="name" onClick={handleShowHome}>Caleb Sharp</Nav.Link>
      </Nav.Item>
      <ul>
        <Nav.Item>
          <Nav.Link onClick={handleShowProjects}>Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={handleShowAbout}>About</Nav.Link>
        </Nav.Item>
      </ul>
    </Nav>
);
}
}
export default Header;
