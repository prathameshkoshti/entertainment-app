import { Typography } from "@mui/material";
import { Box, IconButton } from "@mui/material";
import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";

export default function MovieDesc({ movie, closeDescription, width }) {
  return (
    <Box className="movie-desc-wrapper">
      <Box
        className="movie-description"
        width={width}
        component={motion.div}
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{
          duration: 0.4,
        }}
      >
        <Box className="close-desc">
          <IconButton className="start-adornment" onClick={closeDescription}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box className="movie-poster">
          <img src={movie.Poster} alt={movie.Title} />
        </Box>
        <Box
          className="movie-details"
          component={motion.div}
          initial={{ opacity: 0, translateY: 40 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.3,
            ease: [0.17, 0.17, 0.17, 0.17],
          }}
        >
          <Typography mb={1.5} variant="h5">
            {movie.Title}
          </Typography>
          <Box
            mb={2}
            className="movie-rating"
            display="flex"
            alignItems="center"
          >
            <Box className="rating-container">
              <Box
                component={motion.div}
                className="rating-indicator"
                width={movie.imdbRating > 0 ? movie.imdbRating / 10 : 0}
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1, originX: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              ></Box>
            </Box>
            {movie.imdbRating}/10
          </Box>
          <Box mb={2} className="movie-attr">
            <Box className="movie-release-year">Year: </Box>
            <Box>{movie.Year}</Box>
            <Box className="movie-runtime">Running time: </Box>
            <Box>{movie.Runtime}</Box>
            <Box className="movie-director">Directed by: </Box>
            <Box>{movie.Director}</Box>
            <Box className="movie-language">Language: </Box>
            <Box>{movie.Language}</Box>
          </Box>
          <Box mb={2} className="movie-synopsis">
            {movie.Plot}
          </Box>
          <Box className="movie-cta">
            {movie.ComingSoon ? null : (
              <Button className="primary">Play Movie</Button>
            )}
            <Button className="secondary">Watch Trailer</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
