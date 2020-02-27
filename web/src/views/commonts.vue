<template>
  <div class='mt-3'>
    <div class="p-2 bg-white border-b" v-for='(item, index) in commonts' :key='index'>
      <div class="d-flex">
        <div class="avatar mr-2">
          <img width="100%" src="https://game.gtimg.cn/images/zb/comm/jcp.png" alt />
        </div>
        <div>
          <p class="text-gray">匿名</p>
          <p class="text-gray">商品评分: 5</p>
          {{item.commont}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    commonts(){
      return this.$route.query.commonts
    }
  }
};
</script>

<style>
</style>