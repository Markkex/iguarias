import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/about">
            <Home />
          </Route>
          <Route path="/menus">
            <Home />
          </Route>
          <Route path="/hours&location">
            <Home />
          </Route>
          <Route path="/reservations">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
