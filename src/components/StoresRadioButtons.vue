<template>
  <Card>
    <template v-slot:card-title>Binding directly to store data</template>
    <template v-slot:card-content>
      <p>
        All the data below is defined in the pinia store module, and accessed
        directly in the vue component template.
      </p>
      <div
        class="radio-button-group"
        style="padding-top: 10px"
        :key="store.updateToggle"
      >
        <div v-for="station in Stations">
          <input
            hidden
            type="radio"
            v-model="store.FavoriteStation"
            :value="station"
            :id="station.station.callSign"
            :label="station.station.callSign"
          />
          <label
            :for="station.station.callSign"
            :class="
              store.FavoriteStation.station.callSign ===
              station.station.callSign
                ? 'bg-yellow font-bold'
                : ''
            "
            >{{ station.station.callSign }}</label
          >
        </div>
      </div>
      <!-- Since Props must be strongly typed, 
          we can't pass in an object as a value... -->

      <!-- Below, primitive properties 
          are pulled from the object 
          to pass into the component.
          This doesn't seem like good practice.  -->
      <!-- 
      <div
        v-for="station in RadioStations"
        :key="station.station.callSign"
      >
        <GRadioButton
          v-model="SelectedCallSign"
          :value="station.station.callSign"
          :id="station.station.callSign"
          :label="station.station.callSign"
        />
      </div> -->
    </template>
    <template v-slot:card-footer>
      <span class="flex justify-center pl-2 italic font-bold">
        {{ store.ComputedProperty }}
      </span>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { computed, reactive, ref, watch, watchEffect } from "vue";
import { storeToRefs } from "pinia";
import Card from "../components/Card.vue";
import GRadioButton from "../controls/GRadioButton.vue";
import { useStores } from "../stores/Stores";
import { IRadioStation } from "../models/RadioStations";
const store = useStores();
const Stations = reactive(store.RadioStations);

watch(store.RadioStations, (n, o) => console.dir(n));

// const updateStations = (rs: IRadioStation[]) => {
//   RS.value = store.RadioStations;
//   console.log("WATCHED!");
// };
//watchEffect(() => updateStations(store.RadioStations));

const selected = computed((label: string) => {
  store.FavoriteStation.station.callSign === label ? "bg-yellow" : "";
});
</script>
