import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import Users from "./users/pages/Users";
import NewPlace from "./places/pages/NewPlace";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Users} />
        <Route path="/places/new" exact component={NewPlace} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
