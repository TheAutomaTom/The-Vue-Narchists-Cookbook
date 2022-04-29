<template>
  <Card>
    <template v-slot:card-title
      >Multiple components can access the same store, at the same
      time.</template
    >
    <template v-slot:card-content>
      <!-- <div class="radio-button-group" style="padding-top: 10px"> -->
      <!--  -->
      <div class="flex" :key="store.updateToggle">
        <label for="stations" style="padding-right: 8px">Pick a station:</label>

        <select
          name="stations"
          id="stations"
          class="font-bold"
          v-model="store.FavoriteStation"
        >
          <option
            v-for="station in store.RadioStations"
            :value="station"
            :id="station.station.callSign"
          >
            {{ station.station.callSign }}
          </option>
        </select>
        <span class="flex justify-center pl-2 italic font-bold">
          {{ store.ComputedProperty }}
        </span>
      </div>
      <!--  -->
      <!-- <div v-for="station in RadioStations">
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
      </div> -->
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
    <template v-slot:card-footer> </template>
  </Card>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Card from "../components/Card.vue";
import GRadioButton from "../controls/GRadioButton.vue";
import { useStores } from "../stores/Stores";
const store = useStores();
const selected = computed((label: string) => {
  store.FavoriteStation.station.callSign === label ? "bg-yellow" : "";
});
</script>
