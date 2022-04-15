import { useState, useEffect } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import _ from "lodash";

import axios from "../api/axios";
import EpisodesCard from "../components/EpisodesCard";
const EPISODEN_URL = "/episodes";

const Episodes = () => {
  const [loading, setLoading] = useState(true);
  const [episodes, setEpisodes] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get(EPISODEN_URL).then((response) => {
      setEpisodes(response.data.episodes);
      setLoading(false);
    });
  }, []);

  const sortedResponse = _.orderBy(episodes, (e) => e.episodeNr, ["desc"]);

  return (
    <main className="px-8 pt-8 pb-16 md:px-16 bg-primary-dark">
      <h4 className="text-4xl font-bold text-secondary font-text">Episoden</h4>
      {loading ? (
        <div className="flex flex-col items-center justify-center w-full h-[95vh] lg:h-[90vh] pt-6 mx-auto lg:pt-0 text-orange-600">
          <ClimbingBoxLoader loading={loading} size={35} color={"#ea580c"} />
          <div className="mt-16">Daten werden geladen ...</div>
        </div>
      ) : (
        <div className="grid gap-6 mt-8 md:grid-cols-4">
          {sortedResponse?.map((episode) => (
            <div
              key={episode.episodeNr}
              className="overflow-hidden border rounded shadow-md bg-secondary border-secondary"
            >
              <EpisodesCard episode={episode} />
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default Episodes;
