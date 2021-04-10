<template>
  <div id="app" ref="app">
    <div class="bg"/>
    <Header :scrollPosY="scrollPosY"/>
  <Name/>
  <Page :scrollPosY="scrollPosY" :stop="stop"/>

  </div>
</template>

<script>
import Header from './components/Header.vue'
import Page from './components/Page.vue'
import Name from './components/Name.vue'

export default {
  name: 'App',
  components: {
    Header,
    Page,
    Name
  },
  methods: {
    
  },
  data() {
    return {
      scrollPosY: 0,
      stop: 0
    }
  },
  mounted() {
    window.addEventListener("scroll", () => {
       this.scrollPosY= window.scrollY;
    })
    this.$nextTick(() => {
      // console.log(this.$refs.app.getBoundingClientRect().height - window.innerHeight);
      this.stop = Math.floor(this.$refs.app.getBoundingClientRect().height - window.innerHeight);
      // console.log(window.innerHeight);

    })
  }
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  scroll-behavior: smooth;
  margin: 0 5%;
  // background-color: white;
  z-index: -1;
  h1 {
    font-family: Helvetica;
  }
}
span {
  color: white;
}
.bg {
  background-image: url("./assets/BG_2021.gif");
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
}
body {
  margin: 0;
  overscroll-behavior: none;
}
p {
  font-size: 24px;
}
</style>
