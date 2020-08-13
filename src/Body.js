import React, {Component} from 'react';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Projects from './Projects';
import About from './About';

class Body extends Component {
  constructor(props){
    super(props);
    this.state = {
      home: true,
      projects: false,
      about: false
    };
  }

  showHome = () => {
    this.setState({
      home: true,
      projects: false,
      about: false
    });
  }

  showProjects = () => {
    this.setState({
      home: false,
      projects: true,
      about: false
    });
  }

  showAbout = () => {
    this.setState({
      home: false,
      projects: false,
      about: true
    });
  }

  render() {
    const { home, projects, about } = this.state;
    return (
      <>
      <Header
      handleShowHome={this.showHome} handleShowProjects={this.showProjects} handleShowAbout={this.showAbout}/>
      {home &&
        <Home />
      }
      {projects &&
        <Projects />
      }
      {about &&
        <About />
      }
      <Footer />
      </>
    );
  }
}

export default Body;
