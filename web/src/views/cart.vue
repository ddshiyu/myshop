<template>
  <div class="mb-5">
    <div class="topBar p-3 d-flex bg-white">
      <i class="iconfont icon-iconset0111" @click="$router.push('/')"></i>
      <div class="flex-1 t-center">
        <span>购物车</span>
      </div>
    </div>
    <!-- <confirm></confirm> -->
    <cart-item :mycart='cart' ref='cartItem'></cart-item>
    <div class='sumBar py-2 bg-white'>
      <ul class="d-flex jc-around ai-center">
        <li>  
          共计
          <p>{{goodsSum}}件</p>
        </li>
        <li>
          合计
          <p class="text-primary">¥ {{sum}}</p>
        </li>
        <li class="sumBtn text-primary" @click="caculateSum">
          结算
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import cartItem from '../components/cartItem'
import { mapState, mapActions} from 'vuex'
export default {
  data () {
    return {
    }
  },
  components: {
    cartItem
  },
  computed: {
    ...mapState(['cart','sum']),
    goodsSum() {
      let sum = 0
      for(let key of this.cart){
        sum += key.num
      }
      return sum
    }
  },
  created () {
    this.fetch()
  },
  methods: {
    ...mapActions(['asyncFetchCart']),
    async fetch () {
      const res = await this.$http.post('getCart', {username: localStorage.username})     
      this.asyncFetchCart(res.data)
    },
    caculateSum(){
      if(this.$refs.cartItem.form.length === 0){
        this.$alert('请选择你心仪的商品哦～')
      }else{
        this.$alert(`购买成功，您支付了${this.sum}元`)
      }  
    }
  }
};
</script>

<style>
.sumBar{
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 1rem;
  text-align: center;
}
</style>