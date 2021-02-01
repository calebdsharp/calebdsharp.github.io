import React, {Component} from 'react';

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
      <div className="footer">
        <p onClick={this.toLinkedIn}>LinkedIn</p>
        <p onClick={this.toGitHub}>GitHub</p>
      </div>
    );
  }
}
export default Footer;
