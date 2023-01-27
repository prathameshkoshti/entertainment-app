import { useState } from "react";
import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Typography,
  Toolbar,
  Box,
  Divider,
  Drawer,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import sidebarItems from "../data/sidebarItems";
import UserImage from "../assets/images/user.jpg";

const drawerWidth = 275;

function Sidebar(props) {
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const activeElementId = 1;

  const drawer = (
    <div>
      <Toolbar />
      <Box className="flex-column-center" mb={1.5}>
        <Box
          mb={1}
          sx={{
            width: "100px",
            height: "100px",
            borderRadius: "100%",
            overflow: "hidden",
          }}
        >
          <img src={UserImage} width={100} alt="Eric Hoffman" />
        </Box>
        <Typography variant="h5" gutterBottom>
          Eric Hoffman
        </Typography>
      </Box>
      {sidebarItems.map((item) => {
        if (item.isDivider) {
          return (
            <Box my={1.5}>
              <Divider key={item.id} />
            </Box>
          );
        } else {
          return (
            <ListItem key={item.id} disablePadding>
              <ListItemButton
                className="ListItemButton"
                selected={item.id === activeElementId}
              >
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          );
        }
      })}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: {
          sm: "flex",
        },
      }}
    >
      <CssBaseline />
      <Box>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Box>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

Sidebar.propTypes = {
  window: PropTypes.func,
};

export default Sidebar;
