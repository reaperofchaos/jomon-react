import { Link, useParams } from "react-router-dom";
import ExpertComponent from "./Expert";
import { useSelector } from "react-redux";
import { selectExpertById, selectExpertDetailById } from "../selectors";
import { RootState } from "../../core/store";
import { Box, Typography } from "@mui/material";
import useGetExpertDetails from "../hooks/useGetExpertDetails";

const ExpertWrapper = () => {
  const { id } = useParams();

  const selectedExpertWithDetails = useSelector((state: RootState) =>
    selectExpertDetailById(state, id ? parseInt(id, 10) : -1)
  );

  const selectedExpert = useSelector((state: RootState) =>
    selectExpertById(state, id ? parseInt(id, 10) : -1)
  );

  useGetExpertDetails(id ? parseInt(id, 10) : -1);

  if (selectedExpert) {
    return (
      <ExpertComponent expert={selectedExpertWithDetails ?? selectedExpert} />
    );
  }

  return (
    <Box>
      <Typography>{`Author with the id ${id} was not found`}</Typography>
      <Link to="/Expert">Back to the Experts Page</Link>
    </Box>
  );
};

export default ExpertWrapper;
