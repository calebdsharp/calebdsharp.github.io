import React, { Component, Suspense, lazy} from 'react';

// Router Components
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// Style
import '../style/App.css';

// Import Components
import Header from './Header';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Photos from './Photos';

const routes = [
  {
    name: "home",
    path: "/",
    exact: true,
    nav: () => <Header index={0} />,
    component: () => <Home />
  },
  {
    name: "projects",
    path: "/projects",
    exact: true,
    nav: () => <Header index={1} />,
    component: () => <Projects />
  },
  {
    name: "about",
    path: "/about",
    exact: true,
    nav: () => <Header index={2} />,
    component: () => <About />
  },
  {
    name: "photos",
    path: "/photos",
    exact: true,
    nav: () => <Header index={3} />,
    component: () => <Photos />
  }
]

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              name={route.name}
              path={route.path}
              exact={route.exact}
              children={route.nav}
            />
          ))}
        </Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                name={route.name}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

export default App;
