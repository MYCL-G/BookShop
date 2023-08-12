import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const itemsKey = "$items";
export default new Vuex.Store({
  state(){
    return{
      items:JSON.parse(localStorage.getItem(itemsKey) || "[]")
      //{ id:商品的id, count: 购买数量, price: 商品的单价，selected: 是否选中  }
    }
  },
  
  mutations: {
    AddItem(state,newItem) {
      let exist = false;
      state.items.some(item => {
        if (item.id == newItem.id) {
          item.count += parseInt(newItem.count);
          exist = true;
          return true;
        }
      });
      if (!exist) state.items.push(newItem);
      localStorage.setItem(itemsKey, JSON.stringify(state.items));
    },

    UpdateItem(state,newItem) {
      let items = state.items;
      let index = state.items.findIndex(item => {
        return item.id == newItem.id;
      });
      items[index].count = newItem.count;
      localStorage.setItem(itemsKey, JSON.stringify(items));
    },

    removeItemById(state,id) {
      state.items.some((item, index) => {
        if (item.id == id) {
          state.items.splice(index, 1);
          return true;
        }
      });
      localStorage.setItem(itemsKey, JSON.stringify(state.items));
    },

    UpdateItemSelected(state,newItem) {
      state.items.some(item => {
        if (item.id == newItem.id) {
          item.selected = newItem.selected;
          return true;
        }
      });
      localStorage.setItem(itemsKey, JSON.stringify(state.item));
    }
  },
  getters: {
    //物品总数(数字)
    getItemsSum(state) {
      let count = 0;
      state.items.forEach(item => {
        count += item.count;
      });
      return count;
    },
    //物品总数(对象)
    getItemsCount(state) {
      var obj = {};
      state.items.forEach(item => {
        obj[item.id] = item.count;
      });
      return obj;
    },
    //获取购物车中所有商品的选中状态(对象)
    getItemsSelected(state) {
      var obj = {};
      state.items.forEach(item => {
        obj[item.id] = item.selected;
      });
      return obj;
    },
    //获取所有选中商品的数量和金额
    getItemCountAndAmount(state) {
      let obj = {
        count: 0, // 勾选的数量
        amount: 0 // 勾选的总价
      };
      state.items.forEach(item => {
        if (item.selected) {
          obj.count += item.count;
          obj.amount += item.price * item.count;
        }
      });
      return obj;
    }
  },
  
});
