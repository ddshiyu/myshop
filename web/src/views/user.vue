<template>
  <div class="bg-white" style='height:100vh;'>
    <div class="d-flex py-3 px-2 border-b">
      <div @click='$router.back(-1)'>&lt;</div>
      <div class="flex-1 t-center">个人资料</div>
    </div>
    <div class="d-flex py-2 px-2 border-b">
      <div class="flex-1">昵称</div>
      <div>{{username}}</div>
    </div>
    <div class="p-2 t-right text-primary border-b" @click="clear">
      <p>退出当前账户 &gt;</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    username(){
      return localStorage.username
    }
  },
  methods: {
    clear(){    
      this.$confirm('是否退出登录').then(() => {
        localStorage.clear()
        this.$router.push('/login')
      })
      
    }
  }
}
</script>

<style>

</style>