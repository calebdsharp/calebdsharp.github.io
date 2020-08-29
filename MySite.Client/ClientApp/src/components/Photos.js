import React, { Component } from 'react';

export class Photos extends Component {
    static displayName = Photos.name;

    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            isLoaded: false,
            error: null
        };
    }

    componentDidMount() {
        this.populatePhotos();
    }

    async populatePhotos() {
        fetch('photos')
            .then(response => response.json())
            .then(photo => {
                this.setState({
                    photos: photo.data,
                    isLoaded: true
                });
                console.log(this.state.photos);
            }).catch(err => console.log(err));
    }


    render() {
        const { photos, isLoaded, error } = this.state;

        const displayPhotos = photos.map((pic, i) => {
            let caption = pic.caption;
            return (
                <li className="photos" key={pic.id}>
                    <figure>
                        <img className="pic" src={pic.media_url} width="300px" height="350px" alt={pic.caption} />
                        <figcaption>{caption}</figcaption>
                    </figure>
                </li>
            );
        });

        //const displayPhotos = photos.map((pic, i) => {
        //    return (<tr key={i}>
        //        <td><img src={pic.media_url} width="300px" height="350px" alt={pic.caption} /></td>
        //        <td>{pic.caption}</td>
        //    </tr>
        //    );
        //});


        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div style={{ textAlign: 'center' }}>Loading...</div>;
        }

        return (
            <table>
                <tbody>
                    {displayPhotos}
                </tbody>
            </table>
        );
    }
}
