<template>
  <div id="featured">
    <h2>Worked With</h2>
    <div class="feature-box">
    <div v-for="(item, i) in $featured.data.featured" :key="i" class="feature">
      <img :src="item.image.url"/>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Page',
  props: {
  
  },
  watch: {
  },
  data() {
    return {
     
    }
  },
  methods: {

  },
  mounted() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../main.scss";

img {
  @media screen and (max-width: $mobiledown) {
      width: 50%;
      padding: 0;
    }
    @media screen and (min-width: $mobileup) {
      max-width: calc(25vw - 20px);  
      padding: 10px;
      max-height: 100px;
    }

}
h2 {
  font-size: 14px;
  font-family: Times;
  font-weight: 100;
}
.feature-box {
  // filter: grayscale(100%);
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  @media screen and (min-width: $mobileup) {
    display: flex;
    .feature:first-child {
      margin-left: auto;
    }
    .feature:last-child {
      margin-right: auto;
    }
  }

}
</style>
