import { Autocomplete, Box, InputLabel, TextField } from "@mui/material";
import { getDateArray } from "../helpers/source.helpers";

const YearSelector = ({
  year,
  setYear,
}: {
  year: number | undefined;
  setYear: (type: number | undefined) => void;
}) => {
  const dateArray = getDateArray();

  const options: { label: string; year: number }[] = dateArray.map((s) => ({
    label: s.toString(),
    year: s,
  }));

  return (
    <Box
      sx={{
        margin: "10px",
        display: "flex",
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
      }}
    >
      <InputLabel sx={{ width: "250px" }}>Year:</InputLabel>
      <Autocomplete
        value={options.find((option) => option.year === year)}
        fullWidth
        onChange={(e, newValue) => {
          console.log("new value", newValue);
          if (typeof newValue === "string") {
            setYear(parseInt(newValue, 10));
          }
        }}
        renderInput={(params) => <TextField {...params} label="Year" />}
        options={options}
      />
    </Box>
  );
};

export default YearSelector;
