import Vue from "vue";
import VueRouter from "vue-router";

// Because Vue is not global we tie Vue
// and VueRouter together manually
Vue.use(VueRouter);

// Initialize router
const router = new VueRouter({
  base: "/",
  mode: "history",
  routes: [
    {
      path: "",
      component: () => import("./MainPage.vue"),
    },
    {
      path: "/*/:slug",
      component: () => import("./PageWork.vue"),
    },
    {
      path: "*",
      component: () => import("./MainPage.vue"),
    },
  ],
});

export default router;
