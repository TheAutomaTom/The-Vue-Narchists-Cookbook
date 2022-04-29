import * as model from "../../models/RadioStations";
import { Band } from "../../models/RadioStations";
export let RadioStations: model.IRadioStation[] = [
  {
    station: { callSign: "WXNA", frequency: 101.5, band: Band.Fm },
    city: "Nashville",
  },
  {
    station: { callSign: "WTUL", frequency: 91.5, band: Band.Fm },
    city: "New Orleans",
  },
  {
    station: { callSign: "WKNC", frequency: 88.1, band: Band.Fm },
    city: "Raleigh",
  },
  {
    station: { callSign: "WMNF", frequency: 88.5, band: Band.Fm },
    city: "St. Pete",
  },
  {
    station: { callSign: "WFDM", frequency: 1400, band: Band.Am },
    city: "Ft. Walton Beach",
  },
];
