<template>
  <Card>
    <template v-slot:card-title>Add a Station</template>
    <template v-slot:card-content>
      <p>
        This component can send primitive data types directly to the store's
        "actions."
      </p>
      <form @submit.prevent="handle">
        <GInputWithLabel label="Call Sign: " v-model="callSign" />
        <GInputWithLabel label="Frequency: " v-model="frequency" />
        <div class="flex">
          <label>Band: </label>
          <select name="bands" id="bands" class="font-bold" v-model="band">
            <option v-for="key in Band" :key="key">{{ key }}</option>
          </select>
        </div>
        <GInputWithLabel label="City: " v-model="city" />
        <span>{{ response }}</span>

        <button type="submit">Add Station</button>
      </form>
      <!-- <p><label>Call Sign:</label><input type="text" v-model="callSign" /></p>
      <p><label>Frequency:</label><input type="text" v-model="frequency" /></p>
      <p><label>City:</label><input type="text" v-model="city" /></p> -->
    </template>

    <template v-slot:card-footer> </template>
  </Card>
</template>

<script setup lang="ts">
import { nextTick, ref, watch } from "vue";
import Card from "../components/Card.vue";
import GInputWithLabel from "../controls/GInputWithLabel.vue";
import { useStores } from "../stores/Stores";
import { Band } from "../models/RadioStations";
// import { defineConfig } from "vite";
// const x = defineConfig({
//   // To access env vars here use process.env.TEST_VAR
// });
const store = useStores();

const callSign = ref("");
const frequency = ref(0);
const defaultBand =
  import.meta.env.VITE_DEFAULT_RADIO_STATION_BAND === "fm" ? Band.Fm : Band.Am;
const band = ref(defaultBand);
const city = ref("");
const response = ref("");
watch(store.RadioStations, (n, o) => console.dir(n));

function handle() {
  response.value = store.AddStation(
    callSign.value,
    frequency.value,
    band.value,
    city.value
  );

  //Failed attempt to make other components update on submit
  // nextTick(() => {
  //   response.value = r;
  // });
}
</script>
<style scoped lang="scss"></style>
