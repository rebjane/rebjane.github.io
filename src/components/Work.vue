<template>
  <div :id="`workpage-${idx}`" ref="workpage" class="workpage">
    <div v-if="data.body" class="wrap" ref="work">
    <h2 class="mobileheader">{{$text(data.id)}}</h2>
      <transition v-for="(item, i) in data.body" :key="i">
        <router-link :to="slugify($text(item.primary.title), item)">
        <div class="item" ref="item" :key="wh" :style="imageSize(item)">
          <div class="item-inner" ref="item_inner" >
            <div class="img2wrap">
              <div :style="parallax">
              <img 
              @mouseover="[item.primary.video.url ? [ifVideoShowVideo(i, `play`), hideImage(i)] : null]" 
              @mouseout="item.primary.video.url ? [ifVideoShowVideo(i, `pause`),showImage(i) ] : null" 
              :class="`img2 ${item.primary.video.url ? `invisible` : ``}`" 
              ref="img" 
              :key="wh" 
              :style="imageSize(item)"/>
          <video :id="`${i}-vid`" v-if="item.primary.video.url">
            <source :src="item.primary.video.url"/>
            </video>
          </div>

          </div>

          <p class="title" v-if="item.primary.title.length">{{$text(item.primary.title)}}</p>
        </div>
       </div>
        </router-link>
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
    data: Object,
    idx: Number,
    pos: Number,
    winresize: Event,
    isMobile:Boolean
  },
  watch: {
    isMobile(e) {
      if (e) {
        this.parallax = `transform: translateY(${0}px)`;
      }
    },
    pos(e) {
      if (!this.isMobile){
        var transform = (this.stopLimit - e) * 0.5;
        this.parallax = `transform: translateY(-${transform}px)`;
      }
    }
  },
  data() {
    return {
     sideScrollPos: 0,
     stopLimit: 0,
     boxWidth: 0,
     doFlat: true,
     dir: null,
     active: 0,
     blob: [],
     wh: window.innerHeight,
     parallax: ``,
    }
  },
  methods: {
    hideImage(i) {
      // console.log("ddd");
      this.$refs.img[i].style = "opacity: 0";
    },
    showImage(i) {
      // console.log("ddd");
      this.$refs.img[i].style = "opacity: 1";
    },
    ifVideoShowVideo(idx, status) {
      if (status === "play")  document.getElementById(`${idx}-vid`).play();
      else document.getElementById(`${idx}-vid`).pause();
    },
    imageSize(item) {
      return item.primary.image.dimensions ? `width: ${((this.wh * .6) / (item.primary.image.dimensions.height)) * item.primary.image.dimensions.width}px` : `width: 400px;`;
    },
    blobify(url, i) {
      fetch(url).then(e => e.blob().then((blob) => {
          url = `${URL.createObjectURL(blob).toString()}`;
          this.$refs.img[i].src=url;
          return url;
        }))
    },
    
    calculBoxWidth() {
      for (let i = 0; i < this.data.body.length; i++) {
        this.boxWidth += this.$refs.item[i].getBoundingClientRect().width;
      }
    },
    slugify(title, item) {
      return `/${item.primary.type.toLowerCase()}/${title.toLowerCase().split(" ").join("-")}`;
    }
  },
  mounted() {
    for (let i = 0; i < this.data.body.length; i++) {
      this.blobify(this.data.body[i].primary.image.url, i)
    }
    
    this.$nextTick(() => {
      this.calculBoxWidth();
      this.stopLimit = Math.floor(this.$refs.work.getBoundingClientRect().top - ((window.innerHeight - this.$refs.work.getBoundingClientRect().height) / 2));
      var stopTop = this.$refs.work.getBoundingClientRect().top;
      var stopBottom = this.$refs.work.getBoundingClientRect().bottom;
      this.$refs.workpage.style.width = this.boxWidth;
      this.$emit("work", {boxWidth: this.boxWidth, stopLimit: this.stopLimit, idx: this.idx, stopTop: stopTop, stopBottom: stopBottom, id: this.$text(this.data.id)})
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import  "../main.scss";

@media screen and (min-width: $mobileup) {
  .mobileheader {
    display: none;
  }
  .workpage {
    margin: auto;
    height: 100vh;
    flex-direction: column;
    display: flex;
  }
  .workouter {
    display: inline-block;
    width: 100%;
  }
  .wrap {
    display: flex;
    align-items: stretch;
    flex-direction: row;
    // border-top: .25px solid white;
    // border-bottom: .25px solid white;
  }
  // .item {
  // border-right: .25px solid white;
  // }
  img {
    max-height: 60vh;
  }
}
@media screen and (max-width: $mobiledown) {
  .item {
    width: calc(100% - 4em) !important;
    padding: 2em 0 !important;
    border-top: .25px solid white;
    border-bottom: .25px solid white;
    height: auto !important;
  }
  .img2 {
    width: 100% !important;
    height: auto !important;
  }
}


.wrap {
  margin: auto;
}



img {
  
  max-width: 100vw;
}
.item {
  height: 100%;
  margin: auto;
  // padding: 0 2em;
  // overflow: hidden;
  // border: 1px solid black;


}
.title {
  margin-bottom: 0;
  font-family: helvetica;
  text-transform: uppercase;
  margin-top: auto;
}
.mobileheader {
  font-family: Helvetica;
  font-size: 40px;
  text-transform: uppercase;
}
a {
  color: black;
  text-decoration: none;
  &:hover {
    .img2, video {

      transform: scale(1.1);
      transition: transform .5s ease, opacity .5s ease;
    }
  }
}
.img2, video {
  transform: scale(1);
  transition: transform .5s ease, opacity .5s ease;

}
video {
  width: 100%;
  position: absolute;
  left: 0;
  z-index: -1;
}
// .invisible {
//   opacity: 0;
// }
.img2wrap {
  overflow: hidden;
    -webkit-box-shadow: 0px 0px 25px -3px rgba(0,0,0,0.35); 
  box-shadow: 0px 0px 25px -3px rgba(0,0,0,0.35);
  position: relative;
}
</style>
