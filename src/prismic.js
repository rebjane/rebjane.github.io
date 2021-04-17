import pr from "prismic-javascript";
import Vue from "vue";
import smtp from "./smtp.js";
Vue.prototype.$smtp = smtp;
console.log(smtp);

export default new (class Prismic {
  prismic() {
    return new Promise((resolved) => {
      pr.api("https://rebj2021.cdn.prismic.io/api/v2")
        .then((api) => {
          return api.query("", { pageSize: 100 });
        })
        .then((res) => {
          // console.log();
          Vue.prototype.$slices = res.results
            .filter((i) => i.type === "work")
            .sort((a, b) => a.data.order - b.data.order);
          var menu = fetchSlice("menu", res.results);
          Vue.prototype.$work = fetchSlice("work", res.results);
          Vue.prototype.$cats = [];
          menu.forEach((i) => {
            Vue.prototype.$cats.push({
              text: Vue.prototype.$text(i.primary.text).toUpperCase(),
              link: `${Vue.prototype.$text(i.primary.link).toLowerCase()}`,
              icon: i.primary.icon,
              open: i.primary.open,
            });
          });
          resolved();
        });
    });
  }
})();
function fetchSlice(string, arr) {
  return arr.filter((i) => i.type === string)[0].data.body;
}
Vue.prototype.$text = (text) => {
  return text.length ? text[0].text : ``;
};
