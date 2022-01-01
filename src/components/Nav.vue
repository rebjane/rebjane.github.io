<template>
  <div class="nav">
    <div class="navwrapper">
      <ul ref="nav">
        <li v-for="(item, i) in $menu.items" :key="i">
          <a :href="$cms.textField(item.link)"
            ><p style="font-size: 30px" ref="p">
              {{ $cms.textField(item.label) }}
            </p></a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  props: {
    winresize: Object,
  },
  data() {
    return {
      nav: [
        {
          label: "Album Artwork",
          link: "#album-artwork",
        },
        {
          label: "Motion Graphics",
          link: "#motion-graphics",
        },
        {
          label: "Illustration",
          link: "#illustration",
        },
        {
          label: "Logos",
          link: "#album-artwork",
        },
      ],
    };
  },
  watch: {
    winresize() {
      this.navresize();
    },
  },
  computed: {},
  components: {},
  methods: {
    navresize() {
      var maxwidth = window.innerWidth * 0.8;
      for (let i = 0; i < this.$refs.p.length; i++) {
        this.$refs.p[i].style.fontSize = `${Math.max(maxwidth / 34, 16)}px`;
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.navresize();
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../main.scss";

.nav {
  width: 100%;
}
li {
  list-style-type: none;
  display: inline-block;
  padding: 0 20px;
  cursor: pointer;
  @media screen and (max-width: $mobiledown) {
    width: calc(50% - 40px);
  }
  p {
    margin: 0;
    padding: 20px 0;
    color: white;
    text-align: center;
  }
  a {
    text-decoration: none;
  }
}
ul {
  display: inline-block;
  padding: 0;
  bottom: 0;
  margin-top: 30px;
  margin-bottom: 0;
  width: 100%;
}
.navwrapper {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-image: url("../assets/Blackgradient.png");
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
}
</style>
