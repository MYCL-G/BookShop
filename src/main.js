import Vue from 'vue'
import App from './App.vue'
import router from './router'

import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

import 'mint-ui/lib/style.css'
import MintUI from 'mint-ui'
Vue.use(MintUI)

import './libs/mui/dist/css/mui.min.css'

import axios from 'axios'
Vue.prototype.$axios = axios;

require('./mock.js')

Vue.config.productionTip = false


new Vue({
	el: "#app",
	router,
	store,
	render: h => h(App)
})
