import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "500px",
  height: "400px",
};

const MapComponent = ({ address }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCQvqVFqTiy8WgyQXH5TmYtUw3JzBj4fXk",
  });

  const center = {
    lat: 51.5281798,
    lng: -0.4312361,
  };

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
      <Marker position={center} />
    </GoogleMap>
  ) : (
    <p>Loading map...</p>
  );
};

export default MapComponent;
