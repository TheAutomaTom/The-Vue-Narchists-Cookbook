import { ref, computed } from "vue";
import { defineStore } from "pinia";
import * as model from "../models/RadioStations";
import { Band } from "../models/RadioStations";
import * as defaults from "../models/defaults/RadioStations";

// Actual Store:
export const useStores = defineStore("Stores", () => {
  const RadioStations = ref(defaults.RadioStations);
  const FavoriteStation = ref(defaults.RadioStations[2]);
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

  let AddStation = (
    cs: string,
    freq: number,
    bnd: Band,
    cty: string
  ): string => {
    try {
      // const b = Band[bnd as keyof typeof Band]; //...string to enum
      // if (!(b.toString() in Band)) return "Invalid Band";
      //if (Object.values(Band).includes(bnd.toString())) return "Invalid Band";

      if (!(<any>Object).values(Band).includes(bnd))
        if (bnd === Band.Fm && !(freq >= 88.0 && freq <= 108.0))
          return "Invalid FM Frequency";
      if (bnd === Band.Am && !(freq >= 540 && freq <= 1700))
        return "Invalid AM Frequency";
      if (!cs.match(/^[A-Za-z]+$/) || cs.length !== 4)
        return "Invalid Call Sign";
      if (!cty.match(/^[A-Za-z]+$/)) return "Invalid City";
      RadioStations.value.push({
        station: { callSign: cs, frequency: freq, band: bnd },
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
  };
});
function reactive(RadioStations: model.IRadioStation[]) {
  throw new Error("Function not implemented.");
}
