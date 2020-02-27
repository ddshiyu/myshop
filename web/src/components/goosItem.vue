<template>
  <div class="d-flex flex-wrap jc-around">
    <div class="goodsItem mb-3" v-for="item in itemData"
    :key='item._id' @click="$router.push(`/detail/${item._id}`)">
      <img width='100%' :src="item.url[0]" alt="">
      <p>{{item.name}}</p>
      <p class="text-primary fs-md mt-1 ml-2">¥ {{item.price}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    itemData: Array
  }
}
</script>

<style lang='scss'>
.goodsItem{
  width: 3.31rem;
}
</style>
