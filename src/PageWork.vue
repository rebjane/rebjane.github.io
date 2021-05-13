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
            <img :src="item.primary.image.url"/>

            <p class="desc">{{$text(item.primary.description)}}</p>
            
          </div>
        </transition>
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
      console.log(this.slug, this.type);
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
    float: right;
    width: 50%;
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
  width: 100%;
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
  width: 50%;
  padding: 1em 1em 1em 2em;
  @media screen and (max-width: $mobiledown) {
    margin-top: 20px;
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
</style>
