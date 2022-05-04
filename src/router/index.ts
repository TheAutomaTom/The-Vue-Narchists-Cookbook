import { createWebHistory, createRouter } from "vue-router";

export const routes = [
  {
    path: "/",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/lifecycle",
    name: "Lifecycle",
    component: () => import("../views/Lifecycle.vue"),
  },
  {
    path: "/watchers",
    name: "Watchers",
    component: Watchers,
  },
  {
    path: "/props",
    name: "Props",
    component: () => import("../views/Props.vue"),
    props: {
      routerProp:
        "Note, the router can send a parent view a prop defined in router/index.ts",
      anotherRouterProp: "You can send more than one",
    },
    //It's unclear how to add this to the above static props...
    // props: (route: string) => {
    //   return "readPropFromUrlQuery: route.query.route-query-value";
    // },
  },
  {
    path: "/emits",
    name: "Emits",
    component: () => import("../views/Emits.vue"),
  },
  {
    path: "/slots",
    name: "Slots",
    component: () => import("../views/Slots.vue"),
  },
  {
    path: "/stores",
    name: "Stores",
    component: () => import("../views/Stores.vue"),
  },
  {
    path: "/sub-routes",
    name: "Sub-Routes",
    component: () => import("../views/SubRoutes/SubRouting.vue"),
    children: [
      {
        path: "sub-view",
        name: "SubView",
        component: () => import("../views/SubRoutes/SubView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
