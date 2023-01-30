import { Box, Tooltip, Typography } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
export default function Movie({
  movie,
  chunkIndex,
  index,
  selectMovie,
  isSelected,
}) {
  return (
    <Box
      className={`movie-card ${isSelected ? "selected" : ""}`}
      onClick={() => selectMovie(chunkIndex, index)}
    >
      <Box className="movie-poster" width="100%">
        <img src={movie.Poster} width="100%" alt={movie.Title} />
      </Box>
      <Box className="movie-name">
        <Tooltip title={movie.Title}>
          <Typography noWrap={true}>{movie.Title}</Typography>
        </Tooltip>
      </Box>
      <Box display="flex" width={60} justifyContent="space-between" mb={0.5}>
        <PlayCircleOutlineIcon />
        <AddCircleOutlineIcon />
      </Box>
    </Box>
  );
}
