<template>
  <div class="intro">
    <h1 ref="intro"></h1>
  </div>
</template>

<script>
export default {
  name: "Intro",
  props: {},
  data() {
    return {
      count: 0,
    };
  },
  computed: {},
  components: {},
  methods: {},
  mounted() {
    var introArr = this.$cms.textField(this.$intro.my_description).split("");
    var interval = setInterval(() => {
      this.$refs.intro.innerHTML += introArr[this.count];
      this.count += 1;
      if (!introArr[this.count]) {
        clearInterval(interval);
      }
    }, Math.random() * 100 + 100);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  font-size: 5vw;
  margin: auto;
  display: inline-block;
  vertical-align: middle;
}
.intro {
  padding: 20vh 0 10vh;
  width: 90%;
  margin: auto;
}
</style>
