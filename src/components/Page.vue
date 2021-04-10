<template>
  <div id="page" ref="page">
    <!-- <h2 class="title">Work</h2> -->
    <div v-if="work" class="wrap" ref="work">
      <transition v-for="(item, i) in work" :key="i">
        <div class="item" ref="item">
          <img class="img2" ref="img" :src="item.primary.image.url"/>
       </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page',
  props: {
    scrollPosY: Number,
    stop: {
      type: Number
    }
  },
  watch: {
    scrollPosY: {
      handler(e) {
        // this.$nextTick(() => this.$nextTick(() => {
        //   this.getPos();
        // }));
          // console.log(e, this.stop)

        if (e >= this.stop && !this.mouseWheel) {
            this.mouseWheel = true;
            this.$refs.page.addEventListener("mousewheel", this.scrollSideways);
        }
      },
      // immediate:true
    }
  },
  data() {
    return {
     linkSplit: "",
     currentslug: "",
     work: null,
     active: null,
     mouseWheel: false,
     sideScrollPos: 0
    }
  },
  methods: {
    redirect() {
      this.linkSplit = window.location.href.split("/");
        if (this.linkSplit[this.linkSplit.length - 1] === "") {
          window.location.href = `${this.$cats[0].link}`;
      }
    },
    scrollSideways(e) {
        this.sideScrollPos = Math.max((this.sideScrollPos + e.deltaY), 0);
        if (this.sideScrollPos === 0) {
          this.mouseWheel = false;
          this.sideScrollPos = 0;
          this.$refs.page.removeEventListener("mousewheel", this.scrollSideways);
        }
        e.preventDefault();
        console.log(this.sideScrollPos, e.deltaY);
        this.$refs.work.style = `transform: translateX(-${this.sideScrollPos}px)`;

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
.wrap {
  display: flex;
  width: 100%;
}
img {
  width: 400px;
}
.item {
  height: 100%;
  margin: auto;
  padding: 0 2em;
}
</style>
