<template>
  <div id="app">
    <Intro />
    <Nav :winresize="winresize" />
    <Portfolio :winresize="winresize" />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Intro from "./components/Intro.vue";
import Portfolio from "./components/Portfolio.vue";
export default {
  name: "App",
  props: {},
  data() {
    return {
      winresize: null,
    };
  },
  computed: {},
  components: {
    Nav,
    Portfolio,
    Intro,
  },
  methods: {},
  mounted() {
    window.addEventListener("resize", (e) => {
      this.winresize = e;
    });
  },
};
</script>

<style lang="scss">
#app {
  overscroll-behavior: none;
}
</style>
