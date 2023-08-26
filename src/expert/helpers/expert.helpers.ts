import { Expert } from "../types";

export const buildExpert = (
  firstName?: string,
  middleName?: string,
  lastName?: string,
  suffix?: string
): Expert | undefined => {
  if (firstName) {
    return {
      id: 0,
      firstName,
      middleName,
      lastName,
      suffix,
    };
  }

  return undefined;
};
