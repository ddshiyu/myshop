<template>
  <div>
    <div class="topBar p-3 d-flex bg-white">
      <i class="font back" @click="$router.push('/')"></i>
      <div class="flex-1 t-center">
        <span>购物车</span>
      </div>
    </div>
    <cart-item :mycart='cart' @sendSum='getSum'></cart-item>
    <div class='sumBar py-2 bg-white'>
      <ul class="d-flex jc-around ai-center">
        <li>
          <input type="checkbox">
          <p>全选</p>
        </li>
        <li>  
          共计
          <p>0件</p>
        </li>
        <li>
          合计
          <p class="text-primary">¥ {{sum}}</p>
        </li>
        <li class="sumBtn text-primary">
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
      sum: 0.00
    }
  },
  components: {
    cartItem
  },
  computed: {
    ...mapState(['cart']),
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
    getSum(sum){
      this.sum = sum
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