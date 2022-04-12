import { useState, useEffect } from "react";
import _ from "lodash";

import axios from "../api/axios";
import EpisodesCard from "../components/EpisodesCard";
const EPISODEN_URL = "/episodes";

const Episodes = () => {
  const [episodes, setEpisodes] = useState(null);

  useEffect(() => {
    axios.get(EPISODEN_URL).then((response) => {
      setEpisodes(response.data.episodes);
      // console.log(response.data.data);
    });
  }, []);

  if (!episodes) return null;

  const sortedResponse = _.orderBy(episodes, (e) => e.episodeNr, ["desc"]);

  return (
    <main className="px-8 pt-8 md:px-16 bg-primary-dark">
      <h4 className="text-4xl font-bold text-secondary font-text">Episoden</h4>

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
    </main>
  );
};

export default Episodes;
