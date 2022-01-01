import Vue from "vue";
import Index from "./Index.vue";
import router from "./router.js";
import p from "./prismic.js";
// import smtp from "./smtp.js";

// Vue.prototype.$smtp = smtp;
Vue.config.productionTip = false;

p.prismic().then(() => {
  new Vue({
    router,
    render: (h) => h(Index),
  }).$mount("#index");
});
