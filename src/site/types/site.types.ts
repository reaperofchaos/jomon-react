import { Area } from "../../university/types";

export interface Site {
  id: number;
  siteName: string;
  latitude: number;
  longitude: number;
  area: Area;
}
