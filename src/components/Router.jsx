import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';
import Diagnose from './Diagnose';
import SelfHealthCheck from './SelfHealthCheck';
import Home from './Home';
import Statistics from './Statistics';
import News from './News';
import Map from './Map';
import RequestATest from './RequestATest';

const RouterContentWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const ContentWrapper = styled.div`
  overflow: auto;
  height: calc(100% - 90px);
`;

export default function App() {
  return (
    <Router>
      <RouterContentWrapper>
        <ContentWrapper>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/map">
              <Map />
            </Route>

            <Route path="/diagnose">
              <Diagnose />
            </Route>

            <Route path="/self-health-check">
              <SelfHealthCheck />
            </Route>

            <Route path="/request-a-test">
              <RequestATest />
            </Route>

            <Route path="/news">
              <News />
            </Route>

            <Route path="/statistics">
              <Statistics />
            </Route>
          </Switch>
        </ContentWrapper>

        <Navbar />
      </RouterContentWrapper>
    </Router>
  );
}
