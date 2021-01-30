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
        fetch('https://graph.instagram.com/17841400631260357/media?access_token=IGQVJWSURzMkdyQWw3eWNzalBVdWlZAanFNZAnZAyOEQ2cHY0WW5PSTV6NHNnMkxrMGJJdTBDalNjaFl2c0cxZAFdvNHNvN190Ukw5dUdCSENzcGJwX0NtRWpna0NaMVF4bzdzQ2drb1R3&fields=id,timestamp,media_url')
            .then(response => response.json())
            .then(data => {
                console.log(data.data);
                this.setState({
                    photos: data.data,
                    isLoaded: true
                });
            }).catch(err => console.log(err))
    }

    // displayPhotos = () => {
    //   this.state.photos.map((pic, i) => {
    //     let caption = pic.caption;
    //       return (
    //           <li className="photos" key={pic.id}>
    //             hello
    //               <figure>
    //                   <img className="pic" src={pic.media_url} width="300px" height="300px" />
    //                   <figcaption>{caption}</figcaption>
    //               </figure>
    //           </li>
    //       );
    // });

    // if (this.state.error) {
    //     return <div>Error: {this.state.error.message}</div>;
    // } else if (!this.state.isLoaded) {
    //     return <div style={{ textAlign: 'center' }}>Loading...</div>;
    // }
  // }

    render() {
        const { error, photos, isLoaded } = this.state;

        // const displayphotos = this.state.photos.map((pic, i) => {
        //     let caption = pic.caption;
        //     return (
        //         <li classname="photos" key={pic.id}>
        //             <figure>
        //                 <img classname="pic" src={pic.media_url} width="300px" height="300px" />
        //                 <figcaption>{caption}</figcaption>
        //             </figure>
        //         </li>
        //     );
        // });

        //{displayPhotos} // use to display in return

        // if (error) {
        //     return <div>Error: {error.message}</div>;
        // } else if (!isLoaded) {
        //     return <div style={{ textAlign: 'center' }}>Loading...</div>;
        // }

        return (
            <div>
                <ul className="pic-list">
                    {this.state.photos.map((pic, i) => {
                        let caption = pic.caption;
                        return (
                            <li classname="photos" key={pic.id}>
                                <figure>
                                    <img classname="pic" src={pic.media_url} width="300px" height="300px" />
                                    <figcaption>{caption}</figcaption>
                                </figure>
                            </li>
                        )
                    })
                  }
                </ul>
            </div>
        );
    }
}

export default Photos;
