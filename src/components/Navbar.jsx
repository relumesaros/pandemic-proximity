import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { withRouter } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';

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
    color: '#272D40',
    ...BottomNavigationActionStyle,
  },
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    const { pathname } = this.props.location;

    this.state = {
      value: pathname.replace(/\//g, ''),
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
    const path = value === 'home' ? '' : value;
    this.props.history.push(`/${path}`);
  };

  render() {
    const { value } = this.state;
    const { classes } = this.props;

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
            value="home"
            classes={{
              root: classes.BottomNavigationActionRoot,
              selected: classes.BottomNavigationActionSelected,
            }}
            icon={<HomeIcon />}
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
