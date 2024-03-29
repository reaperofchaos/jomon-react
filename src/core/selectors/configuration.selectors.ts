import { RootState } from "../store";

export const selectIsAuthorized = (state: RootState) =>
  state.configuration.isAuthorized;
