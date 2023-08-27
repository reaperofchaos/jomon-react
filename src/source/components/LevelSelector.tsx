import { Box, InputLabel, MenuItem, Select } from "@mui/material";
import { Level, levelArray } from "../types/source.types";

const LevelSelector = ({
  level,
  setLevel,
}: {
  level: Level | undefined;
  setLevel: (type: Level | undefined) => void;
}) => {
  const options: { display: string; value: string; index: number }[] =
    levelArray.map((s, index) => ({
      display: s,
      value: s,
      index,
    }));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
      }}
    >
      <InputLabel sx={{ width: "250px" }}>Level:</InputLabel>
      <Select
        value={level}
        fullWidth
        onChange={(e) => setLevel(e.target.value as Level)}
      >
        {options.map((option) => (
          <MenuItem key={option.index} value={option.value}>
            {option.display}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default LevelSelector;
