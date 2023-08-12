import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
	path: "/",
	redirect: "/home"
},
{
	path: '/home',
	meta: {
		title: "首页"
	},
	component: () => import('./components/home.vue')
},
{
	path: '/my',
	meta: {
		title: "我的"
	},
	component: () => import('./components/my.vue')
},
{
	path: '/order',
	meta: {
		title: "订单"
	},
	component: () => import('./components/order.vue')
},
{
	path: '/shopcar',
	meta: {
		title: "购物车"
	},
	component: () => import('./components/shopcar.vue')
},
{
	path: '/allkind',
	meta: {
		title: "全部分类"
	},
	component: () => import('./views/allkind.vue')
},
{
	path: '/variou',
	meta: {
		title: "各种书籍"
	},
	component: () => import('./views/variou.vue')
},
{
	path: "/book-detail/:id",
	component: () => import("@/views/bookDetail.vue"),
	meta: { title: "图书明细" }
},

]

const router = new VueRouter({
	routes,
	linkActiveClass: "mui-active"
})

export default router
