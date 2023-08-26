/* eslint-disable prettier/prettier */
export interface Name {
  prefix?: string;
  first: string;
  middle?: string;
  last: string;
  suffix?: string;
}

export interface Website {
  id: number;
  name: string;
  url: string;
}

export enum OrganizationType {
    UNIVERSITY = 'university',
    MUSEUM = 'museum',
    OTHER = 'other',
}

export interface Organization {
  id: number;
  type: OrganizationType;
  name: string;
}

export interface Project {
  id: number;
  name: string;
  start: number;
  end?: number; 
}

export enum SourceType{
  ARTICLE = "a",
  ABSTRACT = "ab",
  BOOK = "b",
  RADIO_PRESENTATION = "r",
  PRESENTATION = "pr",
  POSTER = "po",
  THESIS = "t",
  DISSERTATION = "d",
  VIDEO = "v",
  WEBSITE = "w",
}

export interface Publication {
  id: number;
  authors: string;
  srcType: SourceType;
  year: number;
  title: string; 
  journal: string;
  volume: number;
  issue: number;
  citation: string;
  srcLocation: string;
  website: string;
  doi: string;
}

export enum EducationLevel{
  BACHELORS = 'Bachelors',
  MASTERS = 'Masters',
  DOCTORATE = 'Doctorate'
}

export enum DegreeType{
  PHD = 'Ph.D',
  MA = 'M.A.',
  MS = 'M.S.',
  BA = 'B.A.',
  BS = 'B.S.',
}

export interface Education {
  id: number;
  universityId: number;
  university: string;
  level: EducationLevel;
  degreeType: DegreeType;
  degree: string;
  yearObtained: number; 
}

export interface Expert{
  id: number; 
  firstName: string;
  middleName?: string;
  lastName?: string;
  suffix?: string;

}
export interface ExpertWithDetails extends Expert {
  profileImage?: string;
  description?: string;
  personalWebsites?: Website[];
  cv?: string;
  projects?: Project[];
  associatedOrganizations?: Organization[];
  publications?: Publication[];
  education: Education[]
  supervised?: Expert[];
}
