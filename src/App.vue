<template>
  <div id="app" ref="app">
    <div class="view">
      <Name :pos="pos"/>
      <div :class="`bg ${doHoriz ? `active` : ``}` "/>
      <MENU :workTitle="workTitle" :winresize="winresize"/>
      <transition v-for="(item, i) in $slices" :key="i">
        <component :is="item.type.toUpperCase()" 
        :winresize="winresize"
        :idx="i" 
        :appHeight="appHeight"
        :data="item.data"
        :pos="pos"
        :isMobile="isMobile"
        ref="work"
        :class="`${doHoriz ? `active` : ``}`"
        @work="handleWorkInfo"/>
      </transition>
      <div id="footer">
        <div class="footer-wrap">
          <form action="https://formspree.io/f/xjvjkyrv" method="POST">
            <div class="large"><h2>let's<br/>work<br/>together? </h2></div>
            <div class="small">
              <div class="contact" ref="contact" action="https://formspree.io/f/xjvjkyrv" method="POST">
                <input type="name" name="Name" placeholder="Name" required="true"/>
                <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" name="Email" placeholder="Email" required="true"/>
                <textarea name="Message" placeholder="Message" rows="5" required="true"/>
              </div>
            </div>
            <div class="submit" @mouseover="showCurtain(true)" @mouseleave="showCurtain(false)">
              <input type="submit" ref="submit_curtain" class="submit-curtain"/>
              <div class="arrow">→</div>
            </div>
          </form>
        </div>
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
    Name,
  },
  watch: {
    pos: {
      handler(e) {

        this.active = (() => {
          var truePos = this.workInfo.map(i => e < i.stopBottom).indexOf(true);
          if (truePos === -1) {
            truePos = this.workInfo.length - 1;
          }
          return truePos;
        })();
        console.log(this.active);
      }
    },
    // doHoriz: {
    //   handler() {
    //     if (!this.doHoriz) {
    //       if (this.dir === "down" && this.active === this.$slices.length) {
    //         this.active = this.$slices.length - 1;
    //         return;
    //       }
    //       if (this.dir === "down") {
    //         this.active = Math.max(Math.min((this.active + 1), this.$slices.length - 1) , 0);
    //       }
    //       else if (this.dir === "up") {
    //           this.active = Math.max(Math.min((this.active - 1), this.$slices.length - 1), 0);
    //       }
    //     }
    //     // console.log("doHoriz:", e, " dir:", this.dir, " active:", this.active)
        
    //   } ,
    // },
    // dir: {
    //   handler(e) {
    //   }
    // },
    isMobile: {
      handler(e) {
          if (e) {
            this.horizPos.forEach((item, idx) => {
              if (this.$refs.work) 
                this.$refs.work[idx].$el.children[0].style = `transform: translateX(-${0}px)`;
            })
          } else {
            this.horizPos.forEach((item, idx) => {
              if (this.$refs.work) 
                this.$refs.work[idx].$el.children[0].style = `transform: translateX(-${this.horizPos[idx]}px)`;
            })
          }
        }
      }
  },
  props: {
  },
  methods: {
    // doSubmit() {
    //   const axios = require('axios');
    //     axios.post('https://formspree.io/f/xjvjkyrv', {
    //     name: 'Fred',
    //     from: 'rebjanec@gmail.com',
    //     _subject: "test",
    //     message: "test message"
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   }).catch(function (error) {
    //       console.log(error);
    //     });
    // },
    showCurtain(show) {
      this.$refs.submit_curtain.style.width = `${show ? `100%` : `0%`} `;
    },
    handleWorkInfo(i) {
      this.workInfo.push(i);
    },
    getDevice() {
      var device = navigator.userAgent;
      this.isMobile = this.mobile.map(i => device.includes(i)).indexOf(true) > -1 || window.innerWidth < 901;
    },
    scroll() {
      window.addEventListener("mousewheel",this.handleScroll, {passive:false})
    },
    removeScroll() {
      window.removeEventListener("mousewheel",this.handleScroll, {passive:false})
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
    this.pos = window.scrollY;
    this.dir = e.deltaY > 0 ? "down" : "up";
    if (!this.isMobile) {
        if (this.pauseScroll) {
          e.preventDefault();
          this.$nextTick(() => {
            this.pauseScroll = false;
          })
        }
        this.activeWork = this.$refs.work[this.active].$el;
        this.stopLimit = this.workInfo[this.active].stopLimit;

        this.boxWidth = this.workInfo[this.active].boxWidth;
        this.activeWork.style.width =  this.boxWidth;
        
          if ((this.isWithinTopLimit() || this.isWithinBottomLimit()) && (!this.isOutLeftLimit() && !this.isOutRightLimit())) {
            this.doHoriz = true;
          } else {
            this.doHoriz = false;
          }
          if (this.doHoriz) {
            this.workTitle = this.workInfo[this.active].id;
            e.preventDefault();
            window.scrollTo({top: this.stopLimit, behavior: 'smooth'});
            this.horizPos[this.active] = Math.max((this.horizPos[this.active] + e.deltaY), 0);
            this.activeWork.children[0].style = `transform: translateX(-${this.horizPos[this.active]}px)`;
          } else {
            this.workTitle = "";
          }
      }
    }
  },
  data() {
    return {
      appHeight: 0,
      active: 0,
      workInfo: [],
      horizPos: [],
      activeWork: null,
      doHoriz: false,
      pauseScroll: true,
      workTitle: "",
      mobile: ["iPad", "iPhone", "Android"],
      isMobile: false,
      pos: null,
      winresize: null,
      mouse: null,
      dir: null
    }
  },

  mounted() {

    window.addEventListener("mousemove", (e) => {
      this.mouse = e;
    });
    this.getDevice();

    if (window.location.href.split('#')[1]) {
      window.location.href = "/";
    }
    for (let i = 0; i < this.$slices.length; i++) {
      this.horizPos.push(0);
    }
    window.scrollTo(0, 0);

    window.addEventListener("resize", (e) => {
      this.winresize = e;
      this.getDevice();
    })


    this.$nextTick(() => {
      this.$nextTick(() => {
        this.appHeight = Math.floor(this.$refs.app.getBoundingClientRect().height);
        if (!this.isMobile) this.scroll();
      })
    })
  }
}
</script>

<style lang="scss">
@import "./main.scss";
.view {
  overflow: hidden;
}
.contact {
  input {
    display: block;
    margin: 1em 0;
  }
}
.footer-wrap {
  position: relative;
  border: 1px solid white;
  margin:auto;
  @media screen and (min-width: $mobileup) {
    margin-top: 50vh;
    transform: translateY(-50%);
  }
  overflow: hidden;
}
#footer {
  @media screen and (max-width: $mobiledown) {
      padding-top: 1em;
    }
  .submit {
    @media screen and (min-width: $mobileup) {
      display: table-cell;
    }
    
    vertical-align: middle;
    cursor: pointer;
    background: white;
    color: black;
    height: 100%;
    right: 0;
    font-family: helvetica;
    border: none;
    z-index: 1;
    .submit-curtain {
      padding: 0;
      transition: width .25s ease;
      position: absolute;
      // pointer-events: none;
      @media screen and (min-width: $mobileup) {
        top: 0;
        right: 0;
      }
      @media screen and (max-width: $mobiledown) {
        // display: none;
        bottom: 0;
        height: 60px;
        left: 0;
        opacity: 0;
        width: 100% !important;
      }
      background: white;
      width: 0%;
      height: 100%;
      border: none;
      font-size: 60px;
      font-weight: bold;
    }
  }
  display: table;
  margin:auto;
  height: 100vh;
  font-size: 50px;
  .large {
    font-family: helvetica;
    // text-transform: uppercase;
    text-align: left;
    @media screen and (min-width: $mobileup) {
      text-align: right;
    }
    h2 {
      margin: 0;
    }
  }
    
}

.large, .small {
  @media screen and (min-width: $mobileup) {
      display: table-cell;
      padding: 1em;

    }
  @media screen and (max-width: $mobiledown) {
      max-width: calc(100% - 1.5em);
      padding: .5em;
    }
  vertical-align: middle;
  height: 100%;
}

.small {
  @media screen and (min-width: $mobileup) {
    padding-left: 1em;
  }
  text-align: left;
  input, textarea {
    resize: none;
    background: none;
    border: none;
    color: white;
    font-size: 18px;
    font-family: times;
    font-weight: 100;
    border-bottom: 1px solid white;
    &:focus {
      outline: none
    }
  }
  @media screen and (max-width: $mobiledown) {
      input, textarea {
        width: 100%;
      }
    }
}
html {
  scroll-behavior: smooth;
}
#app {
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  
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
  background-image: url("./assets/BG_2021.gif");
  // background: black;
  // transition: background-color 1s ease;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  mix-blend-mode: difference;
  pointer-events: none;
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
.workpage {
  // background-color: black;
  transition: background-color 1s ease;
  z-index: -2;
}
// .active, .active .wrap {
//   background-color: white;
//   transition: background-color 1s ease;
// }

</style>
