import React from "react";
import { Box, Typography } from "@mui/material";
// import { useSelector } from "react-redux";
// import { selectIsAuthorized } from "./selectors/configuration.selectors";
import AccountLoginForms from "../login/components/account-login-forms";
import { RouterProvider } from "react-router-dom";
function App() {
  const isLoggedIn = true;
  if (!isLoggedIn) {
    return (
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          variant="h3"
          sx={{
            marginBottom: "20px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          Not Logged In!
        </Typography>
        <AccountLoginForms />
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {/* <RouterProvider router={router} /> */}
    </Box>
  );
}

export default App;
