import { createWebHistory, createRouter } from "vue-router";
import About from "../views/About.vue";
import Stores from "../views/Stores.vue";
import Emits from "../views/Emits.vue";
import Lifecycle from "../views/Lifecycle.vue";
import Props from "../views/Props.vue";
import Slots from "../views/Slots.vue";
import Tests from "../views/Tests.vue";
import Validations from "../views/Validations.vue";

export const routes = [
  {
    path: "/",
    name: "About",
    component: About,
  },
  {
    path: "/lifecycle",
    name: "Lifecycle",
    component: Lifecycle,
  },
  {
    path: "/emits",
    name: "Emits",
    component: Emits,
  },
  {
    path: "/props",
    name: "Props",
    component: Props,
  },
  {
    path: "/slots",
    name: "Slots",
    component: Slots,
  },
  {
    path: "/stores",
    name: "Stores",
    component: Stores,
  },
  {
    path: "/validations",
    name: "Validations",
    component: Validations,
  },
  {
    path: "/tests",
    name: "Tests",
    component: Tests,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
