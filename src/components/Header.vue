<template>
  <div id="header">
    <div class="header-inner">
      <div class="title">
        <!-- <h1 ref="title">THE REB<span class="superscript">J</span></h1> -->
        <Reb class="reb" />
      </div>
    <div class="nav">
        <ul ref="navlist">
        </ul>
      </div>
      
        <div class="info">
          <p class="time" v-if="time"> {{time}}</p>
          <p class="date" v-if="date"> {{date}}</p>
        </div>
    </div>
  </div>
</template>

<script>
import Reb from "./Reb.vue";
export default {
  name: 'Header',
  props: {
    scrollPosY: Object
  },
  components: {
    Reb
  },
  watch: {
    // scrollPosY: {
    //   handler(e) {
    //     // console.log(this.$refs.title, Math.max(Math.min((80 / e), 1), 0.5) * 100);
    //     this.$refs.title.style=`font-size: ${Math.max(Math.min((80 / e), 1), 0.5) * 100}px`
    //     this.$refs.navlist.style =`font-size: ${Math.max(Math.min((80 / e), 1), 0.5) * 30}px`

    //   }
    // }
  },
  data() {
    return {
      nav: null,
      date: null,
      time: null,
      vowels: [
        "a", "e", "i", "o", "u", "A", "E", "I", "O", "U"
      ],
      seconds: 0
    }
  },
  methods: {
    textify() {
      for (let i = 0; i  < this.nav.length; i++) {
       this.$refs.navlist.innerHTML += `<li style="display: inline-block; padding: 0 20px;"><a style="text-decoration: none; color: black;" href="${this.nav[i].link}">${this.navify(this.nav[i].text)}</a></li>`;
      }
      this.$refs.navlist.style += 
      `font-family: Helvetica;
        font-size: 16px;`;
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 5px 0;
  margin: 0;
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

}
.nav {
  font-family: Helvetica;
  right: 0;
  padding: 30px;
}
.date {
  bottom: 0;
  margin-left: auto;
  position: fixed;
  left: 0;
  padding: 20px;
  font-size: 16px;

}
.time {
   bottom: 0;
   position: fixed;
  margin-right: auto;
  right: 0;
  padding: 20px;
  font-size: 16px;

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
  mix-blend-mode: difference;
  top: 0;
  z-index: 10;
  // background: white;
}
.header-inner {
  // background-image: url("../assets/BG_2021.gif");
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
}
.reb {
  width: 50px;
}
</style>
