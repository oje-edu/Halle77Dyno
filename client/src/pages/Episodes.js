import { useState, useEffect } from "react";
import axios from "../api/axios";
import ScrollArrow from "../components/ScrollArrow";

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
    <div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Episode</th>
              <th>Titel</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {episodes.map((episode) => (
              <tr key={episode.id}>
                <td>{episode.id}</td>
                <td>{episode.title}</td>
                <td>
                  <button className="button">
                    <a
                      href={episode.episodeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ansehen
                    </a>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ScrollArrow />
    </div>
  );
};

export default Episodes;
