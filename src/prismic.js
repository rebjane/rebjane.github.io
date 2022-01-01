import pr from "prismic-javascript";
import Vue from "vue";
import Blob from "./blobify.js";

var PrismicDOM = require("prismic-dom");
var api = "https://rebj2021.cdn.prismic.io/api/v2";

export default new (class Prismic {
  prismic() {
    return new Promise((resolved) => {
      pr.api(api)
        .then((api) => {
          return api.query("", { pageSize: 100 });
        })
        .then((res) => {
          return new Promise((resolve) => {
            Vue.prototype.$portfolio = [];
            Vue.prototype.$portfolio_simplified = [];
            var portfolioRes = res.results.filter((i) => i.type === "work");
            portfolioRes = portfolioRes.sort((a, b) => {
              return a.data.order - b.data.order;
            });
            for (let i = 0; i < portfolioRes.length; i++) {
              Vue.prototype.$portfolio.push(portfolioRes[i]);
              for (let j = 0; j <= portfolioRes[i].data.body.length; j++) {
                if (portfolioRes[i].data.body[j])
                  Vue.prototype.$portfolio_simplified.push(
                    portfolioRes[i].data.body[j]
                  );
              }
            }
            resolve();
          }).then(() => {
            Vue.prototype.$intro = res.results.filter(
              (i) => i.type === "main_page"
            )[0].data;

            Vue.prototype.$socials = res.results
              .filter((i) => i.type === "menu")[0]
              .data.body.filter((i) => i.slice_type === "socialmenu")[0];
            Vue.prototype.$menu = res.results
              .filter((i) => i.type === "menu")[0]
              .data.body.filter((i) => i.slice_type === "menu")[0];

            resolved();
          });

          // console.log(Vue.prototype.$menu);
          // console.log(res);
        });
    });
  }
})();

Vue.prototype.$cms = new (class CMSModule {
  text(field) {
    return PrismicDOM.RichText.asText(this.fields[field]);
  }

  textField(field) {
    return PrismicDOM.RichText.asText(field);
  }

  html(field) {
    return PrismicDOM.RichText.asHtml(this.fields[field]);
  }

  htmlField(field) {
    return PrismicDOM.RichText.asHtml(field);
  }
})();
