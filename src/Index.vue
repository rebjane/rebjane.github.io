<template>
  <div id="index">
    <a href="/"><img class="logo" src="./assets/DesignByREBJ.svg" /></a>
    <div class="top" />
    <Socials v-if="winresize" :winresize="winresize" />
    <Cursorr v-if="!isMobile" />
    <router-view :winresize="winresize"></router-view>
  </div>
</template>

<script>
import Cursorr from "./components/Cursor.vue";
import Socials from "./components/Socials.vue";

export default {
  name: "App",
  props: {},
  data() {
    return {
      isMobile: false,
      winresize: null,
    };
  },
  computed: {},
  components: {
    Cursorr,
    Socials,
  },
  methods: {},
  mounted() {
    this.winresize = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    window.addEventListener("resize", (e) => {
      this.winresize = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    });
    // console.log(navigator.userAgent);
    var mobileConditions = [
      navigator.userAgent.includes("iPhone"),
      navigator.userAgent.includes("Android"),
      navigator.userAgent.includes("iPad"),
    ];
    this.isMobile = mobileConditions.indexOf(true) > -1;
  },
};
</script>

<style lang="scss">
@import "style.scss";
#index {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: black;
  min-height: 100vh;
}
* {
  cursor: none;
  scroll-behavior: smooth;
}
.logo {
  width: 100px;
  height: auto;
  position: fixed;
  left: 0;
  top: 0;
  padding: 20px;
  z-index: 2;
}

body,
html {
  margin: 0;
  overscroll-behavior-y: none;
  -webkit-overflow-behavior-y: none;
  -webkit-overflow-scrolling: none;
  background: black;
}
.top {
  background-image: url("./assets/Blackgradient.png");
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  transform: rotate(180deg);
}
</style>
