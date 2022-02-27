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
              <th>1. Messung</th>
              <th>2. Messung</th>
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
                  {car.messung1[0]}PS / ({car.messung1[1]}U/min) <br />
                  {car.messung1[2]}Nm / ({car.messung1[3]}U/min)
                </td>
                <td>
                  {car.messung2[0]}PS / ({car.messung2[1]}U/min)
                  <br />
                  {car.messung2[2]}Nm / ({car.messung2[3]}U/min)
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
