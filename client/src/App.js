import React, { Component } from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


class App extends Component {
  render(){
    return(
      <Router>
        <div>
          <Nav />
        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/books" component={Books} />
          <Route path="/books/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
