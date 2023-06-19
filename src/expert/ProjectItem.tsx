import { Box, Typography } from "@mui/material";
import { Project } from "./types";

const ProjectItem = ({ project }: { project: Project }) => (
  <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
    <Typography>{project.name}</Typography>
    <Typography variant="subtitle2">{`(${project.start} - ${project.end} )`}</Typography>
  </Box>
);

export default ProjectItem;
