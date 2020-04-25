import React from 'react';
import styled from 'styled-components';

const MapWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const loadMapScript = initAutocomplete => {
  if (!window.google || (window.google && !window.google.maps)) {
    const index = window.document.getElementsByTagName('script')[0];
    const script = window.document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAQw7iUOQxJQYOp_XoyLJXnevV6JhF299A&libraries=places&callback=initAutocomplete`;
    script.async = true;
    script.defer = true;
    index.parentNode.insertBefore(script, index);
    window.initAutocomplete = initAutocomplete;
  } else {
    initAutocomplete();
  }
};

const initAutocomplete = () => {
  window.map = new window.google.maps.Map(document.getElementById('map'), {
    center: { lat: 46.777386, lng: 23.61562 },
    zoom: 17,
  });
};

class Map extends React.Component {
  componentDidMount = () => {
    loadMapScript(initAutocomplete);
  };

  render() {
    return <MapWrapper id="map" />;
  }
}

export default Map;
