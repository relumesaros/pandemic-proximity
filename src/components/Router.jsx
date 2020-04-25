import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';
import Diagnose from './Diagnose';
import SelfHealthCheck from './SelfHealthCheck';
import Statistics from './Statistics';

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
        <div>
          <Switch>
            <Route exact path="/">
              <p>home</p>
            </Route>

            <Route path="/map">
              <p>map</p>
            </Route>

            <Route path="/diagnose">
              <Diagnose />
            </Route>

            <Route path="/self-health-check">
              <SelfHealthCheck />
            </Route>

            <Route path="/news">
              <p>news</p>
            </Route>

            <Route path="/statistics">
              <Statistics />
            </Route>
          </Switch>
        </div>

        <Navbar />
      </RouterContentWrapper>
    </Router>
  );
}
