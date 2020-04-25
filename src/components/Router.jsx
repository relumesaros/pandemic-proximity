import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';
import Diagnose from './Diagnose';
import SelfHealthCheck from './SelfHealthCheck';
import Home from "./Home";
import Statistics from './Statistics';
import News from './News';

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
              <Home/>
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
              <News />
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
