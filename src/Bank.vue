<template>
  <div id="bank-list">
    <h1>Bank Links</h1>
    <div class="links">
      <transition v-for="(item, i) in $bank.banks" :key="i">
        <a :href="$cms.textField(item.link)" target="_blank">
          <div
            class="link heart"
            :style="`background-image: url(${item.logo.url})`"
          ></div>
        </a>
      </transition>
    </div>
    <div class="disclaimer">
      <p>
        The sole purpose of this webpage is to make the payment process quicker
        and more accessible, directly from the issued invoice itself.
      </p>
      <p>
        Please note that these are simply external links to the banks only, and
        that your connection will be completely separate and secure from this
        website.
      </p>
    </div>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
export default {
  name: "App",
  props: {
    winresize: Object,
  },
  data() {
    return {
      // winresize: null,
    };
  },
  computed: {},
  components: {
    Nav,
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="scss">
#bank-list {
  overscroll-behavior: none;
  color: white;
  padding-top: 100px;
  padding-bottom: 100px;
  padding-left: 10%;
  padding-right: 10%;
  background: lightgray;
  min-height: calc(100vh - 200px);
}
.link {
  display: inline-block;
  vertical-align: middle;
  width: 150px;
  height: 100px;
  padding: 0 20px;
  background: white;
  margin: 0 10px;
  border-radius: 10px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin: 10px;
  -webkit-box-shadow: 0px 0px 17px 6px rgba(0, 0, 0, 0.28);
  box-shadow: 0px 0px 17px 6px rgba(0, 0, 0, 0.28);
}
h1 {
  color: black;
  font-size: 40px;
}
.disclaimer {
  padding-top: 30px;
  width: 50%;
  margin: auto;
  p {
    color: black;
    font-family: Helvetica;
  }
}
@media screen and (max-width: 1000px) {
  .disclaimer {
    width: 100%;
  }
  #bank-list {
    padding-left: 5%;
    padding-right: 5%;
  }
}
</style>
