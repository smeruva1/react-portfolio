import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio";
import Technologies from "./components/pages/Technologies";


function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/technologies" component={Technologies} />
          {/* if no routes hit..use this one below */}
          <Route render={() => <h1> 404 error! Where are you?</h1>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
