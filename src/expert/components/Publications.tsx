import { Box, Typography } from "@mui/material";
import { Publication } from "../types";

const Publications = ({ works }: { works?: Publication[] }) => {
  if (works) {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Typography variant="h6">Publications</Typography>
      </Box>
    );
  }
  return <Box />;
};

export default Publications;
