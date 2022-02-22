import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import plates from "./data/plates.json";
import "./App.css";

const position = [51.5072, 7.49142];

export default function App() {
  return (
    <MapContainer center={position} zoom={6}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
      {plates.plates.map((plate) => (
        <Marker
          key={plate.kz}
          position={[
            plate.geometry.coordinates[0],
            plate.geometry.coordinates[1],
          ]}
        >
          <Popup>
            <div>
              <h2>{plate.kz}</h2>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
