/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Expert } from "../types";
import { ExpertState } from "../types/expert.store.types";

const initialState: ExpertState = {
  experts: {},
};

export const expertSlice = createSlice({
  name: "experts",
  initialState,
  reducers: {
    getExpertById: (state, action) => {},
    getAllExperts: (state, action) => {},
    createExpert: (state, action) => {},
    addExpert: (state, action: PayloadAction<Expert>) => {
      const expert = action.payload;
      state.experts[expert.id] = expert;
    },
    addExperts: (state, action: PayloadAction<Expert[]>) => {
      const experts = action.payload;

      experts.forEach((expert) => {
        state.experts[expert.id] = expert;
      });
    },
  },
});

export const {
  getExpertById,
  getAllExperts,
  createExpert,
  addExpert,
  addExperts,
} = expertSlice.actions;

export default expertSlice.reducer;
