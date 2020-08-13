import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Footer extends Component {
  constructor(props) {
    super(props);
  }

  toLinkedIn = () => {
    window.open('https://www.linkedin.com/in/caleb-sharp/');
  }

  toGitHub = () => {
    window.open('https://github.com/calebdsharp');
  }

  render() {
    return (
      <div className="footer">
        <p onClick={this.toLinkedIn}>LinkedIn</p>
        <p onClick={this.toGitHub}>GitHub</p>
      </div>
    );
  }
}
export default Footer;
