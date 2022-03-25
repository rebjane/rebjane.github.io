<template>
  <div class="footer">
    <h2>Worked with</h2>
    <div class="footerlogos">
      <transition v-for="(item, i) in $footer.collabs" :key="i">
        <div class="footerlogo">
          <a
            :href="item.link.length !== 0 ? $cms.textField(item.link) : ''"
            :style="`${
              item.link.length === 0
                ? `pointer-events: none`
                : `pointer-events: auto`
            }`"
            target="_blank"
          >
            <div
              class="footerlogo-inner"
              :style="`background-image: url(${item.image.url})`"
            />
          </a>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {},
  data() {
    return {};
  },
  computed: {},
  components: {},
  methods: {},
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
  padding: 200px 0 200px;
  color: white;
  background: #242424;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(64, 64, 64, 0.18953518907563027) 8%,
    rgba(51, 51, 51, 1) 79%,
    rgba(61, 61, 61, 1) 100%
  );
  h2 {
    font-size: 24px;
    margin-top: 0;
  }

  .footerlogo {
    display: inline-block;
    height: 100px;
    @media screen and (min-width: 1000px) {
      width: 20%;
      padding: 0 2%;
    }
    @media screen and (max-width: 999px) {
      width: 40%;
      padding: 0 2%;
    }
  }
  .footerlogo-inner {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
  }
}
</style>
