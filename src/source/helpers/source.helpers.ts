import { SourceType, Level } from "../types";

export const getDateArray = () => {
  const earliestYear = 1800;

  const currentYear = new Date().getFullYear();

  const range = currentYear - earliestYear;

  const dateArray = [...Array(range).keys()].map((i) => i + earliestYear);

  return dateArray;
};

export const createSource = (
  sourceType: SourceType,
  title: string,
  year: number,
  englishTitle?: string,
  journal?: string,
  publisher?: string,
  issue?: string,
  volume?: string,
  location?: string,
  level?: Level
) => {
  if (sourceType === SourceType.ARTICLE) {
    return {
      id: 0,
      sourceType,
      title,
      englishTitle,
      year,
      journal,
      volume,
      issue,
      publisher: null,
      location: null,
      level: null,
      date: null,
      conferenceId: null,
    };
  }

  if (sourceType === SourceType.BOOK) {
    return {
      id: 0,
      sourceType,
      title,
      englishTitle,
      year,
      publisher,
      location,
      date: null,
      conferenceId: null,
      journal: null,
      volume: null,
      issue: null,
    };

    return undefined;
  }
};
