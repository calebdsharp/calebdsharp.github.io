import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar'

import '../style/Footer.css';

class Footer extends Component {

  toLinkedIn = () => {
    window.open('https://www.linkedin.com/in/caleb-sharp/');
  }

  toGitHub = () => {
    window.open('https://github.com/calebdsharp');
  }

  render() {
    return (
      <Navbar fixed="bottom" className="footer justify-content-center">
        <p onClick={this.toLinkedIn}>LinkedIn</p>
        <p onClick={this.toGitHub}>GitHub</p>
      </Navbar>
    );
  }
}
export default Footer;
