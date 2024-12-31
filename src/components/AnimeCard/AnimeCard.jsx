import { useEffect, useState } from "react";
import { fetchAnimeList } from "../../utils/api";
import "./animecard.css";

const AnimeCard = () => {
  const [animeList, setAnimeList] = useState([]);
  const [activeCard, setActiveCard] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await fetchAnimeList();
      if (!error) setAnimeList(data);
      else console.error(error.message);
    };
    fetchData();
  }, []);

  const handleCardClick = (id) => {
    if (activeCard === id) {
      setActiveCard(null); 
    } else {
      setActiveCard(id); 
    }
  };

  return (
    <div className="anime-container">
      <div className="anime-count">Total Anime: {animeList.length}</div>
      <div className="mainCard">
        {animeList.map((anime) => (
          <div
            className={`card ${activeCard === anime.id ? "clicked" : ""}`}
            key={anime.id}
            onClick={() => handleCardClick(anime.id)}
          >
            <img src={anime.image_url} alt={anime.title} />
            <div className="card-content">
              <h2>{anime.title}</h2>
              <p>Rating: {anime.rating}/10</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimeCard;
