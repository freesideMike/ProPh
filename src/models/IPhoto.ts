import { IVersions } from "./IVersions";

// types.ts
export interface IPhoto {
  id: number;
  title: string;
  versions: IVersions;
  times_opened: number;
  times_ordered: number;
  url: string;
  created_at: number;
  updated_at: number;
}
