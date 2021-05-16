<template>
  <div id="app" ref="app" >
    <router-view @bg="handleBGChange" />
      <div class="bg" :style="`background-color: ${bg}`"/>
      <div class="bgimg"/>
  </div>

</template>

<script>

export default {
  name: 'App',
  components: {
  },
  watch: {
    $route: {
      handler() {
        this.bg = "black";
      }
    }
  },
  data() {
    return {
      bg: "black"
    }
  },
  methods: {
    handleBGChange(e) {
      this.bg = e;
      // console.log(e);
    }
  }
}
</script>

<style lang="scss">
@import "./main.scss";
body {
  background-color: black;

}
.bgimg {
  // background-image: url("./assets/BG_2021.gif");
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  mix-blend-mode: difference;
  opacity: .5;
  pointer-events: none;

}
.bg {
  // background: black;
  transition: background-color .25s ease;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  // z-index: 10;
  z-index: -1;
  // opacity: .5;
  pointer-events: none;

}
#app {
  // background-color: black;
  // transition: background-color .25s ease;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  overflow-x: hidden;
  z-index: -1;
  h1 {
    font-family: Helvetica;
  }
}
</style>
