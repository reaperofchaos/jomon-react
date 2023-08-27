/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import SourceTypeSelector from "./SourceTypeSelector";
import { Level, SourceType } from "../types/source.types";
import TextField from "./TextField";
import YearSelector from "./YearSelector";
import LevelSelector from "./LevelSelector";

const SourceForm = () => {
  const [sourceType, setSourceType] = useState<SourceType | undefined>(
    undefined
  );
  const [title, setTitle] = useState<string | undefined>(undefined);
  const [englishTitle, setEnglishTitle] = useState<string | undefined>(
    undefined
  );
  const [journal, setJournal] = useState<string | undefined>(undefined);
  const [publisher, setPublisher] = useState<string | undefined>(undefined);
  const [issue, setIssue] = useState<string | undefined>(undefined);
  const [volume, setVolume] = useState<string | undefined>(undefined);
  const [location, setLocation] = useState<string | undefined>(undefined);
  const [year, setYear] = useState<number | undefined>(undefined);
  const [level, setLevel] = useState<Level | undefined>(undefined);

 
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "60%" }}>
        <Typography variant="h3">Add a Source</Typography>
        <SourceTypeSelector
          sourceType={sourceType}
          setSourceType={setSourceType}
        />
        <TextField label="Title" value={title} setValue={setTitle} />
        <TextField
          label="English Title"
          value={englishTitle}
          setValue={setEnglishTitle}
        />
        <YearSelector year={year} setYear={setYear} />
        <TextField label="Journal" value={journal} setValue={setJournal} />
        <TextField label="Volume" value={volume} setValue={setVolume} />
        <TextField label="Issue" value={issue} setValue={setIssue} />
        <TextField
          label="Publisher"
          value={publisher}
          setValue={setPublisher}
        />
        <TextField label="Location" value={location} setValue={setLocation} />
        <LevelSelector level={level} setLevel={setLevel} />
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Button
            color="secondary"
            sx={{ paddingRight: "10px" }}
            onClick={() => {}}
          >
            Cancel
          </Button>
          <Button onClick={() => {}}>Add Source</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SourceForm;
