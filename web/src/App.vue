<template>
  <div id="app">
    <transition :name='transitionName'>
      <router-view/>
    </transition>
    <div class="bg-black text-gray bottomBar" v-if='$route.name !== "login"
    && $route.name !== "detail" && $route.name !== "newsDetail"'>
      <ul class='d-flex jc-around py-2'>
        <router-link tag='li' to='/' active-class='navBar'>
        <i class="iconfont icon-iconset0111"></i>
        <p>首页</p>
        </router-link>
        <router-link tag='li' to='/category' active-class='navBar'>
        <i class="iconfont icon-fenlei"></i>
        <p>分类</p></router-link>
        <router-link to='/cart' tag='li' active-class='navBar'>
        <i class="iconfont icon-gouwuche"></i>
        <p>购物</p></router-link>
        <router-link tag='li' to='/mine' active-class='navBar'>
        <i class="iconfont icon-wode"></i>
        <p>我的</p></router-link>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        transitionName: 'slide'
      }
    },
  }
</script>
<style lang="scss">
.navBar{
  color:#fff;
}
#app{
  padding-bottom: 1rem;
}
// .active{
//   color: #fff;
// }
.bottomBar{
  position: fixed;
  bottom: 0;
  left: 0;
  width:100%;
  ul{
    width:100%;
    text-align: center;
    li{
      width:25%;
    }
  }
}
.slide-enter-active,
.slide-leave-active{
  transition: opacity 300ms ease;
}
.slide-enter {
  opacity: 0;
}
.slide-leave-to {
  display: none;
  opacity: 0;
}
</style>
