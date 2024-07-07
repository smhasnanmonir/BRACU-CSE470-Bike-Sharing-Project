"use client";

import {
  Circle,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Tooltip,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; // Re-uses images from ~leaflet package
import "leaflet-defaulticon-compatibility";
import { useEffect, useState } from "react";

function SystemMap({ coordinates }) {
  const position = coordinates;
  const fillBlueOptions = { fillColor: "#0484D6" };
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (map) {
      setInterval(function () {
        map.invalidateSize();
      }, 100);
    }
  }, [map]);
  const position2 = [23.77275, 90.42625];
  return (
    <div className="px-[5%]">
      <MapContainer
        className="md:h-[550px]  rounded-md"
        center={position}
        zoom={16}
        scrollWheelZoom={true}
        whenCreated={setMap}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position2} pathOptions={fillBlueOptions}>
          <Tooltip>Bike Pickup and Back point.</Tooltip>
        </Marker>
        <Circle center={position} pathOptions={fillBlueOptions} radius={250} />
      </MapContainer>
    </div>
  );
}

export default SystemMap;
