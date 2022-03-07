import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import plates from "../data/plates.json";
import Header from "../components/Header";
import Footer from "../components/Footer";

const position = [51.1657065, 10.452764000000002];

const Map = () => {
  return (
    <div>
      <Header />
      <MapContainer center={position} zoom={6}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
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
                <h2>Kennzeichen: {plate.kz}</h2>
                <p>
                  {plate.name} ~{plate.distance}km zur Halle77
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <Footer />
    </div>
  );
};

export default Map;
