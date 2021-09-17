import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import GeoLocate from "./GeoLocate";

function LeafletWebMap() {

    const [center, setCenter] = useState([51.505, -0.09]);
    
    return (
        <MapContainer 
            center={center}
            zoom = {13 }
            scrollWheelZoom = { false }
            style={{ height: "88vh"}}
        >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <GeoLocate/>
        </MapContainer>
    )
}

export default LeafletWebMap;