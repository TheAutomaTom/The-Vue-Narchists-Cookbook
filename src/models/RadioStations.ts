export interface IRadioStation {
  station: Station;
  city: string;
}

export type Station = {
  callSign: string;
  frequency: number;
  band: Band;
};

export enum Band {
  Fm = "FM",
  Am = "AM",
}

// export enum City {
//   Nashville = "Nashville",
//   NewOrleans = "New Orleans",
//   Raleigh = "Raleigh",
//   StPete = "St. Pete",
// }
