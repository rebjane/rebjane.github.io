<template>
  <div id="pagework">
      <MENU :workTitle="``" :winresize="winresize"/>
      <div class="inner">
        <transition v-for="(item, i) in data" :key="i">
            <div>
              <div class="info">
                <h1>{{$text(item.primary.title)}}</h1>
                <div class="infomini">
                  <h2>Medium</h2>
                  <p>{{item.primary.medium}}</p>
                </div>
                <div class="infomini">
                  <h2>Developed In</h2>
                  <p>{{item.primary.developed_in}}</p>
                </div>
              </div>
              <div class="separator"/>
              <p class="desc">{{$text(item.primary.description)}}</p>
              <img v-if="!item.primary.video.url" :src="item.primary.image.url"/>
              <video controls v-else-if="item.primary.video.url">
                <source :src="item.primary.video.url"/>
              </video>
              <div v-else class="empty"/>
            </div>
          </transition>
          <div v-if="data">
            <transition-group v-for="(item, i) in data[0].items" :key="i">
              <div :class="`${item.alignment.toLowerCase()} section`" :key="`${i}-section`">
                <div class="media">
                  <video controls v-if="item.video.url">
                    <source :src="item.video.url"/>
                  </video>
                  <img v-if="item.image.url" :src="item.image.url"/>
                </div>
                <div class="descwrapper">
                  <p v-if="item.text.length" class="desc">{{$text(item.text)}}</p>
              </div>
              </div>
              </transition-group>
          </div>

      </div>
  </div>
</template>

<script>
import MENU from './components/Header.vue'
export default {
  name: 'Page',
  props: {
  
  },
  components: {
    MENU,
  },
  watch: {
  },
  data() {
    return {
      winresize: null,
      isMobile: false,
      mobile: ["iPad", "iPhone", "Android"],
      slug: '',
      type: '',
      data: null
    }
  },
  methods: {
    getDevice() {
      var device = navigator.userAgent;
      this.isMobile = this.mobile.map(i => device.includes(i)).indexOf(true) > -1 || window.innerWidth < 901;
    },
    getPageData() {
      // console.log(this.slug, this.type);
      this.data = this.$work.filter(i => this.$text(i.data.id).toLowerCase() === this.type)[0].data.body;
      this.data = this.data.filter(i => this.$text(i.primary.title).split(" ").join("-").toLowerCase() === this.slug);
    },
    getSlug() {
      var arr = window.location.href.split("/");
      this.slug = arr[arr.length - 1];
      this.type = arr[arr.length - 2];
    }
  },
  mounted() {
    window.scrollTo(0, 0);
    window.addEventListener("resize", (e) => {
      this.winresize = e;
      this.getDevice();
    })
    this.getSlug();
    this.getPageData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./main.scss";

img {
  @media screen and (min-width: $mobileup) {
    width: 50%;
    vertical-align: middle;
    display: inline-block;
  }
  @media screen and (max-width: $mobiledown) {
    width: 100%;
  }
}
#pagework {
  text-align: left;
}
.inner {
    // padding: 0 10%;
}

.info {
  // display: inline-block;
  width: 90%;
  vertical-align: top;
  padding-left: 5%;
    h2 {
      font-size: 20px;
      display: inline-block;
      margin: 0;
      font-weight: 100;
      width: 20%;
      vertical-align: top;
        @media screen and (max-width: $mobiledown) {
          width: 50%;
          font-size: 16px;
        }
    }
    p {
      font-size: 50px;
      margin: 0;
      padding-bottom: 30px;
      display: inline-block;
      font-family: Helvetica;
      font-weight: 700;
      vertical-align: top;
      width: 80%;
        @media screen and (max-width: $mobiledown) {
          width: 50%;
          font-size: 20px;
        }
    }
    h1 {
      font-size: 180px;
      line-height: 1;
      margin-top: 0;
        @media screen and (max-width: $mobiledown) {
          font-size: 50px;
          padding-top: 100px;
        }
    }
    .infomini {
      display: inline-block;
      width: 50%;
        @media screen and (max-width: $mobiledown) {
          width: 100%;
        }
    }
}
.desc {
  font-size: 30px;
  @media screen and (max-width: $mobiledown) {
    margin-top: 20px;
    padding: 0 1em;
  }
  @media screen and (min-width: $mobileup) {
    display: inline-block;
    vertical-align: middle;
    height: 100%;
    padding-left: 2em;
    width: calc(50% - 2em);
  }
}
.separator {
  width: 100%;
  border-bottom: 1px solid white;
  margin: 100px 0;
  @media screen and (max-width: $mobiledown) {
    margin: 50px 0;
  }
}
  video {
    width: 100%;
    text-align: center;
  }
.section {
  margin: 5em 0;
  vertical-align: middle;
}
.left, .right {
  position: relative;
  
  @media screen and (min-width: $mobileup) {
    display: flex;
  }

  .desc {
    margin: 0;
    width: 100%;
    height: auto;
    @media screen and (min-width: $mobileup) {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .descwrapper {
    height: auto;
    position: relative;
    @media screen and (min-width: $mobileup) {
      width: 50%;
    }
    width: 100%;

  }
}
.right {
  flex-direction: row-reverse;
}
.center {
  text-align: center;
  .desc {
    padding: 0;
    text-align: left;
  }
}
.media {
  img {
    width: 100%;
  }
  width: 100%;
    @media screen and (min-width: $mobileup) {
      width: 50%;
    }
}
video, .empty {
  width: 100%;
  display: inline-block;
  vertical-align: middle;
      @media screen and (min-width: $mobileup) {
      width: 50%;
    }
}
.empty {
  background: grey;
  height: 50vh;
  position: relative;
  &:after {
    content: 'Nothing Here...';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    font-family: Helvetica;
    font-size: 20px;
  }
}
</style>
