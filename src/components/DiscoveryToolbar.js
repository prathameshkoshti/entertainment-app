import { Toolbar, Box } from "@mui/material";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LightModeIcon from "@mui/icons-material/LightMode";
import SearchInput from "./SearchInput";
import IconButton from "@mui/material/IconButton";

export default function DiscoveryToolbar({ searchMovies }) {
  return (
    <Toolbar className="discovery-toolbar">
      <Box
        sx={{ width: "100%" }}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <SearchInput searchMovies={searchMovies} />
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          ml={1}
        >
          <IconButton>
            <LightModeIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Box>
      </Box>
    </Toolbar>
  );
}
