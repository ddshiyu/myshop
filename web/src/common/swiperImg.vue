<template>
  <div>
    <swiper
      class="mySwiper radius1"
      :options="swiperOption"
      ref="mySwiper"
    >
    <slot></slot>
      <!-- <swiper-slide v-for="item in swiperData" :key="item._id">
        <img class="w-100" :src="item.url" :alt="item.name" />
      </swiper-slide> -->
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperOption: {
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: {
          disableOnInteraction: false
        }
      },
    }
  },
  props: {
    swiperData: Array
  }
};
</script>

<style lang='scss'>
.swiper-pagination-bullet {
  background: gray;
  &.swiper-pagination-bullet-active {
    background: #fff;
  }
}
</style>