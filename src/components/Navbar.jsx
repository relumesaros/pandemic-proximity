import React from 'react';
import styled from 'styled-components';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { withRouter } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';

import MapCustomIcon from '../customIcons/MapCustomIcon';
import DiagnoseCustomIcon from '../customIcons/DiagnoseCustomIcon';
import NewsCustomIcon from '../customIcons/NewsCustomIcon';
import StatisticsCustomIcon from '../customIcons/StatisticsCustomIcon';

const NavbarWrapper = styled.div`
  bottom: 0;
  width: 100%;
  height: 90px;
  position: fixed;
  border-top: solid 1px rgba(0, 0, 0, 0.1);
`;

class Navbar extends React.Component {
  state = {
    value: 'home',
  };

  handleChange = (event, value) => {
    console.error('value', value);
    this.setState({ value });

    const path = value === 'home' ? '' : value;

    // eslint-disable-next-line react/prop-types
    this.props.history.push(`/${path}`);
  };

  render() {
    const { value } = this.state;

    return (
      <NavbarWrapper>
        <BottomNavigation value={value} onChange={this.handleChange} showLabels>
          <BottomNavigationAction
            label="Home"
            value="home"
            icon={<HomeIcon />}
          />

          <BottomNavigationAction
            label="Map"
            value="map"
            icon={<MapCustomIcon />}
          />

          <BottomNavigationAction
            label="Diagnose"
            value="diagnose"
            icon={<DiagnoseCustomIcon />}
          />

          <BottomNavigationAction
            label="News"
            value="news"
            icon={<NewsCustomIcon />}
          />

          <BottomNavigationAction
            label="Statistics"
            value="statistics"
            icon={<StatisticsCustomIcon />}
          />
        </BottomNavigation>
      </NavbarWrapper>
    );
  }
}

export default withRouter(Navbar);
