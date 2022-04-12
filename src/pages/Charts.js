import { useState, useEffect } from "react";
// import _ from "lodash";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import axios from "../api/axios";

ChartJS.register(ArcElement, Tooltip, Legend);

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
  // console.log(counts);
  // const sortedCounts = _.orderBy(counts, (r) => r.count, ["desc"]);

  const chartData = {
    labels: counts?.map((item) => item.type),
    datasets: [
      {
        data: counts?.map((item) => item.count),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
      },
    ],
    responsive: true
  };

  console.log(chartData)


  return (
    <main className="bg-secondary">
      <h1 className="pt-2 text-4xl font-bold text-center text-primary-dark">
        Statistiken
      </h1>
      <div className="py-2 mx-auto rounded md:w-2/5 bg-primary-dark">
        <h2 className="text-center text-secondary">Marken</h2>
        <div className="flex flex-col px-2">
          {/* <ul>
          {sortedCounts?.map((count) => (

            <li>
              {count.type} - {count.count}
            </li>
          ))}
        </ul> */}
          <Doughnut data={chartData} />
        </div>
      </div>
    </main>
  );
};

export default Charts;
