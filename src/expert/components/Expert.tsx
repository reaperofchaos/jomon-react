import { Avatar, Box } from "@mui/material";
import NameComponent from "./Name";
import Bio from "./Bio";
import PersonalWebsites from "./PersonalWebsites";
import Projects from "./Projects";
import Publications from "./Publications";
import EducationComponent from "./EducationComponent";
import { Expert, ExpertWithDetails } from "../types";

const ExpertComponent = ({
  expert,
}: {
  expert: ExpertWithDetails | Expert;
}) => {
  const isExpertWithDetails = (
    a: Expert | ExpertWithDetails
  ): a is ExpertWithDetails =>
    (a as ExpertWithDetails).description !== undefined;

  if (isExpertWithDetails(expert)) {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Avatar />
        <NameComponent name={`${expert.firstName} ${expert.lastName}`} />
        <Bio description={expert.description} />
        <PersonalWebsites websites={expert.personalWebsites} />
        <Projects projects={expert.projects} />
        <EducationComponent education={expert.education} />
        <Publications works={expert.publications} />
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Avatar />
      <NameComponent name={`${expert.firstName} ${expert.lastName}`} />
    </Box>
  );
};

export default ExpertComponent;
