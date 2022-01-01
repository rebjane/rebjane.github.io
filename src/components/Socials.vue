<template>
  <div class="socials">
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
</template>

<script>
import Contact from "./Contact.vue";

export default {
  name: "Socials",
  props: {},
  data() {
    return {};
  },
  computed: {},
  components: {
    Contact,
  },
  methods: {},
  mounted() {},
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
}
.socialiconouter {
  display: inline-block;
  vertical-align: middle;

  padding: 20px 10px;
}
</style>
