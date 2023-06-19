import { Box, Typography } from "@mui/material";
import { Website } from "./types";

const WebsiteItem = ({ website }: { website: Website }) => (
  <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
    <a href={website.url}>
      <Typography variant="h6">{website.name}</Typography>
    </a>
  </Box>
);

export default WebsiteItem;
