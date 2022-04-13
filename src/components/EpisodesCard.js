const EpisodesCard = ({ episode }) => {
  return (
    <div className="card">
      <a href={episode.episodeUrl} target="_blank" rel="noopener noreferrer">
        <img
          alt={episode.episodeUrl}
          src={episode.thumbnailUrl}
          className="object-cover w-full h-32 sm:h-48 md:h-64"
        />
        <div className="m-2">
          <span className="text-sm font-bold text-primary-dark">
            #{episode.episodeNr}
          </span>
          <span className="block text-xs text-primary-dark">
            {episode.title}
          </span>
        </div>
      </a>
    </div>
  );
};

export default EpisodesCard;
