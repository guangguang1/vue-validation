<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style src="../css/main.scss" lang="scss"></style>
<!-- Add "scoped" attribute to limit CSS to this component only 只作用此组件-->
<!-- <style lang="scss">
*{
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 14px;
}
ul,ol,li{
  list-style: none;
}
a{
  text-decoration: none;
}
html,body{
  /*width: 100%;*/
  /*height: 100%;*/
  background: #fafafa;
  position: relative;
}
[cloak]{
  display: none;
}
.clearfix:after{
  content: ".";
  height: 0;
  display: block;
  overflow: hidden;
  clear:both;
}

$ddd:#ddd;
footer{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: box;
  display: -webkit-box;
  padding: 3px 0;
  a{
    box-flex:25%;
    box-orient:horizontal;
    color: $ddd;
  }
}
.valida{
  width: 100%;
  padding: 10px 5px;
  margin-bottom: 15px;
  label{
    display: block;
    float: left;
    width: 15%;
    text-align: right;
    padding-right: 15px;
    line-height: 27px;
  }
  input{
    width: 85%;
    float: left;
    display: block;
    height: 27px;
    padding: 3px 5px;
    border:1px solid $ddd;
    &:focus{
      border:1px solid #31a9e2;
      box-shadow: none;
      outline: 0;
    }
  }
}

</style> -->
