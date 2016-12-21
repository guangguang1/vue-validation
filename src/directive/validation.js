/*
	作者：Ponicy
	时间：2016.12.14
	version: 1.0.0
 */ 
;(function(){

	var MyValidation = {};  //先定义插件名

	MyValidation.install = function(Vue, options){

		Vue.directive('validataion', {
			twoWay: true,
			deep: true,
			bind(el,binding,vnode){
				var input = el;
				input.onfocus = function(){
					// console.log(el);
				};
				input.onblur = function(){
					let vals = val(el);
					onfocusTips(el,binding,vnode,vals);
				};
				//获取input的值
				function val(obj){  
					let a = obj.value;
					return a;
				};
				// 提示，且聚焦
				function onfocusTips(obj,binding,vnode,val){
					let w = vnode.elm.offsetLeft;  			//元素位置的横坐标
					let h = vnode.elm.offsetTop; 			//元素位置的纵向坐标
					let domH = vnode.elm.offsetHeight;  	//元素的高度
					let reg = new RegExp(binding.value.reg);
					if(!reg.test(val)){
						if(!val && !document.getElementById('toptips' + vnode.elm.id)){
							let str;
							str = document.createElement('div');
							str.style.position = "absolute";
							str.style.left = w + 'px';
							str.style.top = h + domH + 5 + 'px';
							str.style.backGround = "0px 0px 10px -4px #ef0909;";
							str.id = "toptips" + vnode.elm.id;
							str.innerHTML = '<i style="display: block;width: 7px;height: 7px;border: 1px solid #ef0909;color:#ef0909; position: absolute;left: 18px;top: -3px;transform: rotate(45deg);-webkkit-transform: rotate(45deg);background: #fff;border-right: 0;border-bottom: 0;"></i>' + '<span style="display:inline-block;background:#fff; padding: 3px 10px;border: 1px solid #ef0909;color:#ef0909; border-radius: 4px;">' + binding.value.toptips + "</span>";
							document.body.appendChild(str);
						}
						obj.focus();
					}
				}
			},
			update(el,binding,vnode){   //  el:dom元素 binding:绑定的值 vnode:dom节点相关的数据
				// console.log(vnode);
				// console.log(el);
				// console.log(binding);
				
				let w = vnode.elm.offsetLeft;  		//元素位置的横坐标
				let h = vnode.elm.offsetTop; 			//元素位置的纵向坐标
				let domH = vnode.elm.offsetHeight;  	//元素的高度
				if(binding.value.val != binding.oldValue.val){
					let reg = new RegExp(binding.value.reg);
					if(!reg.test(binding.value.val)){
						if(!document.getElementById('toptips' + vnode.elm.id)){
							let str;
							str = document.createElement('div');
							str.style.position = "absolute";
							str.style.left = w + 'px';
							str.style.top = h + domH + 5 + 'px';
							str.style.backGround = "0px 0px 10px -4px #ef0909;";
							str.id = "toptips" + vnode.elm.id;
							str.innerHTML = '<i style="display: block;width: 7px;height: 7px;border: 1px solid #ef0909;color:#ef0909; position: absolute;left: 18px;top: -3px;transform: rotate(45deg);-webkkit-transform: rotate(45deg);background: #fff;border-right: 0;border-bottom: 0;"></i>' + '<span style="display:inline-block;background:#fff; padding: 3px 10px;border: 1px solid #ef0909;color:#ef0909; border-radius: 4px;">' + binding.value.toptips + "</span>";
							document.body.appendChild(str);
						}
					}else{
						if(document.getElementById('toptips' + vnode.elm.id)){
							document.body.removeChild(document.getElementById('toptips' + vnode.elm.id))
						}
					}
				};
			}
		})

	}

	if(typeof exports == "object"){
		module.exports = MyValidation
	}else if (typeof define == "function" && define.amd) {
	    define([], function(){ return MyValidation })
	}else if (window.Vue) {
		window.MyValidation = MyValidation
	    Vue.use(MyValidation)
	}

})()