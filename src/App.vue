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
}
</script>

<style lang="scss">
@import "./main.scss";
.bg {
  background-image: url("./assets/BG_2021.gif");
  // background: black;
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
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  
  // margin: 0 5%;
  // margin-left: 5%;
  overflow-x: hidden;
  // background-color: white;
  z-index: -1;
  h1 {
    font-family: Helvetica;
  }
}
</style>
