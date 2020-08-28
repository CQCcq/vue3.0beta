import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/index",
        name: "Index",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Index.vue"),
      },
      {
        path: "/first",
        name: "First",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/First.vue"),
      },
      {
        path: "/second",
        name: "Second",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Second.vue"),
      },
      {
        path: "/third",
        name: "Third",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Third.vue"),
      },
      {
        path: "/fourth",
        name: "Fourth",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Fourth.vue"),
      },
      {
        path: "/fifth",
        name: "Fifth",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Fifth.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  mode: "history",
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
