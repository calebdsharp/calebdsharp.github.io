import React, {Component} from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import headshot from './images/portfolio-image.JPG';
import emailIcon from './images/email.png';
import phoneIcon from './images/phone.png';

class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="about">
        <img src={headshot} height="80%" style={{borderRadius: '6px'}} />
        <div className="content">
          <p>
          I'm a Columbus, Ohio based Software Developer.
          </p>
          <p>
          I am currently employed by the State of Ohio as a Human Capital Management Associate, supporting several departments within the division of Human Resources, playing an integral role in the re-construction of the new employee onboarding process for the agency, as well as assisting with agency wide payroll and time keeping audits on a consistent basis.
          </p>
            <div className="contact">
              <span>
              <img src={emailIcon} height="30px" width="30px" />
                <a href="mailto:sharpcaleb007@gmail.com">sharpcaleb007@gmail.com</a>
              </span>
              <span>
              <img src={phoneIcon} height="30px" width="30px" />
                614.507.7616
              </span>
            </div>
        </div>
      </div>
    );
  }
}

export default About;
