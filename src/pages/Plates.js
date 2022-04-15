import { useState, useEffect } from "react";
import CustomPolyLine from "../components/Map/PolyLine/CustomPolyline";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

import axios from "../api/axios";
const PLATES_URL = "/plates";

const Plates = () => {
  const [loading, setLoading] = useState(true);
  const [plates, setPlates] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get(PLATES_URL).then((response) => {
      setPlates(response.data.plates);
      setLoading(false);
      // console.log(plates);
    });
  }, []);

  return (
    <main className="bg-secondary">
      {loading ? (
        <div className="flex flex-col items-center justify-center w-full h-[95vh] lg:h-[90vh] pt-6 mx-auto lg:pt-0 text-orange-600">
          <ClimbingBoxLoader loading={loading} size={35} color={"#ea580c"} />
          <div className="mt-16">Daten werden geladen ...</div>
        </div>
      ) : (
        <CustomPolyLine plates={plates} />
      )}
    </main>
  );
};

export default Plates;
