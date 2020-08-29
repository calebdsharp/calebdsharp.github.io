import React, { Component } from 'react';

export class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repos: [],
            isLoaded: false,
            error: null
        };
    }

    componentDidMount() {
        fetch('https://api.github.com/users/calebdsharp/repos')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    repos: data,
                    isLoaded: true,
                })
            })
            .catch(error => console.error(error))
    }

    redirectToRepo = (url) => {
        window.open(url);
    }

    render() {
        const { error, isLoaded, repos } = this.state;

        const filter = repos.filter(repo => {
            if (repo.name.includes('amok') || repo.name.includes('smart') || repo.name.includes('full-stack') || repo.name.includes('Fortune')) {
                return repo.name;
            }
            return null;
        });

        const displayRepos = filter.map((repo, i) => {
            let name = repo.name;
            // replace dashes from repo names
            let newName = name.replace(/[^A-Z0-9]/ig, " ");
            let displayName = newName.toLowerCase();

            // convert date to local date
            let date = new Date(repo.updated_at);
            let displayDate = date.toLocaleDateString('en-US');

            return (
                <div className="repo" key={repo.id}>
                    <div className="repo__info">
                        <p className="repo__name" onClick={() => this.redirectToRepo(repo.html_url)}><span className="underline--magical">{displayName}</span></p>
                        <div className="repo__time">
                            <p>Last updated:</p>
                            <p>{displayDate}</p>
                        </div>
                    </div>
                </div >
            );
        });

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div style={{ textAlign: 'center' }}>Loading...</div>;
        }

        return (
            <React.Fragment>
                <div className="projects">
                    {displayRepos}
                </div>
            </React.Fragment>
        );
    }
}