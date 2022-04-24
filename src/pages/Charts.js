import { useState, useEffect } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
// import _ from "lodash";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
} from "chart.js";
import { Doughnut, PolarArea, Bar } from "react-chartjs-2";
import axios from "../api/axios";

ChartJS.register(
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

const CARS_URL = "/cars";

const Charts = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get(CARS_URL).then((response) => {
      setData(response.data.cars);
      setLoading(false);
    });
  }, []);

  const allDatas = data?.map((allData) => ({
    brand: allData.brand,
    type: allData.type,
    hp: allData.hp,
    ccm: allData.ccm,
    ps1: allData.ps1,
    ps2: allData.ps2,
  }));

  const brandTypes = allDatas
    ?.map((dataItem) => dataItem.brand) // get all brand types
    .filter((brandType, index, array) => array.indexOf(brandType) === index); // filter out duplicates

  const counts = brandTypes?.map((brandType) => ({
    type: brandType,
    count: allDatas?.filter((item) => item.brand === brandType).length,
    morePs2: data
      ?.filter((car) => car.brand === brandType)
      .filter((car) => car.hp < car.ps2).length,
    lessPs2: data
      ?.filter((car) => car.brand === brandType)
      .filter((car) => car.hp > car.ps2).length,
    exactPs2: data
      ?.filter((car) => car.brand === brandType)
      .filter((car) => car.hp === car.ps2).length,
  }));

  // console.log(counts);

  let hp = 0;
  let ps1 = 0;
  let ps2 = 0;
  let ccm = 0;

  data?.forEach((car) => {
    hp += car.hp;
    ps1 += Math.round(car.ps1);
    ps2 += Math.round(car.ps2);
    ccm += car.ccm * 1000;
  });

  // console.log(hp);
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

  const psChartOptions = {
    plugins: {
      title: {
        display: false,
        text: "mehr/weniger/genau (PS in Messung 2) wie angegeben",
      },
    },
    responsive: true,
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const psChartData = {
    labels: counts?.map((item) => item.type),
    datasets: [
      {
        label: "Autos mit mehr PS",
        data: counts?.map((item) => item.morePs2),
        backgroundColor: "rgb(110, 231, 183)",
        stack: "Stack 0",
      },
      {
        label: "Autos mit weniger PS",
        data: counts?.map((item) => item.lessPs2),
        backgroundColor: "rgb(255, 99, 132)",
        stack: "Stack 1",
      },
      {
        label: "wie angegeben",
        data: counts?.map((item) => item.exactPs2),
        backgroundColor: "rgb(53, 162, 235)",
        stack: "Stack 2",
      },
    ],
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
      {loading ? (
        <div className="flex flex-col items-center justify-center w-full h-[95vh] lg:h-[90vh] pt-6 mx-auto lg:pt-0 text-orange-600">
          <ClimbingBoxLoader loading={loading} size={35} color={"#ea580c"} />
          <div className="mt-16">Daten werden geladen ...</div>
        </div>
      ) : (
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
              <h2 className="text-center text-secondary">Alle Marken</h2>
              <Doughnut data={chartData} />
            </div>
            <div className="py-2 mb-2 rounded bg-primary-dark">
              <h2 className="text-center text-secondary">
                gemessene PS vs. angegebene (in Messung 2)
              </h2>
              <Bar options={psChartOptions} data={psChartData} />
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
      )}
    </main>
  );
};

export default Charts;
