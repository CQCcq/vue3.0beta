<template>
  <div class="head" id="head">
    <div class="h_left">
      <div class="portrait"></div>
    </div>
    <div class="h_content">
      <div class="hc_left">
        <div class="wd_sty" :class="wdSty(0)" @click="cliChange(0)">
          Home
        </div>
        <div class="wd_sty" :class="wdSty(1)" @click="cliChange(1)">
          blog
        </div>
        <div class="wd_sty" :class="wdSty(2)" @click="cliChange(2)">
          asked
        </div>
        <div class="wd_sty" :class="wdSty(3)" @click="cliChange(3)">
          remarks
        </div>
        <div class="wd_sty" :class="wdSty(4)" @click="cliChange(4)">
          Dance the ink
        </div>
      </div>
      <div class="input-group input_width">
        <input type="text" class="form-control" placeholder="Search for..." />
        <span class="input-group-btn">
          <button class="btn btn-default" type="button">Go!</button>
        </span>
      </div>
      <!-- /input-group -->
    </div>
    <div class="h_right">
      <button type="button" class="btn btn-default" aria-label="Left Align">
        <span class="glyphicon glyphicon-align-left" aria-hidden="true"></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isActive: true,
    };
  },
  methods: {
    cliChange(change) {
      this.$store.commit("inCli", change);
    },
    wdSty(arg) {
      if (arg === this.$store.state.cliStatus) {
        return "select_pg";
      }
    },
  },
};
</script>

<style lang="less" scoped>
.head {
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 666;
  width: 100%;
  height: 80px;
  background-color: white;
  box-shadow: 0 1px 3px #d3d3d3d3;
  display: flex;
  flex-direction: row;
  .h_left {
    width: 120px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    .portrait {
      width: 60px;
      height: 60px;
      background-color: aqua;
      border-radius: 50%;
    }
  }
  .h_content {
    display: flex;
    flex: 1;
    height: 80px;
    align-items: center;
    justify-content: space-between;
    .hc_left {
      display: flex;
      align-items: center;
      float: left;
      .wd_sty {
        padding: 2px 10px;
        position: relative;
        font-size: 20px;
        color: #999999;
        cursor: pointer;
      }
      .wd_sty:hover {
        color: #43de0f;
      }
      .select_pg {
        color: #43de0f;
      }
      .select_pg::after {
        position: absolute;
        left: 35%;
        bottom: -10px;
        content: " ";
        width: 30%;
        height: 3px;
        border-radius: 10px;
        background-color: #43de0f;
      }
    }
    .input_width{
      width: auto;
    }
    // line-height: 80px;
    // text-align: center;
  }
  .h_right {
    width: 120px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
