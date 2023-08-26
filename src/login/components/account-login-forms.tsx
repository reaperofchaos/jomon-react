import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import CreateAccountForm from "./create-account-form";
import LoginForm from "./loginForm";
import TabPanel from "./tab-panel";

const AccountLoginForms = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "80vw",
      }}
    >
      <Box
        sx={{ borderBottom: 1, borderColor: "divider", marginBottom: "20px" }}
      >
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Login" id="tab-0" />
          <Tab label="Create Account" id="tab-1" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: "40px",
            height: "600px",
            background: "lightGray",
            border: "5px solid black",
            justifyContent: "center",
            width: "550px",
          }}
        >
          <LoginForm />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: "40px",
            height: "600px",
            width: "550px",
            background: "lightGray",
            border: "5px solid black",
            justifyContent: "center",
          }}
        >
          <CreateAccountForm />
        </Box>
      </TabPanel>
    </Box>
  );
};

export default AccountLoginForms;
