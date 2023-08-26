import { AppBar, Box, Container, IconButton, Toolbar } from "@mui/material";
import { useState } from "react";
import { NavigateFunction } from "react-router-dom";
import { MenuOptions } from "../types";
import HomeIcon from "@mui/icons-material/Home";
import NavMenu from "./NavMenu";

const NavigationBar = ({ navigate }: { navigate: NavigateFunction }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const sourceOptions: MenuOptions[] = [
    { name: "View Sources", route: "/conference/" },
    { name: "Add Conference", route: "/conference/add/" },
  ];
  const expertOptions: MenuOptions[] = [
    { name: "View Experts", route: "/Expert/" },
    { name: "Add Expert", route: "/Expert/Add/" },
  ];

  const locationOptions: MenuOptions[] = [
    { name: "View Sites", route: "/experts/" },
    { name: "View Universities", route: "/experts/add/" },
  ];

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: "20px",
              alignItems: "center",
            }}
          >
            <IconButton
              onClick={() => {
                navigate("/");
              }}
            >
              <HomeIcon sx={{ color: "white" }} />
            </IconButton>
            <NavMenu
              title="Sources"
              options={sourceOptions}
              navigate={navigate}
            />
            <NavMenu
              title="Experts"
              options={expertOptions}
              navigate={navigate}
            />
            <NavMenu
              title="Locations"
              options={locationOptions}
              navigate={navigate}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavigationBar;
