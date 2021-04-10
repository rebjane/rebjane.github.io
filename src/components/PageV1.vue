<template>
  <div id="page">
    <div v-if="work">
      <transition v-for="(item, i) in work" :key="i">
        <div class="item" ref="item">
          <!-- <p>{{item.primary.image.url}}</p> -->
            <div class="image-outer">
                <img class="hide" ref="img" :src="item.primary.image.url"/>
                <span ref="span" class="show" :key="i">
                <transition appear name="image">
                    <div class="image" :style="`transition-delay: ${i / 10}s`" ref="image">
                      <img class="img2" ref="img" :src="item.primary.image.url"/>
                    </div>
                  </transition>
                </span>
            </div>
       </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page',
  props: {
    scrollPosY: Number
  },
  watch: {
    // scrollPosY: {
    //   handler() {
    //     this.$nextTick(() => this.$nextTick(() => {
    //       this.getPos();
    //     }));
    //   },
    //   immediate:true
    // }
  },
  data() {
    return {
     linkSplit: "",
     currentslug: "",
     work: null,
     active: null
    }
  },
  methods: {
    redirect() {
      this.linkSplit = window.location.href.split("/");
        if (this.linkSplit[this.linkSplit.length - 1] === "") {
          window.location.href = `${this.$cats[0].link}`;
      }
    },
    getPos() {
      for (let i = 0; i < this.$refs.item.length; i++) {
        if (this.$refs.item[i].getBoundingClientRect().top < (this.scrollPosY + (window.innerHeight * .1))) {
          this.$refs.span[i].className = "show";
        }
      }    
    }
  },
  mounted() {
    

    //Temp redirect to first menu option
    this.redirect();

    //Define the current slug
    this.currentslug = this.linkSplit[this.linkSplit.length - 1];

    //Get filtered work based on slug
    this.work = this.$work.filter(i => i.primary.type.toLowerCase() === this.currentslug);

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#page {
  // width: 80%;
  margin: auto;
}
.image-outer {
  width: 100%;
  position:relative;
}
.title {
  font-size: 100px;
  text-align: center;
  font-family: Times;
  font-weight: 100;
}
.image {
  height: 0%;
  opacity: 0;
  transition: height 1s cubic-bezier(0.720, 0.015, 0.240, 0.995), opacity 1s cubic-bezier(0.720, 0.015, 0.240, 0.995); /* custom */
  overflow: hidden;
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: -1;
}
.item {
    // width: 25%;
    display: inline-block;
    overflow: hidden;
    padding: 20px;
}
.hide, .item {
  height: 600px;
}
.hide {
  opacity: 0;
  width: auto;
}
.img2 {
  height: auto;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

// .image-enter {
//   height: 0;
//   transition: height .5s cubic-bezier(0.720, 0.015, 0.240, 0.995); /* custom */
// }

// .image-enter-to {
//   height: 100% ;
//   transition: height .5s cubic-bezier(0.720, 0.015, 0.240, 0.995); /* custom */
// }



.show .image {
  height: 100% ;
  opacity: 1;
  transition: height 1s cubic-bezier(0.720, 0.015, 0.240, 0.995), opacity 1s cubic-bezier(0.720, 0.015, 0.240, 0.995); /* custom */
}

</style>
