<template>
  <div class="cursorouter">
    <div class="cursor" ref="cursor">
      <div class="eyes" ref="eyes" />
      <div class="memoji" ref="memoji" />
      <div class="heart" ref="heart" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Template",
  props: {},
  data() {
    return {};
  },
  computed: {},
  components: {},
  methods: {},
  mounted() {
    window.addEventListener("mousemove", (e) => {
      this.$refs.cursor.style = `transform: translateX(${e.clientX}px) translateY(${e.clientY}px)`;
      if (e.target.className === "piece") {
        this.$refs.cursor.style.background = "none";
        this.$refs.eyes.style.opacity = "1";
        this.$refs.memoji.style.opacity = "0";
        this.$refs.heart.style.opacity = "0";
      } else if (e.target.className.includes("heart")) {
        this.$refs.memoji.style.opacity = "0";
        this.$refs.heart.style.opacity = "1";
        this.$refs.eyes.style.opacity = "0";
      } else {
        this.$refs.memoji.style.opacity = "1";
        this.$refs.heart.style.opacity = "0";
        this.$refs.eyes.style.opacity = "0";
      }
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cursorouter {
  overflow: visible;
}
$size: 80px;
.cursor {
  width: $size;
  height: $size;
  position: fixed;
  left: calc(($size / 2) * -1);
  top: calc(($size / 2) * -1);
  z-index: 2;
  border-radius: 100px;
  pointer-events: none;
}
.eyes {
  background-image: url("../assets/eyes_1f440.png");
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
}
.memoji {
  background-image: url("../assets/Memoji.png");
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
}
.heart {
  background-image: url("../assets/heart.png");
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
}
</style>
