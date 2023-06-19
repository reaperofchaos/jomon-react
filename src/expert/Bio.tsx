import { Box, Typography } from "@mui/material";

const Bio = ({ description }: { description?: string }) => {
  if (description) {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Typography variant="h6">Description</Typography>
        <Typography>{description}</Typography>
      </Box>
    );
  }
  return <Box />;
};

export default Bio;
