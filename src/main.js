import Vue from 'vue'
import App from './App.vue'
import p from './prismic.js';
p.prismic().then(() => {
  new Vue({
    render: h => h(App),
  }).$mount('#app')
});

Vue.config.productionTip = false


