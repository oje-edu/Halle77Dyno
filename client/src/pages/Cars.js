import cars from "../data/cars.json";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Cars = () => {
  return (
    <div>
      <Header />
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Episode</th>
              <th>Auto-Nr.</th>
              <th>Marke</th>
              <th>Modell</th>
              <th>Hubraum</th>
              <th>PS</th>
              <th>KM</th>
              <th>BJ</th>
              <th>PS / Umin</th>
              <th>Nmax / Umin</th>
              <th>PS / Umin</th>
              <th>Nmax / Umin</th>
              <th>Bemerkung</th>
            </tr>
          </thead>
          <tbody>
            {cars.cars.map((car) => (
              <tr key={car.id}>
                <td>{car.episode}</td>
                <td>{car.id}</td>
                <td>{car.name}</td>
                <td>{car.model}</td>
                <td>{car.ccm}</td>
                <td>{car.hp}</td>
                <td>{car.km}</td>
                <td>{car.year}</td>
                <td>
                  {car.ps1} ({car.ps1umin})
                </td>
                <td>
                  {car.nm1} ({car.nm1umin})
                </td>
                <td>
                  {car.ps2} ( {car.ps2umin})
                </td>
                <td>
                  {car.nm2} ( {car.nm2umin})
                </td>
                <td>{car.comment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default Cars;
