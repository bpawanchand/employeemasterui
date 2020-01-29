import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './header/header';
import Home from './home/home';
import Address from './address/address';
import Communication from './communication/communication';
import Search from './search/search';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/communication' component={Communication} />
          <Route path='/address' component={Address} />
        </Switch>
      </Router>
    );
  }
}
