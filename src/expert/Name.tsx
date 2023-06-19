import { Typography } from "@mui/material";
import { Name } from "./types";

const NameComponent = ({ name }: { name: Name }) => (
  <Typography>{`${name.first} ${name.last}`}</Typography>
);

export default NameComponent;
