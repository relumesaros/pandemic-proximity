import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { withRouter } from 'react-router-dom';

import HomeCustomIcon from '../customIcons/HomeCustomIcon';
import MapCustomIcon from '../customIcons/MapCustomIcon';
import DiagnoseCustomIcon from '../customIcons/DiagnoseCustomIcon';
import NewsCustomIcon from '../customIcons/NewsCustomIcon';
import StatisticsCustomIcon from '../customIcons/StatisticsCustomIcon';

const NavbarWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background: white;
  height: 90px;
  border-top: solid 1px rgba(0, 0, 0, 0.1);
`;

const BottomNavigationActionStyle = {
  margin: '5px 0 0 0!important',
  'margin-top': '5px!important',
  'min-width': '50px',
  'max-width': '70px',
  padding: '0',
};

const styles = {
  BottomNavigationRoot: {
    'padding-top': '10px',
  },
  BottomNavigationSelected: {
    padding: 0,
  },
  BottomNavigationActionRoot: {
    color: '#84899C',
    ...BottomNavigationActionStyle,
  },
  BottomNavigationActionSelected: {
    color: '#3B84FF',
    ...BottomNavigationActionStyle,
  },
};

class Navbar extends React.Component {
  handleChange = (event, value) => {
    this.props.history.push(`/${value}`);
  };

  render() {
    const { classes } = this.props;

    const { pathname } = this.props.location;
    const value = pathname.replace(/\//g, '');

    return (
      <NavbarWrapper>
        <BottomNavigation
          value={value}
          onChange={this.handleChange}
          showLabels
          classes={{
            root: classes.BottomNavigationRoot,
          }}
        >
          <BottomNavigationAction
            label="Home"
            value=""
            classes={{
              root: classes.BottomNavigationActionRoot,
              selected: classes.BottomNavigationActionSelected,
            }}
            icon={<HomeCustomIcon />}
          />

          <BottomNavigationAction
            label="Map"
            value="map"
            classes={{
              root: classes.BottomNavigationActionRoot,
              selected: classes.BottomNavigationActionSelected,
            }}
            icon={<MapCustomIcon />}
          />

          <BottomNavigationAction
            label="Diagnose"
            value="diagnose"
            classes={{
              root: classes.BottomNavigationActionRoot,
              selected: classes.BottomNavigationActionSelected,
            }}
            icon={<DiagnoseCustomIcon />}
          />

          <BottomNavigationAction
            label="News"
            value="news"
            classes={{
              root: classes.BottomNavigationActionRoot,
              selected: classes.BottomNavigationActionSelected,
            }}
            icon={<NewsCustomIcon />}
          />

          <BottomNavigationAction
            label="Statistics"
            value="statistics"
            classes={{
              root: classes.BottomNavigationActionRoot,
              selected: classes.BottomNavigationActionSelected,
            }}
            icon={<StatisticsCustomIcon />}
          />
        </BottomNavigation>
      </NavbarWrapper>
    );
  }
}

export default withRouter(withStyles(styles)(Navbar));
