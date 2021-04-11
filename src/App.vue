<template>
  <div id="app" ref="app">
    <Name/>
    <div class="bg"/>
    <MENU />
     <transition v-for="(item, i) in $slices" :key="i">
      <component :is="item.type.toUpperCase()" 
      :idx="i" 
      :appHeight="appHeight"
      :data="item.data.body"
      ref="work"
      @work="handleWorkInfo"/>
    </transition>
    <div class="footer">
      </div>
  </div>
</template>

<script>
import MENU from './components/Header.vue'
import WORK from './components/Work.vue'
import Name from './components/Name.vue'

export default {
  name: 'App',
  components: {
    MENU,
    WORK,
    Name
  },
  methods: {
    handleWorkInfo(i) {
      this.workInfo.push(i);
    },
    scroll() {
      window.addEventListener("mousewheel",this.handleScroll, {passive:false})
    },
    handleScroll(e) {
      this.activeWork = this.$refs.work[this.active].$el;
      // var dir = e.deltaY > 0 ? "down" : "up";
      var pos = window.scrollY;
      var stopLimit = this.workInfo[this.active].stopLimit;
      var boxWidth = this.workInfo[this.active].boxWidth;
      this.activeWork.style.width = boxWidth;
      // var horizLimit = this.horizPos + (window.innerWidth / 2);
      console.log(pos);
      if (pos >= stopLimit) {
        //  Stop Vertical Scroll
         if ((this.horizPos[this.active] > 0 && this.horizPos[this.active] <= boxWidth) && (this.horizPos[this.active] + (window.innerWidth / 2)) <= boxWidth) {
            e.preventDefault();
        }

        // At the end leaving
        if ((this.horizPos[this.active] + (window.innerWidth / 2)) >= boxWidth) {
          this.active += 1;
          return;
        }

        window.scrollTo(0, stopLimit);
        this.horizPos[this.active] = Math.max((this.horizPos[this.active] + e.deltaY), 0);
        this.activeWork.style = `transform: translateX(-${this.horizPos[this.active]}px)`;
        
      }
    }
  },
  data() {
    return {
      scrollPosY: {},
      appHeight: 0,
      active: 0,
      workInfo: [],
      horizPos: [0, 0],
      activeWork: null
    }
  },

  mounted() {
    window.scrollTo(0, 0);
    if (window.location.href.split('#')[1]) {
      window.location.href = "/";
    }
    this.$nextTick(() => {
      this.$nextTick(() => {
        // console.log(this.$refs.app.getBoundingClientRect().height - window.innerHeight);
        this.scroll();
        this.appHeight = Math.floor(this.$refs.app.getBoundingClientRect().height);
        // console.log(window.innerHeight);
      })
    })
  }
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  scroll-behavior: smooth;
  // margin: 0 5%;
  // margin-left: 5%;
  overflow-x: hidden;
  // background-color: white;
  z-index: -1;
  h1 {
    font-family: Helvetica;
  }
}
span {
  color: white;
}
html {
  background: black;

}
.bg {
  // background-image: url("./assets/BG_2021.gif");
  background: black;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
}
body {
  margin: 0;
  overscroll-behavior: none;
  scroll-behavior: smooth;
}
p {
  font-size: 24px;
}
.active {
  height: 100%;
  transition: height 1s ease;
}
.inactive {
  height: 0 !important;
  overflow: hidden;
}
.footer {
  height: 50vh;
}
</style>
