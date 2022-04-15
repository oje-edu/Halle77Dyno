import { useState, useEffect } from "react";
// import _ from "lodash";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  RadialLinearScale,
} from "chart.js";
import { Doughnut, PolarArea } from "react-chartjs-2";
import axios from "../api/axios";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const CARS_URL = "/cars";

const Charts = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(CARS_URL).then((response) => {
      setData(response.data.cars);
      // console.log(response.data.cars);
    });
  }, []);

  if (!data) return null;

  const mediaTypes = data
    ?.map((dataItem) => dataItem.brand) // get all media types
    .filter((mediaType, index, array) => array.indexOf(mediaType) === index); // filter out duplicates

  const counts = mediaTypes?.map((mediaType) => ({
    type: mediaType,
    count: data?.filter((item) => item.brand === mediaType).length,
  }));

  let hp = 0;
  let ps1 = 0;
  let ps2 = 0;
  let ccm = 0;

  data.forEach((car) => {
    hp += car.hp;
    ps1 += Math.round(car.ps1);
    ps2 += Math.round(car.ps2);
    ccm += car.ccm * 1000;
  });

  // console.log(ps1 + "PS")
  // const sortedCounts = _.orderBy(counts, (r) => r.count, ["desc"]);

  const chartData = {
    labels: counts?.map((item) => item.type),
    datasets: [
      {
        data: counts?.map((item) => item.count),
        backgroundColor: [
          "rgba(220, 38, 38,0.5)",
          "rgba(101, 163, 13,0.5)",
          "rgba(153, 246, 228,0.5)",
          "rgba(34, 211, 238,0.5)",
          "rgba(162, 28, 175,0.5)",
          "rgba(236, 72, 153,0.5)",
        ],
        borderWidth: 0,
      },
    ],
    responsive: true,
  };

  const psData = {
    labels: ["PS lt. Hersteller", "PS Messung 1", "PS Messung 2"],
    datasets: [
      {
        data: [hp, ps1, ps2],
        backgroundColor: [
          "rgba(37, 150, 190, 0.5)",
          "rgba(14, 116, 144, 0.5)",
          "rgba(162, 28, 175, 0.5)",
        ],
        borderWidth: 0,
      },
    ],
    responsive: true,
  };

  return (
    <main className="pb-16 bg-secondary">
      <h1 className="pt-2 text-4xl font-bold text-center text-primary-dark">
        Statistiken
      </h1>
      <div className="mx-auto rounded md:w-2/5 ">
        <div className="flex flex-col px-2">
          {/* <ul>
          {sortedCounts?.map((count) => (

            <li>
              {count.type} - {count.count}
            </li>
          ))}
        </ul> */}
          <div className="py-2 mb-2 rounded bg-primary-dark">
            <h2 className="text-center text-secondary">Marken</h2>
            <Doughnut data={chartData} />
          </div>
          <div className="py-2 mb-2 rounded bg-primary-dark">
            <h2 className="mt-4 text-center text-secondary">
              Gemessene PS (gesamt)
            </h2>
            <PolarArea data={psData} />
          </div>
          <div className="py-2 mb-2 rounded bg-primary-dark">
            <h2 className="mt-4 text-center text-secondary">
              Hubraum (gesamt)
            </h2>
            <div className="text-center">{ccm.toLocaleString()} ccm³</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Charts;
