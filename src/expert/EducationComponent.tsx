import { Box, Typography } from "@mui/material";
import { Education } from "./types";
import SchoolItem from "./SchoolItem";

const EducationComponent = ({ education }: { education?: Education[] }) => {
  if (education) {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Typography variant="h6">Education</Typography>
        {education.map((school) => (
          <SchoolItem school={school} />
        ))}
      </Box>
    );
  }
  return <Box />;
};

export default EducationComponent;
