<template>
  <div class="p-3 bg-white">
    <div class="d-flex border-b py-2"
    v-for='item in newsData' :key='item._id'
    @click='$router.push({path:"/newsDetail", query:{data:JSON.stringify(item)}})'>
      <div class='flex-1'>
        <p class="fs-md mb-3">{{item.title}}</p>
        <p class="text-gray">
          <span class="mr-3">{{newsData[0].createdAt.slice(0,10)}}</span>
            <!-- <span>381</span>
            <span>8.5</span> -->
        </p>
      </div>
      <div class="imgBox">
        <img :src="item.url" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed:{
    newsData(){
      return JSON.parse(this.$route.query.data)
    }
  }
};
</script>

<style lang='scss'>
.imgBox{
  width:2rem;
  height:1.36rem;
  img{
    width:100%;
    height: 100%;
  }
}
</style>