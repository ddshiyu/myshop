<template>
  <div class="bg-white p-3" v-html='newDetailData.body'></div>
</template>

<script>
export default {
  computed: {
    newDetailData(){
      return JSON.parse(this.$route.query.data)
    }
  }
}
</script>

<style>
img{
  width: 100%;
}
</style>