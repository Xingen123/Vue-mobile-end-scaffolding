<template>
  <div class="hello">
     移动端
     <coast></coast>
  </div>
</template>

<script>
import coast from '@/components/coast'

export default {
  components:{
    coast
  },
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
      fun(){
       this.$ajax.login().then(res=> {
          console.log(res,1)
        })
        this.$ajax.detail().then(res=> {
          console.log(res,1)
        })
      }    
  },
  mounted(){
    this.fun() 
  }  
}
</script>
<!--安装px2rem后，再使用px上有些不同，大家可以参考px2rem官方介绍，下面简单介绍一下。

直接写px，编译后会直接转化成rem —- 除开下面两种情况，其他长度用这个
在px后面添加/no/，不会转化px，会原样输出。 — 一般border需用这个
在px后面添加/px/,会根据dpr的不同，生成三套代码。—- 一般字体需用这个-->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  font-size: 50px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
