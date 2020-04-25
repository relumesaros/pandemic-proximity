import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';
import Diagnose from './Diagnose';
import SelfHealthCheck from './SelfHealthCheck';
import Home from "./Home";

const RouterContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default function App() {
  return (
    <Router>
      <RouterContentWrapper>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/map">
            <p>map</p>
          </Route>

          <Route path="/diagnose">
            <Diagnose/>
          </Route>

          <Route path="/self-health-check">
            <SelfHealthCheck/>
          </Route>

          <Route path="/news">
            <p>news</p>
          </Route>

          <Route path="/statistics">
            <p>statistics</p>
          </Route>
        </Switch>

        <Navbar/>
      </RouterContentWrapper>
    </Router>
  );
}
