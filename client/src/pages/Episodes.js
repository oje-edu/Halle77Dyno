import { useState, useEffect } from "react";
import ScrollArrow from "../components/ScrollArrow";
import "./episodes.css";

import axios from "../api/axios";
const EPISODEN_URL = "/episodes";

const Episodes = () => {
  const [episodes, setEpisodes] = useState(null);

  useEffect(() => {
    axios.get(EPISODEN_URL).then((response) => {
      setEpisodes(response.data);
      //console.log(response.data);
    });
  }, []);

  if (!episodes) return null;

  return (
    <div className="gridWrapper">
      <div className="tablegrid">
        {episodes?.map((episode) => (
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
