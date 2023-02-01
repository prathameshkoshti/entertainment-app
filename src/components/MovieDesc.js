import { Box } from "@mui/system";
import React from "react";

export default function MovieDesc({ movie }) {
  return <Box>{movie.Title}</Box>;
}
