import { useState, useEffect } from "react";
import Table from "../components/Table";

import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

import axios from "../api/axios";
const CARS_URL = "/cars";

const Messungen = () => {
  const [loading, setLoading] = useState(true);
  const [tableData, setTableData] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get(CARS_URL).then((response) => {
      setTableData(response.data.cars);
      setLoading(false);
    });
  }, []);

  return (
    <main className="bg-primary-dark">
      {loading ? (
        <div className="flex flex-col items-center justify-center w-full h-[95vh] lg:h-[90vh] pt-6 mx-auto lg:pt-0 text-orange-600">
          <ClimbingBoxLoader loading={loading} size={35} color={"#ea580c"} />
          <div className="mt-16">Daten werden geladen ...</div>
        </div>
      ) : (
        <Table tableData={tableData} />
      )}
    </main>
  );
};

export default Messungen;
