import { useState } from "react";
import "./style.css";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Box,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <AppBar position="static" className="header-bar">
      <Toolbar className="header-toolbar">
        <Box display="flex" alignItems="center" gap={1}>
          <img src={logo} alt="Logo" className="header-logo" />
          {!isMobile && (
            <span className="company-name">Central Texas Fly Fishing</span>
          )}
        </Box>

        {isMobile ? (
          <>
            <IconButton edge="end" color="inherit" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
              <List>
                {navItems.map((item) => (
                  <ListItem key={item.label} disablePadding>
                    <ListItemButton onClick={() => setDrawerOpen(false)}>
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          isActive ? "nav-link active" : "nav-link"
                        }
                        style={{ width: "100%" }}
                      >
                        <ListItemText primary={item.label} />
                      </NavLink>
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <Box className="nav-buttons">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {item.label}
              </NavLink>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
