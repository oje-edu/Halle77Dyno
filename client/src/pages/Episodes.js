import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollArrow from "../components/ScrollArrow";
import "./episodes.css";

import axios from "../api/axios";
const EPISODES_URL = "/episodes";

const Episodes = () => {
  const [episodes, setEpisodes] = useState(null);
  useEffect(() => {
    axios.get(EPISODES_URL).then((response) => {
      setEpisodes(response.data);
      //console.log(response.data);
    });
  }, []);

  if (!episodes) return null;

  return (
    <div className="gridWrapper">
      <div className="tablegrid">
        {episodes.map((episode) => (
          <a
            href={episode.episodeUrl}
            target="_blank"
            rel="noopener noreferrer"
            key={episode.id}
          >
            <figure>
              <img src={episode.thumbnailUrl} />
              <figcaption>{episode.title}</figcaption>
            </figure>
          </a>
        ))}
      </div>
      {/* <table>
          <thead>
            <tr>
              <th>Episode</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {episodes.map((episode) => (
              <tr key={episode.id}>
                <td>{episode.id}</td>
                <td>
                  <a
                    href={episode.episodeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <figure>
                      <img src={episode.thumbnailUrl} />
                      <figcaption>{episode.title}</figcaption>
                    </figure>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table> */}

      <ScrollArrow />
    </div>
  );
};

export default Episodes;
