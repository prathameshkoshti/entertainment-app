import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Sidebar from "./components/Sidebar";

const theme = createTheme({
  palette: {
    mode: "dark",
    divider: "var(--hr)",
    text: {
      primary: "var(--text)",
    },
    background: {
      default: "var(--background)",
      paper: "var(--paper-background)",
    },
  },
  components: {
    ListItem: {
      defaultProps: {
        disableRipple: true,
      },
    },
    ListItemButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Sidebar />
      </div>
    </ThemeProvider>
  );
}

export default App;
