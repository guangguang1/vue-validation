// var abc = require('./css/main.scss');
// import './assets/css/main.scss'

import Vue from 'vue' //全局引入vue



import MyValidation from './directive/validation'  //引入插件
Vue.use(MyValidation);  //使用插件

import app from './app'


/* eslint-disable no-new */

const vm = new Vue({
	el: '#app',
	// template: '<App/>',
	components: { app }
})
// new Vue({
// 	el: '#app',
// 	data:{
// 		data :[
// 			{
// 				id:0,
// 				name: "用户名",
// 				reg:"^[A-Za-z]{6}$",
// 				value: "",
// 				toptips: "只能为六个字母（部分大小写）"
// 			},{
// 				id:1,
// 				name: "密码",
// 				reg:"^[A-Za-z]+(\\w)+(_|_[0-9]{2,}|[0-9]{2,}_|[0-9]{2,})$",
// 				value: "",
// 				toptips: "以字母开头2个数字以上或下划线结尾"
// 			},{
// 				id:2,
// 				name: "邮箱",
// 				reg:"^([-_A-Za-z0-9\.]+)@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$",
// 				value: "",
// 				toptips: "请输入合法的电子邮件地址"
// 			}
// 		],
// 		abc: null,
// 		hhh: null,
// 		ggg: null
// 	},
// 	component:{
// 		hello
// 	},
// 	methods:{

// 	}
// })