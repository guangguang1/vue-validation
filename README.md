# v-validation
基于vue.js2.0+正则表达式的一个表单验证
#### **基于vue2.0+正则表达式编写的插件**

```
对于编写这一个插件，是因为最近一个项目的一个需求，根据用户自定义的规则去验证输入的信息是否符合规则，正则表达式均从后台获取，虽然githup上也有不少这样的插件，但还是诞生了一个自己编写一个的想法！
```

对于vue.js的插件编写方法，在这里就不多阐述，需要详细了解的可以点击 [这里](https://vuefe.cn/v2/guide/plugins.html) 查看，官方的介绍，我是通过全局资源自定义指令的方式编写的代码

```
<!-- 实例代码 -->
<div class="valida clearfix">
	<label for="">电话</label>
	<input type="text" v-model="abc" id="fwr" 
		v-validataion="{
			val:abc,     
			reg:'^1\\d{10}$',
			toptips:'必须为1开头且为数字的11位数'
		}">
</div>
<!--
	参数说明:
	v-validataion="{     // v-validation 是指令的调用方式传，等号后面的对象，是传递给指令的数据
		val:abc,         // input的值，与v-model绑定的值一致
 		reg:'^1\\d{10}$',   // 正则表达式，通过new RegExp()的方式创建匹配规则
		toptips:'必须为1开头且为数字的11位数'  //匹配错误时的提示信息
	}"
	
-->
```
##### 使用方法：
**1、**指令绑定一个对象，对象中包括表单的值，正则表达式，提示信息，字段如下：


```
v-validataion="{
val:abc,								//  值，与v-model的值一致
reg:'^1\\d{10}$',						//  正则表达式
toptips:'必须为1开头且为数字的11位数'		//  提示信息
}"
```
**2、** v-model 绑定的值必须与v-validataion中的val字段的值一致

**3、** input表单必须拥有id，提示信息生成的html拥有对应的唯一标识
