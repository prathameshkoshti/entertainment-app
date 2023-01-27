import SearchIcon from "@mui/icons-material/Search";
import PlaylistIcon from "@mui/icons-material/PlaylistPlay";
import TvIcon from "@mui/icons-material/Tv";
import MyListIcon from "@mui/icons-material/FormatListBulleted";
import RecommendedIcon from "@mui/icons-material/FavoriteBorder";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import WatchLaterIcon from "@mui/icons-material/History";
import MovieIcon from "@mui/icons-material/Movie";

const sidebarItems = [
  {
    id: 0,
    isDivider: true,
  },
  {
    id: 1,
    label: "Discover",
    icon: <SearchIcon />,
    isDivider: false,
  },
  {
    id: 2,
    label: "Playlist",
    icon: <PlaylistIcon />,
    isDivider: false,
  },
  {
    id: 3,
    label: "Movies",
    icon: <MovieIcon />,
    isDivider: false,
  },
  {
    id: 4,
    label: "TV Shows",
    icon: <TvIcon />,
    isDivider: false,
  },
  {
    id: 5,
    label: "My List",
    icon: <MyListIcon />,
    isDivider: false,
  },
  {
    id: 6,
    isDivider: true,
  },
  {
    id: 7,
    label: "Watch Later",
    icon: <WatchLaterIcon />,
    isDivider: false,
  },
  {
    id: 8,
    label: "Recommended",
    icon: <RecommendedIcon />,
    isDivider: false,
  },
  {
    id: 9,
    isDivider: true,
  },
  {
    id: 10,
    label: "Settings",
    icon: <SettingsIcon />,
    isDivider: false,
  },
  {
    id: 11,
    label: "Logout",
    icon: <LogoutIcon />,
    isDivider: false,
  },
];

export default sidebarItems;
