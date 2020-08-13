import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Home extends Component {
  constructor(props) {
    super(props);
  }

toGoogle = () => {
  window.open('https://www.google.com');
}

  render() {
    return (
      <Container className="home">
        <Row>
          <Col>
            <h1 className="home-text-large">
            Rethink<br />innovate.
            </h1>
            <p className="home-text-small">Caleb, software developer in Columbus, Ohio</p>
          </Col>
          <Col>
            <span className="resume-link" onClick={this.toGoogle}>Download my resume.</span>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Home;
