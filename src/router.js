import Vue from "vue";
import VueRouter from "vue-router";

// Because Vue is not global we tie Vue
// and VueRouter together manually
Vue.use(VueRouter);

// Initialize router
const router = new VueRouter({
  base: "",
  mode: "history",
  routes: [
    {
      path: "",
      component: () => import("./App.vue"),
    },
    {
      path: "/:slug",
      component: () => import("./AppProjectPage.vue"),
    },
  ],
});

export default router;
