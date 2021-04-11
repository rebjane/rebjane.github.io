<template>
  <div :id="`workpage-${idx}`" ref="workpage" class="workpage">
    <!-- <h2 class="title" ref="title">Work</h2> -->

    <div v-if="data" class="wrap" ref="work">
      <transition v-for="(item, i) in data" :key="i">
        <div class="item" ref="item">
          <img class="img2" ref="img" :src="item.primary.image.url"/>
          <p class="title" v-if="item.primary.title.length">{{$text(item.primary.title)}}</p>
       </div>
      </transition>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Work',
  props: {
    appHeight: {
      type: Number
    },
    data: Array,
    idx: Number
  },
  watch: {

  },
  data() {
    return {
     addMouseWheel: false,
     sideScrollPos: 0,
     stopLimit: 0,
     boxWidth: 0,
     doFlat: true,
     dir: null,
     active: 0
    }
  },
  methods: {
    calculBoxWidth() {
      for (let i = 0; i < this.data.length; i++) {
        this.boxWidth += this.$refs.item[i].getBoundingClientRect().width;
      }
    },
  },
  mounted() {

    this.$nextTick(() => {
      this.calculBoxWidth();
      this.stopLimit = Math.floor(this.$refs.work.getBoundingClientRect().top - ((window.innerHeight - this.$refs.work.getBoundingClientRect().height) / 2));
      var stopTop = this.$refs.work.getBoundingClientRect().top;
      var stopBottom = this.$refs.work.getBoundingClientRect().bottom;
      this.$refs.workpage.style.width = this.boxWidth;
      this.$emit("work", {boxWidth: this.boxWidth, stopLimit: this.stopLimit, idx: this.idx, stopTop: stopTop, stopBottom: stopBottom,})
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.workpage {
  // width: 80%;
  margin: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.workouter {
  display: inline-block;
  width: 100%;
}
.wrap {
  display: flex;
  align-items: stretch;
  flex-direction: row;
  margin: auto;

}
img {
  height: 50vh;
}
.item {
  height: 100%;
  margin: auto;
  padding: 0 2em;
}
.title {
  margin-bottom: 0;
  font-family: helvetica;
  text-transform: uppercase;
  margin-top: auto;
}

</style>
