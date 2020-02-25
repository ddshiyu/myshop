<template>
  <div>
    <goods-item :itemData='itemData'></goods-item>
  </div>
</template>

<script>
import goodsItem from './goosItem'
export default {
  data () {
    return {
      itemData: []
    }
  },
  props:{
    id: String
  },
  components: {
    goodsItem
  },
  created () {
    this.fetchItem()
  },
  methods: {
    async fetchItem () {
      const res = await this.$http.get('/item/'+this.id)
      this.itemData = res.data
    }
  }
}
</script>

<style>

</style>