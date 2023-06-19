import { Box, Typography } from "@mui/material";
import { University } from "../types";
import AddressComponent from "./AddressComponent";

const UniversityComponent = ({ university }: { university: University }) => (
  <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
    <Typography variant="h3">{university.name}</Typography>
    <a target="_blank" href={university.website}>
      <Typography variant="subtitle1">website</Typography>
    </a>
    <AddressComponent area={university.area} />
  </Box>
);

export default UniversityComponent;
