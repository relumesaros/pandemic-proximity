import React from 'react';
import styled from 'styled-components';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from 'react-router-dom';

const NavbarWrapper = styled.div`
  width: 100%;
  height: 90px;
  border-top: solid 1px rgba(0, 0, 0, 0.1);
`;

class Navbar extends React.Component {
  state = {
    value: 'home',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <NavbarWrapper>
        <BottomNavigation value={value} onChange={this.handleChange}>
          <Link to="/home">
            <BottomNavigationAction
              label="Home"
              value="home"
              icon={<RestoreIcon />}
            />
          </Link>

          <Link to="/map">
            <BottomNavigationAction
              label="Map"
              value="map"
              icon={<LocationOnIcon />}
            />
          </Link>

          <Link to="/diagnose">
            <BottomNavigationAction
              label="Diagnose"
              value="diagnose"
              icon={<FavoriteIcon />}
            />
          </Link>

          <Link to="/news">
            <BottomNavigationAction
              label="News"
              value="news"
              icon={<FavoriteIcon />}
            />
          </Link>

          <Link to="/statistics">
            <BottomNavigationAction
              label="Folder"
              value="folder"
              icon={<FavoriteIcon />}
            />
          </Link>
        </BottomNavigation>
      </NavbarWrapper>
    );
  }
}

export default Navbar;
