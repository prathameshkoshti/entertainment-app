import { useEffect, useState, useRef, useCallback } from "react";
import { Box, Typography } from "@mui/material";
import Movie from "./Movie";
import MovieDesc from "./MovieDesc";

export default function Movies({ movies }) {
  const [itemsPerRow, setItemsPerRow] = useState(4);
  const [movieChunks, setMovieChunks] = useState([]);
  const [itemWidth, setItemWidth] = useState(200);
  const [containerWidth, setContainerWidth] = useState(0);
  const movieContainer = useRef(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedPartition, setSelectedPartition] = useState(null);
  const [selectedMovieIndex, setMovieIndex] = useState(null);

  const onWindowResize = useCallback(() => {
    // get width of movies list container and accordingly get items per row
    if (movieContainer && movieContainer.current) {
      const width = movieContainer.current.clientWidth;
      if (width <= 480) {
        setItemWidth(160);
      }
      setContainerWidth(width);
    } else {
      setItemsPerRow(0);
    }
  }, []);
  useEffect(() => {
    window.addEventListener("resize", onWindowResize);

    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  }, [onWindowResize]);

  useEffect(() => {
    setItemsPerRow(parseInt(containerWidth / itemWidth));
  }, [containerWidth, itemWidth]);

  useEffect(() => {
    onWindowResize();
  }, [onWindowResize]);

  const selectMovie = (chunkIndex, movieIndex) => {
    if (chunkIndex === selectedPartition && movieIndex === selectedMovieIndex) {
      closeDescription();
    } else {
      setSelectedPartition(chunkIndex);
      setMovieIndex(movieIndex);
      setSelectedMovie(movieChunks[chunkIndex][movieIndex]);
    }
  };

  const closeDescription = () => {
    setSelectedPartition(null);
    setMovieIndex(null);
    setSelectedMovie(null);
  };

  useEffect(() => {
    // divide movie list as per required row items
    if (itemsPerRow) {
      const chunks = [];
      for (let i = 0; i < movies.length; i = i + itemsPerRow) {
        const chunk = movies.slice(i, i + itemsPerRow);
        chunks.push(chunk);
      }

      setMovieChunks(chunks);
    }
  }, [itemsPerRow, movies]);

  return (
    <Box className="movies" ref={movieContainer}>
      {movieChunks.length ? (
        movieChunks.map((chunk, chunkIndex) => {
          return (
            <Box key={`chunk_${chunkIndex}`}>
              <div className={`desc-placeholder-${chunkIndex}`}>
                {selectedMovie !== null && chunkIndex === selectedPartition ? (
                  <MovieDesc
                    movie={selectedMovie}
                    closeDescription={closeDescription}
                  />
                ) : null}
              </div>
              <Box display="flex" flexWrap="wrap" className="movies-row">
                {chunk.map((movie, index) => (
                  <Movie
                    chunkIndex={chunkIndex}
                    movie={movie}
                    index={index}
                    key={`Movie_${index}`}
                    selectMovie={selectMovie}
                    isSelected={
                      selectedMovieIndex === index &&
                      selectedPartition === chunkIndex
                    }
                  />
                ))}
              </Box>
            </Box>
          );
        })
      ) : (
        <Typography variant="h6">No result found for your search.</Typography>
      )}
    </Box>
  );
}
