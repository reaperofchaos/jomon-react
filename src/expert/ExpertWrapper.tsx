import ExpertComponent from "./Expert";
import { expert } from "./__fixtures__/expert.fixtures";

const ExpertWrapper = () => {
  const selectedExpert = expert;
  return <ExpertComponent expert={selectedExpert} />;
};

export default ExpertWrapper;
