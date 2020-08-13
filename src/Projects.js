import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import classNames from 'classnames';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      isHovered: false,
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

  render() {
    const { error, isLoaded, isHovered, repos } = this.state;

    const filter = repos.filter(repo => {
      if (repo.name.includes('amok') || repo.name.includes('smart') || repo.name.includes('full-stack') || repo.name.includes('Fortune')) {
        return repo.name;
      }
    });

    const displayRepos = filter.map((repo, i) => {
      let name = repo.name;
      let newName = name.replace(/[^A-Z0-9]/ig, " ");
      return <div className="repos" key={repo.id}><a href={repo.html_url}>{newName.toLowerCase()}</a></div>
    });

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div style={{ textAlign: 'center'}}>Loading...</div>;
    }

    return (
      <div className="projects">
        {displayRepos}
      </div>
    );
  }
}
export default Projects;
