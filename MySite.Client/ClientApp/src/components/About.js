import React, { Component } from 'react';

import headshot from '../images/portfolio-image.JPG';
import emailIcon from '../images/email.png';
import phoneIcon from '../images/phone.png';

export class About extends Component {

    render() {
        return (
            <div className="about">
                <img className="headshot" src={headshot} alt="headshot" />
                <div className="about__content">
                    <p>
                        Software Developer.
                     </p>
                    <p>
                        Software Developer, currenlty employed at AWH in Columbus, OH.
                     </p>
                    <div className="about__contact">
                        <span className="about__contact__icon">
                            <img src={emailIcon} height="30px" width="30px" alt="email icon" />
                            <a href="mailto:sharpcaleb007@gmail.com">sharpcaleb007@gmail.com</a>
                        </span>
                        <span className="about__contact__icon">
                            <img src={phoneIcon} height="30px" width="30px" alt="phone icone" />
                            614.507.7616
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}