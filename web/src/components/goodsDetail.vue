<template>
  <div>
    <div class="topBar p-3 d-flex bg-white">
      <i class='font back' @click='$router.back(-1)'></i>
      <div class="flex-1 t-center">
        <span class="mx-3">商品</span>
        <span class="mx-3">详情</span>
        <span class="mx-3">评价</span>
      </div>
      <i class="cart" @click="$router.push('/cart')"></i>
    </div>
    <swiper-img v-if='detailData.url'>
      <swiper-slide v-for="(item,index) in detailData.url" :key="index">
        <img class="w-100" :src="item" alt="1"/>
      </swiper-slide>
    </swiper-img>
    <div class="py-2 px-2 bg-white">
      <h2>{{detailData.name}}</h2>
      <h3 class="text-primary mt-2 fs-md pl-2">¥ {{detailData.price}}</h3>
    </div>
    <div class="my-2 bg-white">
      <p class="p-2 border-t border-b d-flex">
        <span class="flex-1">请选择:</span>
        <span>&gt;</span>
      </p>
      <p class="p-2">
        <i class="iconfont icon-gou"></i>
        <span>7天无忧退换货</span>
        <i class="iconfont icon-gou"></i>
        <span>100%官方正品</span>
        <i class="iconfont icon-gou"></i>
        <span>满99包邮</span>
      </p>
    </div>
    <div class="bg-white mb-2">
      <div class="p-2 border-b">
        <span>用户评价</span>|
        <span>玩家综合评分：5</span>
      </div>
      <div class="p-2">
        <div class='d-flex'>
          <div class="avatar mr-2">
            <img width='100%' src="https://game.gtimg.cn/images/zb/comm/jcp.png" alt="">
          </div>
          <div>
            <p class='text-gray'>匿名</p>
            <p class='text-gray'>商品评分: 5</p>
            <p>实物非常棒</p>
          </div>
        </div>
        <div class='py-2'>
          <div class="text-primary commentsBtn t-center radius">查看全部评论</div>
        </div>
      </div>
    </div>
    <div style='font-size:0;'>
      <img width='100%' v-for='(item, index) in detailData.details' :src="item" :key='index' alt="">
    </div>
    <div class='option d-flex bg-white border-t ai-center t-center'>
      <div class="py-2 px-2 leftOption" @click='$router.push("/")'>
        <i class="iconfont icon-iconset0111"></i>
        <p>首页</p>
      </div>
      <div class="py-2 px-2 leftOption">
        <i class="iconfont icon-kefu"></i>
        <p>客服</p>
      </div>
      <div class="py-2 px-2 leftOption">
        <i class="iconfont icon-shoucang"></i>
        <p>收藏</p>
      </div>
      <div class="py-3 rightOption" 
      @click='handleCart'>
        <span>加入购物车</span>
      </div>
      <div class="py-3 rightOption bg-primary">
        <p>立即购买</p>
      </div>
    </div>
  </div>
</template>

<script>
import swiperImg from '../common/swiperImg'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      detailData: {}
    }
  },
  components: {
    swiperImg
  },
  props: {
    id: String
  },
  created () {
    this.fetch()
  },
  methods: {
    async fetch () {
      const res = await this.$http.get(`detail/${this.id}`)
      this.detailData = res.data
    },
    async handleCart () {
      this.addCart(this.detailData);
      await this.$http.post("addToCart",{user:localStorage.username,goods:this.detailData._id,num:1})
    },
    ...mapActions(['addCart'])
  }
}
</script>
<style lang='scss'>
.topBar{
  position:sticky;
  top:0;
  left:0;
  z-index: 10;
  opacity: .8;
}
.avatar{
  width: .7rem;
  height: .7rem;
}
.commentsBtn{
  width:2rem;
  margin: 0 auto;
  padding:0.1rem 0;
  border:1px solid red;
}
.back{
  display: block;
  background:url('../assets/images/spr-mall_20171218.png') no-repeat;
  background-position:68.434% 85.926%;
	background-size: 221px 216px;
  width:.3rem;
  height: .3rem;
}
.cart{
  display: block;
  background:url('../assets/images/spr-mall_20171218.png') no-repeat;
  background-position:16.583% 55.725%;
	background-size: 221px 216px;
  width: 0.4rem;
	height: 0.3455rem;
}
.option{
  position:fixed;
  left:0;
  bottom: 0;
  width: 100%;
}
.leftOption{
  width: 15%;
}
.rightOption{
  width: 27.5%;
  height: 100%;
  background: #e0973d;
  color:#eee;
}
</style>