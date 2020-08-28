<template>
  <div class="home">
    <Header />
    <Slider />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { Header, Slider, Footer } from "../components/layout/index.js";

export default {
  name: "Home",
  components: {
    Header,
    Slider,
    Footer,
  },
};
</script>

<style lang="less" scoped>
// .home{
//   background-color: #f8f2f2;
// }
</style>

