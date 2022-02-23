import episodes from "../data/episodes.json";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Episodes = () => {
  return (
    <div>
      <Header />
      <div className="table">
        <table>
          <tr>
            <th>Episode</th>
            <th>Titel</th>
            <th>Link</th>
          </tr>
          {episodes.episodes.map((episode) => (
            <tr key={episode.id}>
              <td>{episode.id}</td>
              <td>{episode.title}</td>
              <td>
                <button className="button">
                  <a
                    href={episode.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ansehen
                  </a>
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default Episodes;
