import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import Topnav from "./Topnav";

const containerStyle = {
  width: "1100px",
  height: "600px",
};

const Map = ({ address }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCQvqVFqTiy8WgyQXH5TmYtUw3JzBj4fXk",
  });

  const center = {
    lat: 18.5207712,
    lng: 73.775924,
  };

  return isLoaded ? (
    <div>
      <Topnav />
      <div className="py-4 px-56">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          <Marker position={center} />
        </GoogleMap>
      </div>
    </div>
  ) : (
    <p>Loading map...</p>
  );
};

export default Map;
