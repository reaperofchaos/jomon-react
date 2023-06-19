import { Box, Typography } from "@mui/material";
import { Website } from "./types";
import WebsiteItem from "./WebsiteItem";

const PersonalWebsites = ({ websites }: { websites?: Website[] }) => {
  if (websites) {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Typography variant="h6">Personal Websites</Typography>
        {websites.map((website) => (
          <WebsiteItem website={website} />
        ))}
      </Box>
    );
  }
  return <Box />;
};

export default PersonalWebsites;
