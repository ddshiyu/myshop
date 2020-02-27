<template>
  <div class="bg-white w-100 py-2 radius px-1 d-flex">
    <i class="icon" @click='search'></i>
    <input class="inputBar ml-1 fs-md text-gray" @keypress.enter="search" v-model='keywords' type="text" placeholder="试试输入你想要的宝贝名称把～" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      keywords: ''
    } 
  },
  methods: {
    async search () {
      const res = await this.$http.post('/search', {keywords: this.keywords})
      this.$router.push({path:'/searchResult', query:{data: JSON.stringify(res.data)}})
    }
  }
};
</script>

<style>
.inputBar {
  border:none;
  width: 90%;
}
.icon{
  display: inline-block;
  width:.4rem;
  height:.4rem;
  background: url('../assets/images/search.png') no-repeat;
  background-size:.4rem .4rem;
}
</style>