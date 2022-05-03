import * as model from "../../models/RadioStations";
export let RadioStations: model.IRadioStation[] = [
  {
    station: { callSign: "WXNA", frequency: 101.5, band: model.Band.Fm },
    city: "Nashville",
  },
  {
    station: { callSign: "WTUL", frequency: 91.5, band: model.Band.Fm },
    city: "New Orleans",
  },
  {
    station: { callSign: "WKNC", frequency: 88.1, band: model.Band.Fm },
    city: "Raleigh",
  },
  {
    station: { callSign: "WMNF", frequency: 88.5, band: model.Band.Fm },
    city: "St. Pete",
  },
  {
    station: { callSign: "WFDM", frequency: 1400, band: model.Band.Am },
    city: "Ft. Walton Beach",
  },
  {
    station: { callSign: "KFI", frequency: 640, band: model.Band.Am },
    city: "Los Angeles",
  },
];
