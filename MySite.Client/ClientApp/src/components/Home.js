import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export class Home extends Component {

    toGoogle = () => {
        window.open('https://www.google.com');
    }

    render() {
        return (
            <Container className="home">
                <Row>
                    <Col>
                        <h1 className="home__text__large">
                            Rethink<br />innovate.
            </h1>
                        <p className="home__text__small">Caleb, software developer in Columbus, Ohio</p>
                    </Col>
                    <Col>
                        <span className="resume__link strike" onClick={this.toGoogle}>Download my resume.</span>
                    </Col>
                </Row>
            </Container>
        );
    }
}