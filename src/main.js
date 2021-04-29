import Vue from "vue";
import App from "./App.vue";
import p from "./prismic.js";
import router from "./router.js";
p.prismic().then(() => {
  new Vue({
    render: (h) => h(App),
    router,
  }).$mount("#app");
});

Vue.config.productionTip = false;
