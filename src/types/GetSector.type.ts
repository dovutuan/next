export interface GetSectorItemRes {
  id: number;
  name: string;
  industries: IndustryItemRes[];
}

export interface IndustryItemRes {
  id: number;
  sector_id: number;
  name: string;
}
