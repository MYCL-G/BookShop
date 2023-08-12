<template>
  <div class="mui-numbox" data-numbox-min="1" style="height:25px;">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input
      id="test"
      class="mui-input-numbox"
      type="number"
      :value="value"
      @change="countChange"
      ref="numbox"
      readonly
    />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
import mui from "@/libs/mui/dist/js/mui.min.js";

export default {
  props: ["value", "id"],
  methods: {
    countChange() {
      this.$store.commit("UpdateItem", {
        id: this.id,
        count: parseInt(this.$refs.numbox.value)
      });
    }
  },
  mounted() {
    mui(".mui-numbox").numbox();
  }
};
</script>

<style scoped>
</style>