import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../core/store";
import { Expert } from "../types";

export const selectExpertMap = (state: RootState) => state.expert.experts;

export const selectAllExperts = createSelector(
  [selectExpertMap],
  (expertMap: Record<number, Expert>): Expert[] => {
    const keys = Object.keys(expertMap);
    return keys.map((key) => expertMap[parseInt(key, 10)]);
  }
);

export const selectExpertById = (state: RootState, id: number) =>
  state.expert.experts[id];
