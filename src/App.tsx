import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Button } from 'components/atoms/SampleButton';
import { Button as ButtonJS} from 'components/atoms/SampleButton';
import SampleLayout from 'components/atoms/SampleLayout';

function App() {
  return (

    <div className="App">

      <Router>

      <Button size={"small"} onClick={() =>{} } label="Log in" />
      <ButtonJS size={"small"} onClick={() =>{} } label="Log in" />
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/samplelayout">SampleLayout</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>

          <hr />

          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/samplelayout">
              <SampleLayout title={"test"} imageUrl={"imageUrl"} actions={()=>{}}/>
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Router>

    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}


function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

export default App;
