import { Expert, ExpertWithDetails } from "./expert.types";

export interface ExpertState {
  experts: Record<number, Expert>;
  expertDetails: Record<number, ExpertWithDetails>;
}
