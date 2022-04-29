import { ref, computed } from "vue";
import { defineStore } from "pinia";
import * as model from "../models/RadioStations";
import { Band } from "../models/RadioStations";
import { RadioStations } from "./defaults/RadioStations";

// Actual Store:
export const useStores = defineStore("Stores", () => {
  let FavoriteStation = ref(RadioStations[3]);
  let updateToggle = 0;

  const ComputedProperty = computed(
    () =>
      `${FavoriteStation.value.station.frequency} ${FavoriteStation.value.station.band} ${FavoriteStation.value.city} is so cool!`
  );

  //Getters example (there must be alternative syntax)
  // const x = 3;
  // getters: {
  //   doubleCount: () => {
  //     x * 2;
  //   };
  // }

  // Lambdas replace `actions: {}`
  //  ...which replaces Vuex Mutations
  const AddStation = (
    cs: string,
    freq: number,
    bnd: string,
    cty: string
  ): string => {
    try {
      const b = Band[bnd.toLowerCase() as keyof typeof Band]; //...string to enum
      if (!(b in Band)) return "Invalid Band";
      if (b === Band.FM && !(freq >= 88.0 && freq <= 108.0))
        return "Invalid Band";
      if (b === Band.AM && !(freq >= 540 && freq <= 1700))
        return "Invalid Band";
      if (!cs.match(/^[A-Za-z]+$/) || cs.length !== 4)
        return "Invalid Call Sign";
      if (!cty.match(/^[A-Za-z]+$/)) return "Invalid City";
      RadioStations.push({
        station: { callSign: cs, frequency: freq, band: b },
        city: cty,
      });
      return "Success!";
    } catch {
      return "Invalid Input";
    }
  };

  return {
    RadioStations,
    FavoriteStation,
    ComputedProperty,
    AddStation,
    updateToggle,
  };
});
