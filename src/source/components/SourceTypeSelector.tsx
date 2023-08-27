import { Box, InputLabel, MenuItem, Select } from "@mui/material";
import {
  SourceType,
  SourceTypeArray,
  SourceTypeMap,
} from "../types/source.types";

const SourceTypeSelector = ({
  sourceType,
  setSourceType,
}: {
  sourceType: SourceType | undefined;
  setSourceType: (type: SourceType | undefined) => void;
}) => {
  const options: { display: string; value: string; index: number }[] =
    SourceTypeArray.map((s, index) => ({
      display: SourceTypeMap[s],
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
      <InputLabel sx={{ width: "250px" }}>Select a Source Type:</InputLabel>
      <Select
        value={sourceType}
        fullWidth
        onChange={(e) => setSourceType(e.target.value as SourceType)}
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

export default SourceTypeSelector;
