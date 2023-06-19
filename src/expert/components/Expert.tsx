import { Avatar, Box } from "@mui/material";
import NameComponent from "./Name";
import Bio from "./Bio";
import PersonalWebsites from "./PersonalWebsites";
import Projects from "./Projects";
import Publications from "./Publications";
import EducationComponent from "./EducationComponent";
import { Expert } from "../types";

const ExpertComponent = ({ expert }: { expert: Expert }) => (
  <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
    <Avatar />
    <NameComponent name={expert.name} />
    <Bio description={expert.description} />
    <PersonalWebsites websites={expert.personalWebsites} />
    <Projects projects={expert.projects} />
    <EducationComponent education={expert.education} />
    <Publications works={expert.publications} />
  </Box>
);

export default ExpertComponent;
