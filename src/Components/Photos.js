import React, { Component } from 'react';

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
        fetch('https://graph.instagram.com//me/media?fields=id,caption,media_url&access_token=IGQVJXb0RreTNGbEFjNk9aQWZAQYnlGV3NGc3RMX1NYYzhKcUJCRVBwWUVzc0xSc0t2VmU0T2tGdDRHTURXTkYtM0dtaVdCM2FocmpicTRvLTZAWci14OHlfRjVpUjNHQnhQZAzIxaDROMVJPQ2xDUEhkbAZDZDD')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    photos: data.data,
                    isLoaded: true
                });
            }).catch(err => console.log(err))
    }

    render() {
        const { error, photos, isLoaded } = this.state;

        const displayPhotos = this.state.photos.map((pic, i) => {
            let caption = pic.caption;
            return (
                <li className="photos" key={pic.id}>
                    <figure>
                        <img className="pic" src={pic.media_url} width="300px" height="300px" />
                        <figcaption>{caption}</figcaption>
                    </figure>
                </li>
            );
        });

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div style={{ textAlign: 'center' }}>Loading...</div>;
        }

        return (
            <div>
                <ul className="pic-list">
                    {displayPhotos}
                </ul>
            </div>
        );
    }
}

export default Photos;
