<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in allKindList" :key="item.id">
        <router-link :to="'/home/book-detail/' + item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url" />
          <div class="mui-media-body">
            <h1>{{ item.title }}</h1>
            <p class="mui-ellipsis">
              <span>{{item.msg}}</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allKindList: []
    };
  },
  methods: {
    initDtat: function() {
      this.$axios.get("@/book/getAllKind").then(res => {
        if (res.data.code == "200") this.allKindList = res.data.data;
      });
    }
  },
  created() {
    this.initDtat();
  }
};
</script>

<style lang="scss" scoped>
</style>