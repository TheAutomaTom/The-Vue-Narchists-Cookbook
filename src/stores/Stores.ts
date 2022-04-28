import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useStores = defineStore("Stores", () => {
  const myObject = ref({
    myProp: "my value",
  });

  const myComputed = computed(
    () => `Computing ${myObject.value.myProp} is so cool!`
  );

  // Lambda replaces `actions: {}`...
  const changeValue = (newValue: string) => {
    myObject.value.myProp = newValue;
  };

  getters: {
  }

  return {
    myObject,
    myComputed,
    changeValue,
  };
});
