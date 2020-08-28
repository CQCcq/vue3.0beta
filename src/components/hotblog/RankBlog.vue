<template>
  <div class="rank">
    <h3>排行榜</h3>
    <div class="r_personal">
      <div>贴名</div>
      <div>点赞(<span>120</span>)</div>
    </div>
    <div class="r_personal">
      <div>贴名</div>
      <div>点赞(<span>120</span>)</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.rank {
  padding: 10px 20px;
  border: 1px solid #dedede;
  background-color: #fff;
  box-shadow: #eeeeee;
  border-radius: 12px;
  .r_personal {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 0px;
    border-bottom: 1px solid #555555;
  }
}
</style>
