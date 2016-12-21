import Vue from 'vue' //全局引入vue

import MyValidation from './directive/validation'  //引入插件
Vue.use(MyValidation);  //使用插件

import app from './app'


const vm = new Vue({
	el: '#app',
	components: { app }
})