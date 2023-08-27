export enum SourceType {
  ARTICLE = "a",
  BOOK = "b",
  PRESENTATION = "p",
  POSTER = "po",
  ABSTRACT = "ab",
  THESIS = "t",
  DISSERTATION = "d",
  VIDEO = "v",
  WEBSITE = "w",
  RADIO_BROADCAST = "r",
}

export const SourceTypeMap = {
  [SourceType.ARTICLE]: "Article",
  [SourceType.BOOK]: "Book",
  [SourceType.PRESENTATION]: "Presentation",
  [SourceType.POSTER]: "Poster",
  [SourceType.ABSTRACT]: "Abstract",
  [SourceType.THESIS]: "Thesis",
  [SourceType.DISSERTATION]: "Dissertation",
  [SourceType.VIDEO]: "Video",
  [SourceType.WEBSITE]: "Website",
  [SourceType.RADIO_BROADCAST]: "Radio Broadcast",
};

export const SourceTypeArray: SourceType[] = [
  SourceType.ARTICLE,
  SourceType.BOOK,
  SourceType.PRESENTATION,
  SourceType.POSTER,
  SourceType.ABSTRACT,
  SourceType.THESIS,
  SourceType.DISSERTATION,
  SourceType.VIDEO,
  SourceType.WEBSITE,
  SourceType.RADIO_BROADCAST,
];

export enum Level {
  BACHELOR = "Bachelor's Thesis",
  MASTER = "Master's Thesis",
  DOCTORAL = "Doctoral Dissertation",
}

export const levelArray: Level[] = [
  Level.BACHELOR,
  Level.MASTER,
  Level.DOCTORAL,
];
