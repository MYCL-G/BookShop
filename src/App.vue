<template>
  <div id="app">
    <mt-header fixed title="图书商城">
      <slot slot="left" v-if="flag">
        <span @click="goback" class="iconfont icon-fanhui"></span>
      </slot>
    </mt-header>

    <transition name="fade">
      <div class="mui-content">
        <router-view></router-view>
      </div>
    </transition>

    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-newitem" to="/home">
        <span class="mui-icon iconfont icon-shouye"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>

      <router-link class="mui-tab-newitem" to="/order">
        <span class="mui-icon iconfont icon-dingdan"></span>
        <span class="mui-tab-label">订单</span>
      </router-link>

      <router-link class="mui-tab-newitem" to="/shopcar">
        <span class="mui-icon iconfont icon-gouwuchekong" id="shopCar">
          <span class="mui-badge">{{allCount}}</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>

      <router-link class="mui-tab-newitem" to="/my">
        <span class="mui-icon iconfont icon-wode"></span>
        <span class="mui-tab-label">我的</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false
    };
  },
  methods: {
    goback: function() {
      this.$router.go(-1);
    }
  },
  computed:{
    allCount:function(){
      return this.$store.getters.getItemsSum;
    },
  },
  created() {
    this.flag = this.$route.path === "/home" ? false : true;
  },
  watch: {
    "$route.path": function(val) {
      this.flag = val === "/home" ? false : true;
    }
  }
};
</script>

<style>
@import url("//at.alicdn.com/t/c/font_3711976_9cwq8af18i4.css");

.router-link-active {
  color: lightblue !important;
}

.mui-content {
  position: absolute;
  left: 0;
  right: 0;
  top: 40px;
  bottom: 50px;
  overflow-y: auto;
  overflow-x: hidden;
}

.fade-enter {
  opacity: 0;
  transform: translateX(100%);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.mui-bar-tab .mui-tab-newitem.mui-active {
  color: #007aff;
}

.mui-bar-tab .mui-tab-newitem {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}

.mui-bar-tab .mui-tab-newitem .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}

.mui-bar-tab .mui-tab-newitem .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

