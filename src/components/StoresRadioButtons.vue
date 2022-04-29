<template>
  <Card>
    <template v-slot:card-title>Binding directly to store data</template>
    <template v-slot:card-content>
      <p>
        All the data below is defined in the pinia store module, and accessed
        directly in the vue component template.
      </p>
      <div class="radio-button-group" style="padding-top: 10px">
        <div v-for="station in RadioStations">
          <input
            hidden
            type="radio"
            v-model="store.FavoriteStation"
            :value="station"
            :id="station.stationId.callSign"
            :label="station.stationId.callSign"
          />
          <label
            :for="station.stationId.callSign"
            :class="
              store.FavoriteStation.stationId.callSign ===
              station.stationId.callSign
                ? 'bg-yellow font-bold'
                : ''
            "
            >{{ station.stationId.callSign }}</label
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
        :key="station.stationId.callSign"
      >
        <GRadioButton
          v-model="SelectedCallSign"
          :value="station.stationId.callSign"
          :id="station.stationId.callSign"
          :label="station.stationId.callSign"
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
import { computed } from "vue";
import Card from "../components/Card.vue";
import GRadioButton from "../controls/GRadioButton.vue";
import { useStores, RadioStations, RadioStation } from "../stores/Stores";
const store = useStores();
const selected = computed((label: string) => {
  store.FavoriteStation.stationId.callSign === label ? "bg-yellow" : "";
});
</script>
