import { useEffect, useState } from "react";
import DiscoveryToolbar from "../components/DiscoveryToolbar";
import Movies from "../components/Movies";

export default function Discover() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  async function getMovies() {
    const response = await fetch("movies.json").then((res) => res.json());
    if (response && response.length) {
      setMovies(response);
      setFilteredMovies(response);
    }
  }
  useEffect(() => {
    getMovies();
  }, []);

  const searchMovies = (searchKeywords) => {
    if (searchKeywords !== "") {
      const filteredMovies = movies.filter((movie) => {
        return movie.Title.toLowerCase().includes(searchKeywords);
      });
      if (filteredMovies.length) {
        setFilteredMovies(filteredMovies);
      } else {
        
      }
    } else {
      setFilteredMovies(movies);
    }
  };

  return (
    <div>
      <DiscoveryToolbar searchMovies={searchMovies} />
      <Movies movies={filteredMovies} />
    </div>
  );
}
