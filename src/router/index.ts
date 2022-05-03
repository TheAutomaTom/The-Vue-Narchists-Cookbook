import { createWebHistory, createRouter } from "vue-router";
import About from "../views/About.vue";
import Stores from "../views/Stores.vue";
import Emits from "../views/Emits.vue";
import Lifecycle from "../views/Lifecycle.vue";
import Props from "../views/Props.vue";
import Slots from "../views/Slots.vue";

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
    path: "/props",
    name: "Props",
    component: Props,
  },
  {
    path: "/emits",
    name: "Emits",
    component: Emits,
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
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
