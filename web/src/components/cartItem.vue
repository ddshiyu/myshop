<template>
  <div>
    <div v-for='(item,index) in mycart' :key='index' class="d-flex ai-center bg-white p-2 border-t">
      <div class="mr-2">
        <input type="checkbox" v-model='form' @change='caculateSum(form)' :value='item._id'/>
      </div>
      <div class="d-flex flex-1" v-if='item.goods'>
        <div class="mr-2">
          <img
            @click='$router.push(`/detail/${item.goods._id}`)'
            :src="item.goods.url[0]"
            alt
          />
        </div>
        <div>
          <p>{{item.goods.name}}</p>
          <p class="mt-1 mb-2 text-primary">¥ {{item.goods.price}}</p>
          <p class="text-gray">现货</p>
        </div>
      </div>
      <div class="t-right">
        <i class="iconfont icon-iconfontshanchu4 mb-3 inline-block" @click='mydelete(item._id)'></i>
        <p class="border">
          <span class="inline-block p-1 bg-white1" @click="decreace(item._id,form)">-</span>
          <span class="inline-block py-1 px-3 bg-white">{{item.num}}</span>
          <span class="inline-block p-1 bg-white1" @click='increace(item._id,form)'>+</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations,mapState,mapActions } from 'vuex'
export default {
  data () {
    return {
        form: [],
        sum: 0
      }
  },
  computed: {
    ...mapState(['cart'])
  },
  props: ['mycart'],
  methods: {
      ...mapMutations(['increaceCartNum','decreaceCartNum','caculateSum','deleteCart']),
      ...mapActions(['asyncIncreaceCartNum','asyncDecreaceCartNum']),
      increace(id,form){
        this.asyncIncreaceCartNum({id,form});
      },
      decreace(id,form){
        this.asyncDecreaceCartNum({id,form});
      },
      mydelete(id){
        this.$confirm('真的删除吗').then(() => {
          this.deleteCart(id)
          this.$http.delete('deleteCart/'+id)
        })       
      }
  }
};
</script>

<style scoped>
img{
  width: 1rem;
  height: 1rem;
}
</style>