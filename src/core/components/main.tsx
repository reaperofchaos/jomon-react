import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavigationBar from "./navigation-bar";
import { Box } from "@mui/material";

const Main = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <NavigationBar navigate={navigate} />
      <Box sx={{ width: "100%", margin: "20px" }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Main;
