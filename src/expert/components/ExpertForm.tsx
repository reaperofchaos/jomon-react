/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const ExpertForm = () => {
  const [prefix, setPrefix] = useState<string | undefined>(undefined);
  const [firstName, setFirstName] = useState<string | undefined>(undefined);
  const [middleName, setMiddleName] = useState<string | undefined>(undefined);
  const [lastName, setLastName] = useState<string | undefined>(undefined);
  const [suffix, setSuffix] = useState<string | undefined>(undefined);

  const clearForm = () => {
    setPrefix(undefined);
    setFirstName(undefined);
    setMiddleName(undefined);
    setLastName(undefined);
    setSuffix(undefined);
  };

  const handleSubmit = () => {
    clearForm();
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h3">Add an Expert</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography>Prefix</Typography>
        <TextField
          value={prefix}
          onChange={(e) => {
            setPrefix(e.target.value);
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography>First Name</Typography>
        <TextField
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography>Middle Name</Typography>
        <TextField
          value={middleName}
          onChange={(e) => {
            setMiddleName(e.target.value);
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography>Last Name</Typography>
        <TextField
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography>Suffix</Typography>
        <TextField
          value={suffix}
          onChange={(e) => {
            setSuffix(e.target.value);
          }}
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Button
          color="secondary"
          sx={{ paddingRight: "10px" }}
          onClick={() => {}}
        >
          Cancel
        </Button>
        <Button onClick={() => handleSubmit()}>Add Expert</Button>
      </Box>
    </Box>
  );
};

export default ExpertForm;
