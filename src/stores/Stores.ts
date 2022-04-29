import { ref, computed } from "vue";
import { defineStore } from "pinia";

export interface RadioStation {
  stationId: StationId;
  city: City;
  note: string;
}

type StationId = {
  callSign: string;
  frequency: number;
};

enum City {
  Nashville = "Nashville",
  NewOrleans = "New Orleans",
  Raleigh = "Raleigh",
  StPete = "St. Pete",
}

export const RadioStations: RadioStation[] = [
  {
    stationId: { callSign: "WXNA", frequency: 101.5 },
    city: City.Nashville,
    note: "",
  },
  {
    stationId: { callSign: "WTUL", frequency: 91.5 },
    city: City.NewOrleans,
    note: "",
  },
  {
    stationId: { callSign: "WKNC", frequency: 88.1 },
    city: City.Raleigh,
    note: "",
  },
  {
    stationId: { callSign: "WMNF", frequency: 88.5 },
    city: City.StPete,
    note: "",
  },
];

export const useStores = defineStore("Stores", () => {
  let FavoriteStation = ref(RadioStations[3]);

  const ComputedProperty = computed(
    () =>
      `${FavoriteStation.value.stationId.frequency} ${FavoriteStation.value.city} is so cool!`
  );

  // Lambdas replace `actions: {}`
  //  ...which also replace Vuex Mutations
  // const changeValue = (newValue: string) => {
  //   myObject.value.myProp = newValue;
  // };

  return {
    FavoriteStation,
    ComputedProperty,
  };
});
