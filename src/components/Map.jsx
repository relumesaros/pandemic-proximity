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

class Map extends React.Component {
  searchBox = null;

  initAutocomplete = () => {
    window.map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 46.777386, lng: 23.61562 },
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false,
      zoom: 17,
    });

    const input = document.getElementById('pac-input');

    if (this.initializedAutocomplete) {
      return;
    }

    if (!input) {
      setTimeout(this.initAutocomplete, 500);
      return;
    }

    this.initializedAutocomplete = true;

    this.searchBox = new window.google.maps.places.SearchBox(input);

    let markers = [];

    this.searchBox.addListener('places_changed', () => {
      const places = this.searchBox.getPlaces();

      if (places.length === 0) {
        return;
      }

      // Clear out the old markers.
      markers.forEach(marker => {
        marker.setMap(null);
      });
      markers = [];

      // For each place, get the icon, name and location.
      const bounds = new window.google.maps.LatLngBounds();
      places.forEach(place => {
        if (!place.geometry) {
          return;
        }
        const icon = {
          url: place.icon,
          size: new window.google.maps.Size(71, 71),
          origin: new window.google.maps.Point(0, 0),
          anchor: new window.google.maps.Point(17, 34),
          scaledSize: new window.google.maps.Size(25, 25),
        };

        // Create a marker for each place.
        markers.push(
          new window.google.maps.Marker({
            map: window.map,
            icon,
            title: place.name,
            position: place.geometry.location,
          })
        );

        if (place.geometry.viewport) {
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      window.map.fitBounds(bounds);
    });
  };

  componentDidMount = () => {
    loadMapScript(this.initAutocomplete);
  };

  render() {
    return (
      <>
        <input
          id="pac-input"
          className="controls"
          type="text"
          placeholder="Search Box"
        />
        <MapWrapper id="map" />
      </>
    );
  }
}

export default Map;
