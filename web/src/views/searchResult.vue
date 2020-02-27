<template>
  <div class="px-2 mt-2">
    <search-bar class="mb-2"></search-bar>
    <div class="mt-5" v-if='searchData.length === 0'>
      <p class="fs-md text-gray t-center">OH，没有找到你想要的宝贝哦</p>
    </div>
    <goods-item :itemData='searchData'></goods-item>
  </div>
</template>

<script>
import searchBar from '../components/searchBar'
import goodsItem from '../components/goosItem'
export default {
  components: {
    goodsItem,
    searchBar
  },
  computed: {
    searchData() {
      return JSON.parse(this.$route.query.data)
    }
  }

}
</script>

<style>

</style>