import React, { Component } from 'react';

class GoogleMap extends Component {
  // componentDidMount gets called when the component has been rendered.
  componentDidMount() {
    new google.maps.Map(this.refs.map, { // renders an embedded map into the specified element.
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }
  
  render() {
    // makes use of "ref" in React;
    // allows us to get reference to an HTML element that has been rendered on the screen.
    // I can refer to this now by this.refs.map.
    return <div ref="map" />
  }
}

export default GoogleMap;
