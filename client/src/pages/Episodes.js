import episodes from "../data/episodes.json";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Episodes = () => {
  return (
    <div>
      <Header />
      {episodes.episodes.map((episode) => (
        <table className="table" key={episode.id}>
          <tr>
            <th>Episode</th>
            <th>Titel</th>
            <th>Link</th>
          </tr>
          <tr>
            <td>{episode.id}</td>
            <td>{episode.title}</td>
            <td>
              <a href={episode.url} target="_blank" rel="noopener noreferrer">
                {episode.url}
              </a>
            </td>
          </tr>
        </table>
      ))}
      <Footer />
    </div>
  );
};

export default Episodes;
