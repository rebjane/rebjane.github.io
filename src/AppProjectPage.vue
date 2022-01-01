<template>
  <div id="pagework">
    <div class="inner" v-if="data.length">
      <transition v-for="(item, i) in data" :key="i">
        <div>
          <div class="info">
            <h1>{{ $cms.textField(item.primary.title) }}</h1>
            <div class="infomini">
              <h2>Medium</h2>
              <p>{{ item.primary.medium }}</p>
            </div>
            <div class="infomini">
              <h2>Developed In</h2>
              <p>{{ item.primary.developed_in }}</p>
            </div>
          </div>
          <div class="separator" />
          <div
            class="desc"
            v-html="$cms.htmlField(item.primary.description)"
          ></div>
          <img
            class="mainimage"
            v-if="!item.primary.video.url"
            :src="item.primary.image.url"
          />
          <video controls v-else-if="item.primary.video.url">
            <source :src="item.primary.video.url" />
          </video>
          <div v-else class="empty" />
        </div>
      </transition>
      <div v-if="data">
        <transition-group v-for="(item, i) in data[0].items" :key="i">
          <div
            :class="`${item.alignment.toLowerCase()} section`"
            :key="`${i}-section`"
          >
            <!-- <div :class="`${!item.text.length ? `floating` : ``} media`"> -->
            <video controls v-if="item.video.url">
              <source :src="item.video.url" />
            </video>
            <img v-if="item.image.url" :src="item.image.url" />
            <!-- </div> -->
            <div class="descwrapper">
              <p v-if="item.text.length" class="desc">
                {{ $cms.textField(item.text) }}
              </p>
            </div>
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Intro from "./components/Intro.vue";
import Portfolio from "./components/Portfolio.vue";
export default {
  name: "App",
  props: {},
  data() {
    return {
      winresize: null,
      data: [],
    };
  },
  computed: {},
  components: {
    Nav,
    Portfolio,
    Intro,
  },
  methods: {},
  mounted() {
    window.addEventListener("resize", (e) => {
      this.winresize = e;
    });
    console.log(this.$portfolio_simplified);
    this.data.push(
      this.$portfolio_simplified.find((i) => {
        return (
          window.location.pathname === `/${this.$cms.textField(i.primary.url)}`
        );
      })
    );
    console.log(this.data);
  },
};
</script>

<style lang="scss" scoped>
@import "./main.scss";

img {
  @media screen and (min-width: $mobileup) {
    max-height: 100vh;
    max-width: 50%;
    vertical-align: middle;
    display: inline-block;
  }
  @media screen and (max-width: $mobiledown) {
    width: 100%;
  }
}
#pagework {
  text-align: left;
  padding: 30px 0;
}

.mainimage {
  text-align: right;
  margin-left: auto;
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
    padding: 0 2em;
    width: calc(50% - 4em);
  }
  ::v-deep p {
    font-family: Helvetica;
    font-size: 20px;
  }
  ::v-deep a {
    color: white;
  }
}
.separator {
  width: 100%;
  //   border-bottom: 1px solid white;
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
  padding: 5em 0;
  vertical-align: middle;
}
.left,
.right {
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
    text-align: center;
  }
}
.media {
  margin: auto;
  // img {
  //   width: 100%;
  // }
  // width: 100%;
  @media screen and (min-width: $mobileup) {
    height: 100vh;
    width: auto;
  }
}
video,
.empty {
  width: 100%;
  display: inline-block;
  vertical-align: middle;
  @media screen and (min-width: $mobileup) {
    width: 50%;
  }
}

// @media screen and (min-width: $mobileup) {
//   .right .floating {
//     margin-right: 20vw;
//   }
//     .left .floating {
//     margin-left: 20vw;
//   }
// }

.empty {
  background: grey;
  height: 50vh;
  position: relative;
  &:after {
    content: "Nothing Here...";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    font-family: Helvetica;
    font-size: 20px;
  }
}
</style>
