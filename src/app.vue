<template>
	<div id="va">
		<div class="valida clearfix" v-for="list in data">
			<label for="">{{list.name}}</label>
			<input type="text" v-model="list.value" :id="list.id" v-validataion="{val:list.value,reg:list.reg,toptips:list.toptips}">
		</div>

		<div class="valida clearfix">
			<label for="">电话</label>
			<input type="text" v-model="abc" id="fwr" v-validataion="{val:abc,reg:'^1\\d{10}$',toptips:'必须为1开头且为数字的11位数'}">
		</div>

		<div class="valida clearfix">
			<label for="">描述</label>
			<input type="text" v-model="hhh" id="tyse" v-validataion="{val:hhh,reg:'.+',toptips:'不能为空'}">
		</div>

		<div class="valida clearfix">
			<label for="">非必须可为空</label>
			<input type="text" v-model="ggg" id="lkjh" v-validataion="{val:ggg}">
		</div>
	</div>
</template>

<script>

export default{
	name: 'validation',
	data(){
		return{
			data :[
				{
					id:0,
					name: "用户名",
					reg:"^[A-Za-z]{6}$",
					value: "",
					toptips: "只能为六个字母（部分大小写）"
				},{
					id:1,
					name: "密码",
					reg:"^[A-Za-z]+(\\w)+(_|_[0-9]{2,}|[0-9]{2,}_|[0-9]{2,})$",
					value: "",
					toptips: "以字母开头2个数字以上或下划线结尾"
				},{
					id:2,
					name: "邮箱",
					reg:"^([-_A-Za-z0-9\.]+)@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$",
					value: "",
					toptips: "请输入合法的电子邮件地址"
				}
			],
			abc: null,
			hhh: null,
			ggg: null
		}
	}
	
}
</script>

<style src="./css/main.scss" lang="scss"></style>

<style>
#va{
	width: 100%;
	max-width: 600px;
	margin-left: auto;
	margin-right: auto;
}
</style>