export interface University {
  id: number;
  name: string;
  website?: string;
  area: Area;
}

export interface Area {
  ID: number;
  Island: string;
  RegionId?: number;
  Country: string;
  Prefecture: string;
  SubPrefecture?: string;
  City: string;
  StreetType?: string;
  StreetName: string;
  StreetDirection?: string;
  StreetNo?: string;
  ZipCode: string;
}
