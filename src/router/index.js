import Vue from "vue";
import VueRouter from "vue-router";
import SearchablePaginatedComponent from "@/components/SearchablePaginatedComponent";

Vue.use(VueRouter);

const routes = [
  {
    name: "SearchablePaginatedComponent",
    path: "/spc",
    component: SearchablePaginatedComponent,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
