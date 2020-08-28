<template>
  <div class="page">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {};
  },
  computed: {
    cliStatus() {
      return this.$store.state.cliStatus;
    },
  },
  watch: {
    cliStatus(srg) {
      this.$store.state.path.forEach((element) => {
        if (srg === element.status) {
          this.$router.push(element.path);
        }
      });
    },
  },
  mounted() {
    this.$router.push("/index");
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.page {
  margin-top: 80px;
  padding-top: 20px;
  margin-bottom: 80px;
}
</style>
