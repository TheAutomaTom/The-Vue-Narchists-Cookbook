<template>
  <Card>
    <template v-slot:card-title
      >Multiple components can access the same store, at the same
      time.</template
    >
    <template v-slot:card-content>
      <div class="flex">
        <label for="stations" style="padding-right: 8px">Pick a station:</label>

        <select
          name="stations"
          id="stations"
          class="font-bold bg-yellow"
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
      </div>
    </template>
    <template v-slot:card-footer>
      <span class="flex justify-center pl-2 italic font-bold">
        {{ store.ComputedProperty }}
      </span></template
    >
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
