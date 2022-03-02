<template>
  <div id="bank-list">
    <Nav :winresize="winresize" />
    <div class="links">
      <transition v-for="(item, i) in $bank.banks" :key="i">
        <div class="link">
          <img :src="item.logo.url" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
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
#bank {
  overscroll-behavior: none;
  color: white;
}
img {
  width: 100%;
}
.link {
  display: inline-block;
  width: 200px;
  padding: 0 20px;
  margin: 0 10px;
  background: white;
  border-radius: 20px;
}
</style>
