<template>
  <div id="app">
    <Intro />
    <Nav :winresize="winresize" />
    <Portfolio :winresize="winresize" />
    <Footerr :winresize="winresize" />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Intro from "./components/Intro.vue";
import Footerr from "./components/Footer.vue";
import Portfolio from "./components/Portfolio.vue";
export default {
  name: "App",
  props: {
    winresize: Object,
  },
  data() {
    return {
      // winresize: null,
    };
  },
  computed: {},
  components: {
    Nav,
    Portfolio,
    Intro,
    Footerr,
  },
  methods: {},
  mounted() {
    // window.addEventListener("resize", (e) => {
    //   this.winresize = e;
    // });
  },
};
</script>

<style lang="scss">
#app {
  overscroll-behavior: none;
}
</style>
