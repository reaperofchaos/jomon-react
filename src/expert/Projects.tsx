import { Box, Typography } from "@mui/material";
import ProjectItem from "./ProjectItem";
import { Project } from "./types";

const Projects = ({ projects }: { projects?: Project[] }) => {
  if (projects) {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Typography variant="h6">Projects</Typography>
        {projects.map((project) => (
          <ProjectItem project={project} />
        ))}
      </Box>
    );
  }
  return <Box />;
};

export default Projects;
