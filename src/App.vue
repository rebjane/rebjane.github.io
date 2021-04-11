<template>
  <div id="app" ref="app">
    <div class="view" :style="`height: ${$view}vh`">
      <Name/>
      <div :class="`bg ${doHoriz ? `active` : ``}` "/>
      <MENU />
      <transition v-for="(item, i) in $slices" :key="i">
        <component :is="item.type.toUpperCase()" 
        :idx="i" 
        :appHeight="appHeight"
        :data="item.data.body"
        ref="work"
        :class="`${doHoriz ? `active` : ``}`"
        @work="handleWorkInfo"/>
      </transition>
      <div class="footer">
        </div>
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
  watch: {
    doHoriz: {
      handler() {
        if (!this.doHoriz) {
          if (this.dir === "down" && this.active === this.$slices.length) {
            this.active = this.$slices.length - 1;
            return;
          }

          if (this.dir === "down") {
            this.active = Math.max(Math.min((this.active + 1), this.$slices.length - 1) , 0);
          }
          if (this.dir === "up") {
              this.active = Math.max(Math.min((this.active - 1), this.$slices.length - 1), 0);
          }
        }
        
        
        // console.log("doHoriz:", e, " dir:", this.dir, " active:", this.active)
        
      } 
    }
  },
  props: {
  },
  methods: {
    handleWorkInfo(i) {
      this.workInfo.push(i);
    },
    scroll() {
      window.addEventListener("mousewheel",this.handleScroll, {passive:false})
    },
    isOutLeftLimit() {
      return this.horizPos[this.active] === 0 && this.dir === "up";
    },
    isOutRightLimit() {
      return this.horizPos[this.active] + (window.innerWidth / 2) >= this.boxWidth && this.dir === "down";
    },
    isWithinTopLimit() {
      return this.pos >= this.stopLimit - 20 && this.dir === "down";
    },
    isWithinBottomLimit() {
      return this.pos <= this.stopLimit + 20 && this.dir === "up";
    },
    handleScroll(e) {
      this.activeWork = this.$refs.work[this.active].$el;
      this.dir = e.deltaY > 0 ? "down" : "up";
      this.pos = window.scrollY;
      this.stopLimit = this.workInfo[this.active].stopLimit;

      this.boxWidth = this.workInfo[this.active].boxWidth;
      this.activeWork.style.width =  this.boxWidth;



        if ((this.isWithinTopLimit() || this.isWithinBottomLimit()) && (!this.isOutLeftLimit() && !this.isOutRightLimit())) {
          this.doHoriz = true;
        } else {
          this.doHoriz = false;
        }
        if (this.doHoriz) {
          e.preventDefault();
          window.scrollTo(0, this.stopLimit);
          this.horizPos[this.active] = Math.max((this.horizPos[this.active] + e.deltaY), 0);
          this.activeWork.children[0].style = `transform: translateX(-${this.horizPos[this.active]}px)`;
        }
        
        
    }
  },
  data() {
    return {
      scrollPosY: {},
      appHeight: 0,
      active: 0,
      workInfo: [],
      horizPos: [],
      activeWork: null,
      doHoriz: false
    }
  },

  mounted() {
    if (window.location.href.split('#')[1]) {
      window.location.href = "/";
    }
    for (let i = 0; i < this.$slices.length; i++) {
      this.horizPos.push(0);
    }
    window.scrollTo(0, 0);

    this.$nextTick(() => {
      this.$nextTick(() => {
        this.scroll();
        this.appHeight = Math.floor(this.$refs.app.getBoundingClientRect().height);
      })
    })
  }
}
</script>

<style lang="scss">
.view {
  overflow: hidden;
}
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
  transition: background-color 1s ease;
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
  mix-blend-mode: difference;
}
.inactive {
  height: 0 !important;
  overflow: hidden;
}
.footer {
  height: 50vh;
}
.workpage {
  background-color: black;
  transition: background-color 1s ease;
  z-index: -2;
}
// .active, .active .wrap {
//   background-color: white;
//   transition: background-color 1s ease;
// }

</style>
