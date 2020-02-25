<template>
  <div class="home">
    <div class="header">
      <div class="searchBar p-2 bg-primary">
        <search-bar></search-bar>
      </div>
      <div class="px-2 mb-5 swiperWrapper">
        <swiper-img v-if='swiperData.length'>
          <swiper-slide v-for="item in swiperData" :key="item._id">
            <img class="w-100" :src="item.url" :alt="item.name" />
          </swiper-slide>
        </swiper-img>
      </div>
    </div>
    <div class="py-3">
      <ul class="d-flex jc-around t-center fs-md text-black">
        <li>
          <div class="navBtn">
            <img width='100%' src="../assets/images/20191113231123_659475.png" alt="">
          </div>
          <div>手办模玩</div>
        </li>
        <li>
          <div class="navBtn">
            <img width='100%' src="../assets/images/20191113231221_958156.png" alt="">
          </div>
          <div>服饰专区</div>
        </li>
        <li>
          <div class="navBtn">
            <img width='100%' src="../assets/images/20191113231249_374280.png" alt="">
          </div>
          <div>毛绒玩偶</div>
        </li>
        <li>
          <div class="navBtn">
            <img width='100%' src="../assets/images/20191113231319_276252.png" alt="">
          </div>
          <div>生活用品</div>
        </li>
      </ul>
    </div>
    <div class="px-2">
      <img width='100%' src="https://game.gtimg.cn/images/daojushop/zb/ad/202002/20200220211457_996016.png" alt="">
    </div>
    <div class="mb-3 px-2">
      <home-header title='精选单品'></home-header>
      <div class="d-flex jc-around singleLeft">
        <div class="radius">
          <img class="radius1" width='100%;' src="https://game.gtimg.cn/images/daojushop/zb/ad/202002/20200219191320_617952.jpg" alt="">
        </div>
        <div class="radius ml-2 d-flex flex-colum">
          <img class="mb-2 radius1" width='100%;' src="https://game.gtimg.cn/images/daojushop/zb/ad/202002/20200219191332_260546.jpg" alt="">
          <img class="radius1" width='100%;' src="https://game.gtimg.cn/images/daojushop/zb/ad/202002/20200219191332_260546.jpg" alt="">
        </div>
      </div>
    </div>
    <div class="bg-white mb-4 px-2">
      <home-header title='营地热帖'></home-header>
      <div class="d-flex">
        <div>
          <p class="fs-md mb-3">2020年转运攻略！限定手办、永久皮肤免费送</p>
          <p class="text-gray">
            <span class="mr-3">2020.01.02</span>
            <span>381</span>
            <span>8.5</span>
          </p>
        </div>
        <div>
          <img src="https://shp.qpic.cn/cfwebcap/0/5adb10917af5136d4a4e929b7742af05/0/" alt="">
        </div>
      </div>
      <hr>
      123
    </div>
    <div class="bg-white px-2">
      <home-header title='更多推荐'></home-header>
      <goods-item :itemData='itemData'></goods-item>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import homeHeader from '../components/homeHeader'
import goodsItem from '../components/goosItem'
import searchBar from '../components/searchBar'
import swiperImg from '../common/swiperImg'
export default {
  name: "Home",
  data() {
    return {     
      swiperData: [],
      itemData: []
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  created () {
    this.fetchSlide()
    this.fetchItem()
  },
  methods: {
    async fetchSlide () {
      const res = await this.$http.get('/slide')
      this.swiperData = res.data
    },
    async fetchItem () {
      const res = await this.$http.get('/item/2')
      this.itemData = res.data
    }
  },
  components: {
    homeHeader,
    goodsItem,
    searchBar,
    swiperImg
  }
};
</script>

<style lang="scss">
@import "../assets/sass/variables.scss";
.swiperWrapper {
  background: map-get($colors, primary);
  height: 2rem;
}
.navBtn {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
}
</style>
