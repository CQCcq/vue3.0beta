<template>
  <div>
    <div class="header">
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              style="width:100%;height:100%"
              src="https://static.runoob.com/images/mix/img_fjords_wide.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              style="width:100%;height:100%"
              src="https://static.runoob.com/images/mix/img_mountains_wide.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              style="width:100%;height:100%"
              src="https://static.runoob.com/images/mix/img_nature_wide.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
    <div class="content">
      <div class="c_left">
        <div v-for="(item, index) in Blog" :key="index">
          <HotBlog :content="item" class="mg_bot" />
        </div>
      </div>
      <div class="c_right">
        <RankBlog />
      </div>
    </div>
  </div>
</template>

<script>
import { HotBlog, RankBlog } from "@/components/index";
export default {
  name: "Index",
  components: {
    HotBlog,
    RankBlog,
  },
  data() {
    return {
      data_content:
        "测试阿斯顿发顺丰啊手动阀手动阀啊手动阀手动阀撒旦飞洒大阿斯顿发射点在平时的运维工作中，会经常遇到 linux 重定向操作和管道符。linux 重定向分为输入重定向和输出重定向。简言之，输入重定向就是将文件内容导入到命令中，而输出重定向则是将原本要输出到屏幕上的信息写入到指定的文件中...",
      Blog: [
        {
          num: 0,
          title: "标题1",
          content: "内容",
          user: {
            name: "用户姓名",
            pubTime: "2020/8/26",
          },
        },
        {
          num: 0,
          title: "标题1",
          content: "内容",
          user: {
            name: "用户姓名",
            pubTime: "2020/8/26",
          },
        },
        {
          num: 0,
          title: "标题1",
          content: "内容",
          user: {
            name: "用户姓名",
            pubTime: "2020/8/26",
          },
        },
        {
          num: 0,
          title: "标题1",
          content: "内容",
          user: {
            name: "用户姓名",
            pubTime: "2020/8/26",
          },
        },
        {
          num: 0,
          title: "标题1",
          content: "内容",
          user: {
            name: "用户姓名",
            pubTime: "2020/8/26",
          },
        },
        {
          num: 0,
          title: "标题1",
          content: "内容",
          user: {
            name: "用户姓名",
            pubTime: "2020/8/26",
          },
        },
        {
          num: 0,
          title: "标题1",
          content: "内容",
          user: {
            name: "用户姓名",
            pubTime: "2020/8/26",
          },
        },
        {
          num: 0,
          title: "标题1",
          content: "内容",
          user: {
            name: "用户姓名",
            pubTime: "2020/8/26",
          },
        },
        {
          num: 0,
          title: "标题1",
          content: "内容",
          user: {
            name: "用户姓名",
            pubTime: "2020/8/26",
          },
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.mg_bot {
  margin-bottom: 20px;
}
.header {
  width: 1200px;
  margin: 0px auto;
  border-radius: 10px;
  box-shadow: 0 1px 3px #dededede;
  overflow: hidden;
  .swip_height {
    height: 260px;
  }
}
.content {
  width: 1200px;
  margin: 0px auto;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  .c_left {
    width: calc(60% - 5px);
  }
  .c_right {
    width: calc(40% - 5px);
  }
}
</style>
