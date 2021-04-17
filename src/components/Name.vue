<template>
  <div id="name" ref="namewrap">
        <div class="name-wrapper">
            <h1 ref="name">THE REB<span class="superscript vis">J</span><span class="superscript invis">J</span></h1>
            <h1  class="outline" v-for="(item, i) in 4" :key="i" >
                <span :ref="`outline-${i}`">THE REB<span class="superscript vis">J</span><span class="superscript invis">J</span>
                </span>
            </h1>
            
            </div>
            <div class="blurb">
                <p>
                    Rebecca is an Illustration Artist and Designer from Toronto.
                </p>
            </div>
    </div> 
        
</template>

<script>
import { TimelineMax } from "gsap";
export default {
  name: 'Name',
  props: {
    pos: Number
  },
  watch: {
      pos(e) {
          if (e >= this.$refs.namewrap.getBoundingClientRect().height) {
            this.pause();
          } else {
            this.play();
          }
      }
  },
  data() {
    return {
        timeline: new TimelineMax({ repeat: -1 , yoyo:true}),
        tls: []
    }
  },
  methods: {
      name() {
          this.timeline.to(this.$refs.name, 0, {y: 0}, 0)
          .to(this.$refs.name, 1, {y: 300}, 0)
      },
      outlines() {
          for (let i = 0; i < 4; i++) {
          var name = this.$refs[`outline-${i}`][0];
              this.tls[i] = new TimelineMax({ repeat: -1});
              this.tls[i].delay((1 / 12) * i);
              this.tls[i].to(name, {opacity: 0, duration: 0, delay: 0})
              .to(name, {opacity: 1, duration: 1, delay: .5})
              .to(name, {opacity: 0, duration: .5, delay: 0});
          }
      },
      play() {
        this.timeline.play();
        for (let i = 0; i < this.tls.length; i++) {
            this.tls[i].play();
        }
      },
      pause() {
          this.timeline.pause();
          for (let i = 0; i < this.tls.length; i++) {
              this.tls[i].pause();
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
@import  "../main.scss";

#name {
    height: 100vh;
    position: relative;
}
h1 {
    font-size: 13vw;
    margin: 0;
    height: 75px;
}
.superscript {
    font-size: 50px;
    // position: absolute;
}
.vis {
    position: absolute;
}
.invis {
    opacity: 0;
}
.outline {
    -webkit-text-fill-color: rgb(0,0,0,0);
    -webkit-text-stroke-color: white;
    -webkit-text-stroke-width: .5px;
}
.name-wrapper {
    transform: translateY(20%);
    mix-blend-mode: difference;
}
.blurb {
    width: 25%;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    bottom: 0;
    margin-bottom: 10vh;
    border: 1px solid white;
}
@media screen and (max-width: $mobiledown) {
    
    .blurb {
        width: calc(100% - 6em);
        padding: 0 1em;
    }
}
</style>
