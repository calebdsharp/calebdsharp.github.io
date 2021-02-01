import React, {Component} from 'react';
import Spinner from 'react-bootstrap/Spinner'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Container from 'react-bootstrap/Container'

import '../style/Photos.css';

class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      isLoaded: false,
      error: null
    };
  }

  componentDidMount() {
    fetch('https://graph.instagram.com/17841400631260357/media?access_token=IGQVJWSURzMkdyQWw3eWNzalBVdWlZAanFNZAnZAyOEQ2cHY0WW5PSTV6NHNnMkxrMGJJdTBDalNjaFl2c0cxZAFdvNHNvN190Ukw5dUdCSENzcGJwX0NtRWpna0NaMVF4bzdzQ2drb1R3&fields=id,timestamp,media_url,caption').then(response => response.json()).then(data => {
      this.setState({photos: data.data, isLoaded: true});
    }).catch(err => this.setState({error: err.message}))
  }

  renderPhotos = () => {
    if (this.state.error) {
      return <div>Error: {this.state.error}</div>;
    } else if (!this.state.isLoaded) {
      return (<div className="photos__spinner">
        <Spinner animation="border"/>
      </div>);
    } else {
      return (<ul className="photos-list">
        {
          this.state.photos.map((pic, i) => {
            let caption = pic.caption;
            console.log(pic);
            return (<li className="photos-list__item" key={pic.id}>
              <figure>
                <OverlayTrigger placement="bottom" overlay={<Tooltip>{caption}</Tooltip>}>
                  <img className="photos-list__pic" src={pic.media_url} width="150px" height="150px"/>
                </OverlayTrigger>
              </figure>
            </li>)
          })
        }
      </ul>);
    }
  }

  render() {
    const {error, photos, isLoaded} = this.state;

    return (<Container>
      {this.renderPhotos()}
    </Container>);
  }
}

export default Photos;
