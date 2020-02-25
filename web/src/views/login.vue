<template>
  <div>
    <div class="loginWrapper">
      <transition name='fade'>
        <div class='text-primary fs-md my-3'>请先登录</div>
      </transition>
      <div class="logo"></div>
      <p><input type="text" v-model='form.username'></p> 
      <p><input type="text" v-model='form.password'></p>
      <p><button @click="loginAccount">登陆</button></p>
      <p><button>一键登陆</button></p>
      <div class='text-primary fs-md my-3' v-if='info.msg === 1'>账号或密码错误</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      form: {},
      info: ''
    }
  },
  computed: {
  },
  created () {
  },
  mounted() {
    
  },
  methods: {
    async loginAccount () {
      const res = await this.$http.post('account', this.form)
      this.info = res.data;
      if(res.data.msg === 0){
        this.$router.push('/')
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('username', res.data.username)
        this.addUsername(res.data.username)
      }
    },
    ...mapActions(['addUsername'])
  }
}
</script>

<style lang='scss'>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
.loginWrapper{
  margin: 2.2rem auto;
  text-align: center;
  .logo{
    background: url('../assets/images/spr-mall_20171218.png') no-repeat 40.181% 0.312%;
    background-size: 221px 216px;
    width: 55px;
    height: 55px;
    margin: .1rem auto;
  }
  input{
    width:4.5rem;
    height:.7rem;
    margin-top:.2rem;
    border: 1px solid #eee;
    border-radius: 0.0909rem;
    padding:0 .2rem;
  }
  button{
    margin-top:.2rem;
    width:4.5rem;
    height:.7rem;
    border: 1px solid #eee;
    border-radius: 0.0909rem;
    background: rgb(20, 111, 223);
    color: #eee;
  }
}
</style>