import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './header/header';
import { Home } from './home/home';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact to='/' component={Home} />
        </Switch>
      </Router>
    );
  }
}
