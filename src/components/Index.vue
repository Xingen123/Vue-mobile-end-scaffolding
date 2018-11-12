<template>
  <div class="hello">
     <img src="../../static/img/logo.png">
     <div>{{msg}}</div>
     <button  @click="fun">点我进行模拟数据</button>
  </div>
</template>

<script>

export default {
  components:{
    //组件
  },
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
      fun(){
       // 调用api 实列 
       this.$ajax.login().then(res=> {
          console.log(res)
        })
      }    
  },
  mounted(){
    
  }  
}
</script>

<style scoped>
.hello{
  font-size: 35px;
  text-align: center;
}
img{
  width: 50%;
}
</style>
