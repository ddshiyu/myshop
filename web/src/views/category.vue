<template>
  <div class="bg-white">
    <div class="searchBar p-2 bg-gray">
      <search-bar></search-bar>
    </div>
    <div class="wrapper bg-white t-center fs-s" ref='wrapper'>
      <ul ref='content' class="content d-flex">
        <router-link tag='li' to='/category/1' active-class='active'>全部</router-link>
        <router-link tag='li' to='/category/2'>手办模玩</router-link>
        <router-link tag='li' to='/category/3'>数码3C</router-link>
        <router-link tag='li' to='/category/4'>服饰</router-link>
        <router-link tag='li' to='/category/5'>毛绒玩具</router-link>
        <router-link tag='li' to='/category/6'>生活用品</router-link>
        <router-link tag='li' to='/category/7'>智能机器人</router-link>
        <router-link tag='li' to='/category/8'>金银首饰</router-link>
        <router-link tag='li' to='/category/9'>数据线</router-link>
        <router-link tag='li' to='/category/10'>食品</router-link>
      </ul>
    </div>
    <div class="bg-white border-t border-b">
      <ul class="d-flex jc-around py-2">
        <li>默认</li>
        <li>最热销</li>
        <li>新上架</li>
        <li>价格</li>
      </ul>
    </div> 
    <div class="py-2">
      <router-view :key='$route.path'></router-view>
    </div>
  </div>
</template>

<script>
import searchBar from '../components/searchBar'
import BScroll from 'better-scroll'
export default {
  components:{
    searchBar,
  },
  data () {
    return {
    }
  },
  created () {
  },
  mounted () {
    this.$nextTick(() => {
      this._initPics()
    })
  },
  methods: {
    _initPics () {
    // 先判断是否有这个属性
      // 这里之所以要设置宽度，是因为.wrapper和.list的宽度一样大
      // 当.list的宽度大于.wrapper的宽度，才能横向滚动
      let itemWidth = 110 // 这里是设置列表每一项的宽度
      let margin = 6
      // width是整个列表的宽度
      let width = (itemWidth + margin) * 6 - margin
      console.log(width)
      this.$refs.content.style.width = width + 'px' // 设置.list的宽度的宽度
      this.$nextTick(() => {
        if (!this.picScroll) {
          this.picScroll = new BScroll(this.$refs.wrapper, {
            scrollX: true,
            eventPassthrough: 'vertical' // 忽略竖直方向的滚动
          })
        } else {
          this.picScroll.refresh()
        }
      })
    },
  }
};
</script>

<style lang='scss'>
.wrapper{
  width:100%;
  overflow: hidden;
  white-space: nowrap;
  .content{
    li{
      padding: .3rem 0rem;
      margin:0 .2rem;
    }
  }
}
.active{
  color: red;
}
</style>