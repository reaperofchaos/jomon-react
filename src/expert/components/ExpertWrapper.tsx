import { Link, useParams, useSearchParams } from "react-router-dom";
import ExpertComponent from "./Expert";
import { useSelector } from "react-redux";
import { selectExpertDetailById } from "../selectors";
import { RootState } from "../../core/store";
import { Box, Typography } from "@mui/material";
import useGetExpertDetails from "../hooks/useGetExpertDetails";

const ExpertWrapper = () => {
  const { id } = useParams();

  const selectedExpert = useSelector((state: RootState) =>
    selectExpertDetailById(state, id ? parseInt(id, 10) : -1)
  );

  useGetExpertDetails(id ? parseInt(id, 10) : -1);

  if (selectedExpert) {
    return <ExpertComponent expert={selectedExpert} />;
  }

  return (
    <Box>
      <Typography>{`Author with the id ${id} was not found`}</Typography>
      <Link to="/Expert">Back to the Experts Page</Link>
    </Box>
  );
};

export default ExpertWrapper;
