<template>
  <div>
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="showBall" ref="ball"></div>
    </transition>

    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :dataItem="bookDetalData.swiperData" :isfull="false"></swiper>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-header">{{ bookDetalData.title }}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            定价：
            <del>￥{{ bookDetalData.price }}</del>&nbsp;销售价：
            <span class="now_price">￥{{ bookDetalData.sellPrice }}</span>
          </p>
          <p>
            购买数量：
            <numbox v-model="selectedCount" :max="bookDetalData.stockQuantity"></numbox>
          </p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>&nbsp;
            <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品编号：{{ bookDetalData.goodsNo }}</p>
          <p>库存数量：{{ bookDetalData.stockQuantity }}件</p>
          <p>出版时间：{{ bookDetalData.publishTime}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swiper from "@/components/swiper.vue";
import numbox from "@/components/numbox.vue";

export default {
  components: {
    swiper,
    numbox
  },
  data() {
    return {
      id: this.$route.params.id,
      selectedCount: 1,
      bookDetalData: {
        swiperData: []
      },
      showBall: false
    };
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      this.$axios.get("@/book/getDetail/" + this.id).then(res => {
        if (res.data.code == "200") {
          this.bookDetalData = res.data.data;
        }
      });
    },
    addToShopCar() {
      this.showBall = !this.showBall;
      var goodsinfo = {
        id: parseInt(this.id),
        count: this.selectedCount,
        price: this.bookDetalData.sellPrice,
        selected: true,
        amount: this.selectedCount * this.bookDetalData.sellPrice
      };
      this.$store.commit("AddItem", goodsinfo);
    },
    beforeEnter(el) {
      el.style.transform = "translate(0, 0)";
    },
    enter(el, done) {
      el.offsetWidth;
      const ballPos = this.$refs.ball.getBoundingClientRect();
      const bagPos = document.getElementById("shopCar").getBoundingClientRect();
      const xDist = bagPos.left - ballPos.left;
      const yDist = bagPos.top - ballPos.top;

      el.style.transform = `translate(${xDist}px, ${yDist}px)`;
      el.style.transition = "0.5s all cubic-bezier(.4,-0.3,1,.68)";
      done();
    },
    afterEnter(el) {
      this.showBall = !this.showBall;
    }
  }
};
</script>

<style scoped>
.ball {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  z-index: 99;
  top: 390px;
  left: 146px;
}
</style>