import React from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import ProfileList from "./components/ProfileList";
import Admin from "./components/Admin";
import MapComponent from "./components/MapComponent";
import Map from "./components/Map";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profileList" element={<ProfileList />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/mapcomponent" element={<MapComponent />} />
        <Route path="/map" element={<Map />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
