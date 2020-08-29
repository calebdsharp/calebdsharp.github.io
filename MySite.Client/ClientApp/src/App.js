import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Photos } from './components/Photos';

import './styles/site.css';

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/projects' component={Projects} />
                <Route path='/about' component={About} />
                <Route path='/photos' component={Photos} />
            </Layout>
        );
    }
}
