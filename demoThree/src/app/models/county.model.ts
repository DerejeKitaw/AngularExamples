export interface County {
  _id?: string;
  id?: number;
  windSpeed: number;
  groundSnowLoad?: number;
  FireLaneRequirement?: number;
  RoofMountIncludesWellAndSeptic?: boolean;
  RoofMountIncludesSitePlan?: boolean;
  FootingPlan?: boolean;
  RapidShutdown?: boolean;
  Stampeddrawing?: string;
  Certletter?: number;
  NEC?: number;
  IBC?: number;
  IRC?: number;
  countyName?: string;
  age?: number;
  isActive?: boolean;
}
