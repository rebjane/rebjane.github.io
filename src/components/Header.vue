<template>
  <div id="header" :class="`${showDropdown ? `` : `blend`}`">
    <a href="/"><Reb class="reb" /></a>
    <div class="hamburger" @click.prevent="showDropdown = !showDropdown"><div v-html="showDropdown ? `X` : `☰`"></div></div>
    <transition name="menu">
      <div :class="`header-inner ${showDropdown ? `show` : `hide`}`">
        <div class="title">
          <div class="worktitle">
            <transition appear name="header">
             <h2 :key="workTitle">{{workTitle}}</h2>
            </transition>
            </div>
        </div>
      <div class="nav">
          <ul ref="navlist">
          </ul>
        </div>
        
          <div class="info">
            <p class="time" v-if="time"> {{time}}</p>
            <p class="date" v-if="date"> {{date}}</p>
          </div>
          <div class="progress" v-if="workTitle">
            <div class="line"/>
            <div class="bar" :style="`width: ${barWidth}px`"/>
            </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Reb from "./Reb.vue";
export default {
  name: 'Header',
  props: {
    scrollPosY: Object,
    workTitle: {
      type: String,
      default: "d"
    },
    pos: Object,
    winresize: Event
  },
  components: {
    Reb
  },
  watch: {
    pos: {
      handler(e) {
        if (e) {
          this.barWidth = Math.min(400, (((e.pos + window.innerWidth / 2) / e.width) * 400));
        }
      },
    },
    winresize: {
      handler() {
        this.showDropdown = false;
        this.isMobile = window.innerWidth <= 900;
        this.listStyle = this.isMobile ? `display: block; ` : `display: inline-block; `;
        this.listStyle += `vertical-align: middle; margin: 1em;`;
        if (this.$refs.navlist) this.$refs.navlist.children.forEach(i => i.style = this.listStyle);
      },
      immediate:true
    }
  },
  data() {
    return {
      nav: null,
      date: null,
      time: null,
      vowels: [
        "a", "e", "i", "o", "u", "A", "E", "I", "O", "U"
      ],
      seconds: 0,
      isMobile: null,
      showDropdown: false,
      listStyle: null,
      barWidth: 0
    }
  },
  methods: {
    textify() {
      var icon = ``;
      for (let i = 0; i  < this.nav.length; i++) {
        // console.log(this.nav[i].open);
        if (this.nav[i].icon.url) {
          icon = `<img style="width: 30px; vertical-align: middle;" src="${this.nav[i].icon.url}"/>`;
        }
       this.$refs.navlist.innerHTML += `<li style="${this.listStyle};"><a target="${this.nav[i].open}" style="text-decoration: none; color: black;" href="${this.nav[i].link}">${icon}${this.navify(this.nav[i].text)}</a></li>`;
      }
      this.$refs.navlist.style += 
      `font-family: Helvetica;
        font-size: 14px;`;
    },
    navify(text) {
      var navitem = "";
      for (let j = 0; j < text.length; j++)  {
          if (this.vowels.indexOf(text[j]) > -1) {
              navitem += `<span style=" font-family: Times;">${text[j]}</span>`;
            } else {
            navitem += `<span>${text[j]}</span>`;
        }
      }
      return navitem;
    },
    updateTime() {
        var time = new Date().toString().split(" ")[4].split(":");
        var AMorPM = time[0] > 12 ? {mode: "PM", denom: 12} : {mode: "AM", denom: 0};
        this.time = `${Math.abs(AMorPM.denom - time[0])}:${time[1]} ${AMorPM.mode}`;
    },
    getDate() {
      this.updateTime();
      this.seconds = 60 - new Date().toString().split(" ")[4].split(":")[2];
      setInterval(() => {
          this.updateTime();
          this.seconds = 60; 
       }, this.seconds * 1000);
      var date = new Date().toString().split(" ");
      var day = "";
      switch(date[0]){
        case "Sun": {
          day = "Sunday";
          break;
        }
        case "Mon": {
          day = "Monday";
          break;
        }
        case "Tue": {
          day = "Tuesday";
          break;
        }
        case "Wed": {
          day = "Wednesday";
          break;
        }
        case "Thu": {
          day = "Thursday";
          break;
        }
        case "Fri": {
          day = "Friday";
          break;
        }
        case "Sat": {
          day = "Saturday";
          break;
        }
      }
      this.date = `${day} ${date[1]}. ${date[2]}, ${date[3]}`;
    }
  },
  mounted() {
    this.nav = this.$cats;
    this.textify();
    this.getDate();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import  "../main.scss";

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 5px 0;
  margin: 0;
  mix-blend-mode: difference;
}
.worktitle {
  top: 0%;
  margin-top: 10px;
  left: 10%;
  overflow: hidden;
  // bottom: 0;
  // left: 50%;
  // transform: translateX(-50%);
  position: fixed;
  // transform: translateX(-50%) translateY(-50%) rotate(-90deg);
  font-family: helvetica;
  // font-family: Times;
  font-weight: bold;
  text-transform: uppercase;
  z-index: -10;
  h2 {
    margin: 0;
    font-size: 80px;
    transform: translateY(0%);
    transition: transform .25s ease;
  }
  .header-enter-to, .header-enter-active  {
    transition: transform .25s ease;
    transform: translateY(100%);
  }
  .header-leave-to, .header-leave-active  {
    transition: transform .25s ease;
    transform: translateY(-100%);
  }
}
li {
  display: inline-block;
  margin: 0 40px;
}
.superscript {
  font-size: 50px;
  position: absolute;
}
.nav, .title {
  // border-bottom: 2px solid black;
  display: inline-block;
  position: fixed;
  
}
.title {
  left: 0;
  padding: 30px;
  mix-blend-mode: difference;
}
.nav {
  font-family: Helvetica;
  right: 0;
  mix-blend-mode: difference;
  padding: 30px;
  @media screen and (max-width: $mobiledown) {
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }
}
.date {
  bottom: 0;
  margin-left: auto;
  position: fixed;
  left: 0;
  padding: 20px;

}
.date, .time {
  font-size: 14px;

}
.time {
   bottom: 0;
   position: fixed;
  margin-right: auto;
  right: 0;
  padding: 20px;

}
.info {
  padding: 0 20px;
  display: flex;
  // border-bottom: 1px solid black;
  p {
    margin-top: 0;
    margin-bottom: 0;
  }
 
}
#header {
  position: fixed;
  width: 100%;
  
  top: 0;
  z-index: 10;
  
  // background: white;
}
.header-inner {
  // background-image: url("../assets/BG_2021.gif");
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  @media screen and (min-width: $mobileup) {
    mix-blend-mode: difference;
  }
}
.blend {
  mix-blend-mode: difference;
}
.hide {
  @media screen and (max-width: $mobiledown) {
    background: white;
    height: 0;
    transform: translateY(-100vh);
    transition: height .75s ease, transform 4s ease;
  }
}
.show {
  z-index: 14;

  @media screen and (max-width: $mobiledown) {
    background: white;
    transform: translateY(0vh);
    transition: height .75s ease, transform .75s ease;
    height: 100vh;
  }
}
.reb {
  width: 50px;
  mix-blend-mode: difference;
  position: fixed;  
  padding: 1em;
  z-index: 14;
}
.hamburger {
  position: fixed;  
  right: 0;
  font-size: 40px;
  font-family: Helvetica;
  cursor: pointer;
  padding: .5em;
  mix-blend-mode: difference;
  margin: 0;
  z-index: 12;
  width: 40px;
  height: 40px;
  div {
    display: inline-block;
    text-align: center;
  }
  @media screen and (min-width: $mobileup) {
    display: none;
  }
}
.progress {
  position: fixed;
  bottom: 0;
  height: 30px;
  left: 50vw;
  transform: translateX(-50%);
  .line {
    border-bottom: 1px solid white;
    width: 400px;
  }
  .bar {
    height: 10px;
    width: 100px;
    background: white;
    margin-top: -5px;
  }
}
</style>
