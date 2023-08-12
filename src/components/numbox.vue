<template>
  <div class="mui-numbox" data-numbox-min="1">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input
      class="mui-input-numbox"
      type="number"
      :value="value"
      @change="countChanged"
      ref="numbox"
    />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
import mui from "@/libs/mui/dist/js/mui.min.js";
export default {
  props: ["value","max"],
  mounted() {
    mui(".mui-numbox").numbox();
  },
  methods: {
    countChanged() {
      this.$emit("input", parseInt(this.$refs.numbox.value));
    }
  },
  watch: {
    max: function(newVal,oldVal) {
      mui(".mui-numbox")
        .numbox()
        .setOption("max", newVal);
    }
  }
};
</script>

<style scoped>
</style>
