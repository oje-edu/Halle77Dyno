import cars from "../data/cars.json";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Cars = () => {
  return (
    <div>
      <Header />
      <div className="cars_table" id="top">
        <table>
          <thead>
            <tr>
              <th className="hide">Episode</th>
              <th className="hide">AutoNr.</th>
              <th>Marke</th>
              <th>Modell</th>
              <th className="hide">Hubraum</th>
              <th className="hide">PS</th>
              <th className="hide">KM</th>
              <th className="hide">BJ</th>
              <th className="hide">1. Messung</th>
              <th>2. Messung</th>
              <th className="hide">Bemerkung</th>
            </tr>
          </thead>
          <tbody>
            {cars.cars.map((car) => (
              <tr key={car.id}>
                <td className="hide">{car.episode}</td>
                <td className="hide">{car.id}</td>
                <td>{car.name}</td>
                <td>{car.model}</td>
                <td className="hide">{car.ccm}</td>
                <td className="hide">{car.hp}</td>
                <td className="hide">{car.km}</td>
                <td className="hide">{car.year}</td>
                <td className="hide">
                  <div
                    style={
                      car?.hp < car?.messung1[0] || car?.hp == car?.messung1[0]
                        ? { color: "green" }
                        : { color: "#de6e4a" }
                    }
                  >
                    {car?.messung1[0] > 0 ? (
                      <div>
                        {car?.messung1[0]}PS / ({car?.messung1[1]}U/min) <br />
                        {car?.messung1[2]}Nm / ({car?.messung1[3]}U/min)
                      </div>
                    ) : null}
                  </div>
                </td>
                <td>
                  <div
                    style={
                      car?.hp < car?.messung2[0] || car?.hp == car?.messung2[0]
                        ? { color: "green" }
                        : { color: "#de6e4a" }
                    }
                  >
                    {car?.messung2[0] > 0 ? (
                      <div>
                        {car?.messung2[0]}PS / ({car?.messung2[1]}U/min) <br />
                        {car?.messung2[2]}Nm / ({car?.messung2[3]}U/min)
                      </div>
                    ) : null}
                  </div>
                </td>
                <td className="hide">{car.comment}</td>
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
