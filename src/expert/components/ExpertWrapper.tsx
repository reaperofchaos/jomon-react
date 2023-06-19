import { expert } from "../__fixtures__/expert.fixtures";
import ExpertComponent from "./Expert";

const ExpertWrapper = () => {
  const selectedExpert = expert;
  return <ExpertComponent expert={selectedExpert} />;
};

export default ExpertWrapper;
