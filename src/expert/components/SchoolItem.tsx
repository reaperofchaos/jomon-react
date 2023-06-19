import { Box, Typography } from "@mui/material";
import { Education } from "../types";

const SchoolItem = ({ school }: { school: Education }) => (
  <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
    <Typography>{school.university}</Typography>
    <Typography>{`${school.degree} ${school.degreeType}`}</Typography>
    <Typography>{`${school.yearObtained}`}</Typography>
  </Box>
);

export default SchoolItem;
