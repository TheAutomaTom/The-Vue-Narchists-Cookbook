<template>
  <Card>
    <template v-slot:card-title>Add a Station</template>
    <template v-slot:card-content>
      <p>
        This component can send primitive data types directly to the store's "actions."
      </p>

      <GInputWithLabel
        label="Call Sign:"
        v-model="callSign"
        labelClass="flex-0 w-[70px]"
      />

      <GInputWithLabel label="Frequency:" v-model="frequency" labelClass="w-[70px]" />

      <span style="display: inline-block; width: 78px">Band:</span>
      <select
        name="bands"
        id="bands"
        v-model="band"
        class="flex-0 w-[70px]"
        style="display: inline-block"
      >
        <option v-for="key in Band" :key="key">{{ key }}</option>
      </select>

      <GInputWithLabel label="City:" v-model="city" labelClass="flex-0 w-[70px]" />
    </template>

    <template v-slot:card-footer>
      <div style="display: flex; justify-content: space-between">
        <div class="italic" style="padding-left: 20px">{{ response }}</div>
        <button @click="handle">Add Station</button>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { nextTick, ref, watch } from "vue";
import Card from "../../components/Card.vue";
import GInputWithLabel from "../../controls/GInputWithLabel.vue";
import { useStores } from "../../stores/Stores";
import { Band } from "../../models/RadioStations";
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
