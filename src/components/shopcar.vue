<template>
  <div class="shopcar">
    <div class="shopcar-container">
      <div class="goods-list">
        <!-- 商品列表项区域 -->
        <div class="mui-card" v-for="(item,index) in bookList" :key="item.id">
          <div class="mui-card-content">
            <div class="mui-card-content-inner">
              <img :src="item.thumbnail" style="display: inline-block"/>
              <mt-switch
                v-model="$store.getters.getItemsSelected[item.id]"
                @change="selectedChange(item.id, $store.getters.getItemsSelected[item.id])"
              ></mt-switch>
              <div class="info">
                <h3>{{ item.title }}</h3>
                <p>
                  <span class="price">￥{{ item.sellPrice }}</span>&nbsp;
                  <inBox :value="$store.getters.getItemsCount[item.id]" :id="item.id"></inBox>&nbsp;
                  <a href="#" @click.prevent="remove(item.id, index)">删除</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner jiesuan">
            <div class="left">
              <p>总计（不含运费）</p>
              <p>
                已勾选商品
                <span class="red">{{ $store.getters.getItemCountAndAmount.count }}</span> 件， 总价
                <span class="red">￥{{ $store.getters.getItemCountAndAmount.amount }}</span>
              </p>
            </div>
            <mt-button type="danger">去结算</mt-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import inBox from "@/components/itemNumberBox.vue";
export default {
  components: {
    inBox
  },
  data() {
    return {
      selectedCount: "",
      bookList: []
    };
  },
  methods: {
    getBookList: function() {
      var idArr = [];
      this.$store.state.items.forEach(item => idArr.push(item.id));
      if (idArr.length <= 0) return;
      this.$axios
        .post("/book/getshopcartlist", { ids: idArr.join(",") })
        .then(result => {
          if (result.data.code == "200") {
            this.bookList = result.data.data;
          }
        });
    },
    remove: function(id, index) {
      this.bookList.splice(index, 1);
      this.$store.commit("removeItemById", id);
    },
    selectedChange: function(id, val) {
      console.log(this.bookList)
      this.$store.commit("UpdateItemSelected", {
        id,
        selected: val
      });
    },
    payForIt(){
      if($store.getters.getItemCountAndAmount.amount!=0){
        
      }
    }
  },
  created() {
    this.getBookList();
  }
};
</script>

<style>
</style>