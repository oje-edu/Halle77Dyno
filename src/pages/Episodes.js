import { useState, useEffect } from "react";
import _ from "lodash";
import ScrollArrow from "../components/ScrollArrow";
import "./episodes.css";

import axios from "../api/axios";
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
    <div className="gridWrapper">
      <div className="tablegrid">
        {sortedResponse?.map((episode) => (
          <a
            key={episode.id}
            href={episode.episodeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <figure>
              <img alt="" src={episode.thumbnailUrl} />
              <figcaption>{episode.title}</figcaption>
            </figure>
          </a>
        ))}
      </div>
      <ScrollArrow />
    </div>
  );
};

export default Episodes;
