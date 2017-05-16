import Vue from 'vue'
import Layout from './component/layout.vue'
import VueRouter from "vue-router";
import IndexPage from "./pages/index.vue";

Vue.use(VueRouter);

// const First = { template: '<div><h2>我是第 1 个子页面</h2></div>' };
// import secondcomponent from './component/secondcomponent.vue';

// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
  	{
  		path:'/',
  		component:IndexPage
  	}
  ]
})

const app = new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: {Layout}
})