<template>
  <div>
    <div class="moveTitle">
      <a
        v-for="item in variou"
        :key="item.id"
        class="moveItem"
        :class="isActive==item.id?'isActive':''"
        @click="getPhotosById(item.id)"
      >{{item.name}}</a>
    </div>

    <ul class="photos">
      <router-link v-for="item in photos" :key="item.id" :to="'/book-detail/'+item.id" tag="li">
        <img v-lazy="item.url" />
        <div class="msg">
          <h4 class="msg-title">{{item.title}}</h4>
          <div class="msg-body">{{item.msg}}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: 3,
      variou: [],
      photos: []
    };
  },
  methods: {
    getVariou: function() {
      this.$axios.get("@/book/getVariou").then(res => {
        if (res.data.code == "200") this.variou = res.data.data;
      });
    },
    getPhotosById: function(id) {
      this.isActive = id;
      this.$axios.get("@/book/getPhotosById/" + id).then(res => {
        if (res.data.code == "200") this.photos = res.data.data;
      });
    }
  },
  created() {
    this.getVariou();
    this.getPhotosById(this.isActive);
  }
};
</script>

<style scoped>
.moveTitle {
  overflow-y: hidden;
  overflow-x: auto;
  height: 40px;
  display: flex;
  flex-wrap: nowrap;
}
.moveItem {
  display: flex;
  height: 40px;
  width: 70px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  color: black;
}
.moveItem.isActive {
  color: #007aff;
  border-bottom: 1px solid #007aff;
}

.photos {
  list-style: none;
  margin: 0;
  padding-bottom: 0;
  padding: 10px 10px 0px 10px;
}
li {
  background-color: #ccc;
  text-align: center;
  margin-bottom: 10px;
  box-shadow: 0 0 9px #eee;
  position: relative;
}
img {
  width: 100%;
  vertical-align: middle;
}
img[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
}
.msg {
  color: white;
  text-align: left;
  position: relative;
  bottom: 0;
  background-color: rgba(141, 133, 133, 0.4);
  max-height: 88px;
}
.msg-title {
  font-size: 14px;
}
.msg-body {
  font-size: 13px;
  padding: 0px 8px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  line-height: 20px;
  margin-bottom: 5px;
}
.msg {
  color: white;
  text-align: left;
  position: absolute;
  bottom: 0;
  background-color: rgba(141, 133, 133, 0.4);
  max-height: 88px;
}
.msg.msg-title {
  font-size: 14px;
}
.msg.msg-body {
  font-size: 13px;
  padding: 0px 8px;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;

  line-height: 20px;
  margin-bottom: 5px;
}
/* 这个样式会使pc端无法滑动，但移动端可以正常滑动 */
::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
}
</style>