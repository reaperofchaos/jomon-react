import { Typography, Box } from "@mui/material";
import type { Site } from "../types";
import AddressComponent from "../../university/components/AddressComponent";

const SiteComponent = ({ site }: { site: Site }) => (
  <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
    <Typography variant="h3">{site.siteName}</Typography>
    <AddressComponent area={site.area} />
  </Box>
);

export default SiteComponent;
