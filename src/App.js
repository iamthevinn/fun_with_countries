import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css'
import './App.css';
import HomeView from './HomeView'
import BlocView from './BlocView'
import CountryView from './CountryView'
import TrackedView from './TrackedView'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route exact path="/:bloc" render={ ({match, history}) => <BlocView match={match} history={history} />}/>
            <Route path="/countries/:countryName" render={ ({match, history}) => <CountryView match={match} history={history} />}/>
            <Route path="/tracking/countries" render={ ({match, history}) => <TrackedView match={match} history={history} />}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
