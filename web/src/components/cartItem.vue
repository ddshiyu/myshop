<template>
  <div>
    <div v-for='(item,index) in mycart' :key='index' class="d-flex ai-center bg-white p-2 border-t">
      <div class="mr-2">
        <input type="checkbox" v-model='form' @change='caculateSum' :value='item._id'/>
      </div>
      <div class="d-flex flex-1" v-if='item.goods'>
        <div class="mr-2">
          <img
            width="80"
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
        <i class="iconfont icon-iconfontshanchu4 mb-3 inline-block"></i>
        <p class="border">
          <span class="inline-block p-1 bg-white1" @click="decreaceCartNum(item._id)">-</span>
          <span class="inline-block py-1 px-3 bg-white">{{item.num}}</span>
          <span class="inline-block p-1 bg-white1" @click='increace(item._id)'>+</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations,mapState } from 'vuex'
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
      ...mapMutations(['increaceCartNum','decreaceCartNum']),
      increace(id){
        this.increaceCartNum(id);
      },
      caculateSum(){
        this.sum = 0
        for(let key of this.form){
          for(let s of this.cart){
            if(key === s._id){
              this.sum += parseInt(s.goods.price) * parseInt(s.num)
            }
          }
        }
        this.$emit('sendSum', this.sum)
      }
  }
};
</script>

<style>
</style>