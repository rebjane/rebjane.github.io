<template>
  <div class="socials">
    <div class="largenav" v-if="winresize.width > 900">
      <Contact />
      <transition v-for="(item, i) in $socials.items" :key="i">
        <div class="socialiconouter heart">
          <a :href="$cms.textField(item.link)" target="_blank">
            <img
              class="socialicon heart"
              v-if="item.icon.url"
              :src="item.icon.url"
            />
          </a>
        </div>
      </transition>
    </div>
    <div v-else class="smallnav">
      <p class="burger" @click="navDrawer" v-if="!showMobileNav">☰</p>
      <p class="burger" @click="navDrawer" v-else>✕</p>
      <div v-if="showMobileNav" class="mobilenavscreen">
        <div class="mobilenavscreeninner">
          <Contact />
          <br />
          <transition-group v-for="(item, i) in $socials.items" :key="i">
            <div :key="`social${i}`" class="socialiconouter heart">
              <a :href="$cms.textField(item.link)" target="_blank">
                <img
                  class="socialicon heart"
                  v-if="item.icon.url"
                  :src="item.icon.url"
                />
              </a>
            </div>
            <br :key="`br${i}`" />
          </transition-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Contact from "./Contact.vue";

export default {
  name: "Socials",
  watch: {
    winresize(e) {
      if (this.winresize.width > 900) {
        this.showMobileNav = false;
      }
    },
  },
  props: {
    winresize: Object,
  },
  data() {
    return {
      showMobileNav: false,
    };
  },
  computed: {},
  components: {
    Contact,
  },
  methods: {
    navDrawer() {
      this.showMobileNav = !this.showMobileNav;
    },
  },
  mounted() {
    // console.log(this.winresize);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.socials {
  position: fixed;
  z-index: 2;
  right: 0;
  color: white;
}
.socialicon {
  width: 30px;
  display: block !important;
}
.socialiconouter {
  vertical-align: middle;
  mix-blend-mode: difference;
  display: inline-block;
  padding: 20px 10px;
}
.smallnav {
  .socialicon {
    width: 50px;
  }
  .socialiconouter {
    padding: 10px 10px;
  }
}

.burger {
  font-size: 50px;
  margin: 0;
  mix-blend-mode: difference;
  padding-right: 10px;
}
.mobilenavscreeninner {
  margin-top: 50vh;
  transform: translateY(-50%);
  mix-blend-mode: difference;
  display: inline-block;
}
.mobilenavscreen {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: white;
  z-index: -1;
  ::v-deep .contact {
    padding: 0;
    padding-bottom: 20px;
    p {
      font-size: 20px;
    }
  }
}
</style>
