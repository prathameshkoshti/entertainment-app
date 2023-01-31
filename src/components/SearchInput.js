import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { IconButton, Box } from "@mui/material";

export default function SearchInput({ searchMovies }) {
  const [searchbarVisible, setSearchbarVisible] = useState(false);
  const [searchText, setSearchText] = useState("");

  const showSearchbar = () => {
    setSearchbarVisible(true);
  };

  const hideSearchbar = () => {
    setSearchbarVisible(false);
  };

  const handleSearch = (event) => {
    setSearchText(event.target.value);
    searchMovies(event.target.value);
  };

  return (
    <Box sx={{ width: "100%" }}>
      {!searchbarVisible && (
        <IconButton onClick={showSearchbar}>
          <SearchIcon />
        </IconButton>
      )}
      {searchbarVisible && (
        <Box
          sx={{ width: "100%" }}
          display="flex"
          alignItems="center"
          className="searchfield"
        >
          <IconButton className="start-adornment" disabled>
            <SearchIcon />
          </IconButton>
          <input type="text" onChange={handleSearch} value={searchText}/>
          <IconButton
            aria-label="toggle password visibility"
            onClick={hideSearchbar}
            className="end-adornment"
          >
            <CloseIcon />
          </IconButton>
        </Box>
      )}
    </Box>
  );
}
