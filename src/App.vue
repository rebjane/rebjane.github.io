<template>
  <div id="app" ref="app">
    <router-view/>
      <div class="bg"/>
  </div>

</template>

<script>

export default {
  name: 'App',
  components: {
  },
  watch: {
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss">
@import "./main.scss";
body {
  background-color: black;

}
.bg {
  background-image: url("./assets/BG_2021.gif");
  // background: black;
  background-color: black;
  // transition: background-color 1s ease;
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
  pointer-events: none;
}
#app {
  background-color: black;
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
