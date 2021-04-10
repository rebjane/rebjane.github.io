<template>
  <div id="name">
        <div class="name-wrapper">
            <h1 ref="name">THE REB<span class="superscript">J</span></h1>
            <h1 class="outline" v-for="(item, i) in 6" :key="i" >
                <span :ref="`outline-${i}`">THE REB
                    <span class="superscript">J
                    </span>
                </span>
            </h1>
            <div class="blurb">
                <p>
                    Rebecca is an Illustration Artist and Designer from Toronto.
                </p>
                </div>
            </div>
    </div> 
        
</template>

<script>
import { TimelineMax } from "gsap";
export default {
  name: 'Name',
  props: {
  
  },
  watch: {
  },
  data() {
    return {
        timeline: new TimelineMax({ repeat: -1 , yoyo:true})
    }
  },
  methods: {
      name() {
          this.timeline.to(this.$refs.name, 0, {y: 0}, 0)
          .to(this.$refs.name, 1, {y: 300}, 0)
      },
      outlines() {
          for (let i = 0; i < 6; i++) {
          var name = this.$refs[`outline-${i}`][0];
              var tl = new TimelineMax({ repeat: -1});
              tl.delay((1 / 12) * i);
              tl.to(name, {opacity: 0, duration: 0, delay: 0})
              .to(name, {opacity: 1, duration: 1, delay: .5})
              .to(name, {opacity: 0, duration: .5, delay: 0});
          }
      }
  },
  mounted() {
    this.name();
    this.outlines();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#name {
    height: 100vh;
}
h1 {
    font-size: 120px;
    margin: 0;
    height: 50px;
}
.superscript {
    font-size: 50px;
    position: absolute;
}
.outline {
    -webkit-text-fill-color: rgb(0,0,0,0);
    -webkit-text-stroke-color: white;
    -webkit-text-stroke-width: .5px;
}
.name-wrapper {
    transform: translateY(20%);
}
.blurb {
    width: 25%;
    margin: auto;
}
</style>
