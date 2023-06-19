import { Box, Typography } from "@mui/material";
import { Area } from "../types";

const AddressComponent = ({ area }: { area: Area }) => (
  <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
    <Typography variant="h6">Address</Typography>
    <Typography>{`${area.StreetName}, ${area.City}`}</Typography>
    <Typography>{`${area.Prefecture}, ${area.ZipCode}, ${area.Country}`}</Typography>
  </Box>
);

export default AddressComponent;
