"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import { icon as leafletIcon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { destinations } from "@/lib/data/destinations";

// Leaflet requires custom icon setup in Next.js (no direct CSS asset pipeline).
const markerIcon = leafletIcon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const routeCoordinates: [number, number][] = destinations.map((destination) => [
  destination.lat,
  destination.lng,
]);

export default function TripMap() {
  useEffect(() => {
    // Ensure Leaflet runs only in the browser
  }, []);

  return (
    <MapContainer
      center={[48.5, 15.0]}
      zoom={5}
      style={{ height: "500px", width: "100%", borderRadius: "12px" }}
      className="z-10"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />

      {/* Línea de ruta */}
      <Polyline
        positions={routeCoordinates}
        pathOptions={{
          color: "#e8b86d",
          weight: 3,
          opacity: 0.8,
          dashArray: "8, 4",
        }}
      />

      {/* Marcadores por destino */}
      {destinations.map((destination) => (
        <Marker
          key={destination.id}
          position={[destination.lat, destination.lng]}
          icon={markerIcon}
        >
          <Popup>
            <div style={{ minWidth: "160px" }}>
              <div style={{ fontWeight: "bold", marginBottom: "4px" }}>
                {destination.countryFlag} {destination.name}
              </div>
              <div style={{ fontSize: "12px", color: "#666", marginBottom: "4px" }}>
                {destination.days}
              </div>
              <div style={{ fontSize: "12px", color: "#666" }}>
                {destination.nights === 1 ? "1 noche" : `${destination.nights} noches`}
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
