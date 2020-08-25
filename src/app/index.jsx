import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Genres from "./genres";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Genres />
        </Route>
        <Route exact path="/genres">
          <Genres />
        </Route>
        <Route exact path="/genres/:id">
          <Genres />
        </Route>
        <Route>
          <div>NOT FOUND 404</div>
        </Route>
      </Switch>
    </Router>
  );
}
