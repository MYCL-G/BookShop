<template>
  <div class="swiper">
    <mt-swipe :auto="4000" :style="{'height':height}">
      <mt-swipe-item v-for="item in dataItem" :key="item.img_url" style="text-align: center;">
        <img :src="item.img_url" :class="{'full':isfull}" />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  props: {
    dataItem: {
      type: Array,
      default: () => []
    },
    isfull: {
      type: Boolean,
      default: true
    },
    height: {
      type: String,
      default: "200px"
    }
  }
};
</script>

<style scoped>
img {
  height: 100%;
}
.full {
  width: 100%;
}
</style>