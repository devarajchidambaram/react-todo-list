import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from  './components/login'
import Todo from './components/todo'

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.


export default function BasicExample() {
  return (
    <Router>
      <div>
        {/* <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/todo">Tasks</Link>
          </li>
        </ul> */}
        <hr />

        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/todo">
            <Todo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



function About() {
    return <h2>About</h2>;
  }