import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { IconButton, Box } from "@mui/material";
import { motion } from "framer-motion";

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
    <Box sx={{ width: "100%" }} display="flex" className="search-container">
      <Box className="search-button">
        <IconButton
          className="start-adornment"
          onClick={showSearchbar}
          disabled={searchbarVisible}
        >
          <SearchIcon />
        </IconButton>
      </Box>
      <motion.div
        initial={{ opacity: 0, scaleX: 0, originX: 0 }}
        className="searchfield"
        animate={
          searchbarVisible
            ? { opacity: 1, scaleX: 1, originX: 0 }
            : { opacity: 0, scaleX: 0, originX: 0 }
        }
        transition={{ duration: 0.3 }}
      >
        <input type="text" onChange={handleSearch} value={searchText} />
        <IconButton
          aria-label="toggle password visibility"
          onClick={hideSearchbar}
          className="end-adornment"
        >
          <CloseIcon />
        </IconButton>
      </motion.div>
    </Box>
  );
}
