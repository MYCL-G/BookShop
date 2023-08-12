<template>
  <div class="home">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item, index) in swiperSlides" :key="index">
        <img :src="item.img_url" height="100%" />
      </mt-swipe-item>
    </mt-swipe>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="(item,index) in gridData" :key="index">
        <router-link :to="item.url">
          <div class="item" :class="item.color">
            <span class="mui-icon" :class="item.icon"></span>
          </div>
          <div class="mui-media-body">{{item.title}}</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperSlides: [
        {
          id: 1,
          img_url: require("@/imgs/sliders/1.jpg")
        },
        {
          id: 2,
          img_url: require("@/imgs/sliders/2.png")
        },
        {
          id: 3,
          img_url: require("@/imgs/sliders/3.jpg")
        }
      ],
      gridData: [
        {
          color: "yellow",
          title: "全部分类",
          icon: "iconfont icon-fenlei",
          url: "/allkind"
        },
        {
          color: "red",
          title: "各种书籍",
          icon: "iconfont icon-shuji",
          url: "/variou"
        },
        {
          color: "lightgreen",
          title: "拼团抢购",
          icon: "iconfont icon-tubiao-",
          url: "#"
        },
        {
          color: "green",
          title: "领券中心",
          icon: "iconfont icon-youhuiquan",
          url: "#"
        },
        {
          color: "purple",
          title: "我的足迹",
          icon: "iconfont icon-zuji",
          url: "#"
        },
        {
          color: "blue",
          title: "留言反馈",
          icon: "iconfont icon-fankui",
          url: "#"
        },
        {
          color: "orange",
          title: "联系我们",
          icon: "iconfont icon-lianxiwomen",
          url: "#"
        }
      ]
    };
  }
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
}
.mint-swipe {
  height: 220px;
}
.mint-swipe-item {
  text-align: center;
  background-color: white;
}
::v-deep .mint-swipe-indicator.is-active {
  background-color: #1091f4;
  opacity: 1;
}
::v-deep .mint-swipe-indicators {
  opacity: 0.5;
  background: wheat;
}

.mui-grid-9 {
  background-color: #fff;
  border: none;
}
.mui-media-body {
  font-size: 13px;
}
.mui-table-view-cell {
  border: 0;
}
.item {
  border-radius: 50%;
  display: table;
  width: 3.2em;
  height: 3.2em;
  line-height: 3.2em;
  margin: 0 auto;
}
.mui-icon {
  font-size: 2em;
  color: white;
  vertical-align: middle;
  display: table-cell;
}





.yellow {
  background-color: #f5de42;
}

.red {
  background-color: #e87071;
}

.green {
  background-color: #c5cc71;
}

.purple {
  background-color: #6f8fe4;
}

.blue {
  background-color: #64b7fb;
}

.orange {
  background-color: #fec752;
}

.lightgreen {
  background-color: #bada4b;
}
</style>
