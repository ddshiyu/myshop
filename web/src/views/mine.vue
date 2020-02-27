<template>
  <div>
    <router-link tag='div' to='/user' class="py-3 px-2 bg-white d-flex ai-center border-b mb-2">
      <img style='width:1rem;' src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4120407857,1624682534&fm=15&gp=0.jpg" alt="">
      <div class="flex-1 ml-2 fs-md">{{username}}</div>
      &gt;
    </router-link>
    <!-- <div class='bg-white'>
      <div class="border-b">
        <div class='d-flex px-2 py-2 order'>
          <p class="flex-1">我的订单</p>
          <p>查看全部订单 &gt;</p>
        </div>
      </div>
      <div class='d-flex jc-around t-center py-3'>
        <div>
          <div class="iconfont icon-daifukuan text-primary"></div>
          待付款
        </div>
        <div>
          <div class="iconfont icon-daifahuo text-primary"></div>
          待发货
        </div>
        <div>
          <div class="iconfont icon-daishouhuo text-primary"></div>
          待收货
        </div>
        <div>
          <div class="iconfont icon-daipingjia text-primary"></div>
          待评价
        </div>
      </div>
    </div> -->
    <div class="py-2 px-2 bg-white d-flex border-b mt-2" @click="$router.push('/cart')">
      <i class="iconfont icon-gouwuche mr-2"></i>
      <div class="flex-1">我的购物车 {{`(${cartNum})`}} </div>
      <span></span>
      &gt;
    </div>
    <!-- <div class="py-2 px-2 bg-white d-flex border-b">
      <i class="iconfont icon-gou mr-2"></i>
      <div class="flex-1">优惠券</div>
      &gt;
    </div> -->
    <div class="py-2 px-2 bg-white d-flex border-b">
      <i class="iconfont icon-shoucang mr-2"></i>
      <div class="flex-1">我的收藏</div>
      &gt;
    </div>
    <!-- <div class="py-2 px-2 bg-white d-flex border-b mb-2">
      <i class="iconfont icon-kefu mr-2"></i>
      <div class="flex-1">我的评价</div>
      &gt;
    </div> -->
    <div class="py-2 px-2 bg-white d-flex border-b mb-2">
      <i class="iconfont icon-gouwuche mr-2"></i>
      <div class="flex-1">收获地址</div>
      &gt;
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
    } 
  },
  computed: {
    username() {
      return localStorage.username
    },
    ...mapState(['cart']),
    cartNum() {
      let result = 0
      for(let key of this.cart){
        result += key.num
      }
      return result
    }
  },
  created () {
    this.fetchCart()
  },
  methods: {
    ...mapActions(['asyncFetchCart']),
    async fetchCart () {
      const res = await this.$http.post('getCart', {username: localStorage.username})     
      this.asyncFetchCart(res.data)
    },
  }
}
</script>

<style lang='scss'>

</style>