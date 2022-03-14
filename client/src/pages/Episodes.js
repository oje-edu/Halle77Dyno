import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

const baseURL = "https://halle77.oje.guru/api/episodes";

const Episodes = () => {
  const [episodes, setEpisodes] = useState(null);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setEpisodes(response.data);
      //console.log(response.data);
    });
  }, []);

  if (!episodes) return null;

  return (
    <div>
      <Header />
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
      <Footer />
    </div>
  );
};

export default Episodes;
