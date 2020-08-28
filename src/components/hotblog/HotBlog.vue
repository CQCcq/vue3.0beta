<template>
  <div class="hot">
    <h3>{{ content.title }}</h3>
    <div>{{ content.content }}</div>
    <div class="user">
      <div>{{ content.user.name }}</div>
      <div>{{ content.user.pubTime }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HotBlog",
  props: {
    content: Object,
  },
};
</script>

<style lang="less" scoped>
.hot {
  padding: 10px 20px;
  border: 1px solid #efefef;
  box-shadow: 0 1px 3px #eeeeee;
  border-radius: 12px;
  background-color: #ffffff;
  .user {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
