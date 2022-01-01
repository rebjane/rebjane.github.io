<template>
  <div class="contact heart">
    <a href="mailto:rebjanec@gmail.com"
      ><p class="heart">Let's get in touch!</p></a
    >
  </div>
</template>

<script>
export default {
  name: "Socials",
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
.contact {
  display: inline-block;
  vertical-align: middle;
  padding-right: 30px;
  p {
    margin: 0;
    background: white;
    padding: 10px;
    color: black;
  }
  a {
    text-decoration: none;
  }
}
</style>
