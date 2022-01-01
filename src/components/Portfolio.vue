<template>
  <div id="portfolio">
    <div class="portfolio-inner">
      <div class="images">
        <div v-for="(portfoliomini, i) in $portfolio" :key="i">
          <h2 :id="id($cms.textField(portfoliomini.data.id))">
            {{ $cms.textField(portfoliomini.data.id) }}
          </h2>
          <div class="piecewrapper">
            <transition v-for="(item, j) in portfoliomini.data.body" :key="j">
              <a :href="$cms.textField(item.primary.url)">
                <div
                  :ref="`${i}_${j}`"
                  class="piece"
                  :style="`background-image:url(${item.primary.image.url})`"
                ></div>
              </a>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Blob from "../blobify.js";
export default {
  name: "Portfolio",
  props: {
    winresize: Object,
  },
  watch: {
    winresize() {},
  },
  data() {
    return {
      img: null,
      portfolio: [],
    };
  },
  computed: {},
  components: {},
  methods: {
    id(id) {
      return id.toLowerCase();
    },
    lazyLoad(url, ref) {
      this.$nextTick(() => {
        this.$nextTick(() => {
          var top = this.$refs[ref][0].getBoundingClientRect().top;
          console.log(top);
        });
      });
      var a = 1;
      if (a === 2) {
        return url;
      }
      return "";
    },
  },
  mounted() {
    // window.addEventListener("mousewheel", (e) => {
    //   console.log(e.offsetY);
    // });
  },
};
</script>

<style lang="scss">
@import "../main.scss";
.piece {
  width: 25%;
  height: 25vw;
  display: inline-block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  color: white;
  padding-bottom: 20px;
  font-size: 0;
  @media screen and (max-width: $desktopdown) {
    width: calc(100% / 3);
    height: calc(100vw / 3);
  }
  @media screen and (max-width: $mobiledown) {
    width: 50%;
    height: 50vw;
  }
  @media screen and (max-width: $mobiledowner) {
    width: 100%;
    height: 100vw;
  }
}
.piecewrapper {
  font-size: 0;
}
h2 {
  font-size: 40px;
  margin-top: 60px;
}
</style>
