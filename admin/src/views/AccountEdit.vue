<template>
  <div>
    <h3>新建幻灯片</h3>
    <el-form :model='model' label-width="120px">
      <el-form-item label="账号名称">
        <el-input v-model="model.username"></el-input>
      </el-form-item>
      <el-form-item label="账号密码">
        <el-input v-model="model.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type='primary' @click='createSlide'>立刻创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      model: {},
    }
  },
  props: {
    id: {
      type: String
    }
  },
  created () {
    if (this.id) {
      this.editSlideFetch()
    }
  },
  methods: {
    async editSlideFetch () {
      const res = await this.$http.get(`account/${this.id}`)
      this.model = res.data
    },
    async createSlide () {
      if (!this.id){
        const res = this.$http.post('account', this.model)     
      }else{
        const res = this.$http.put(`account/${this.id}`, this.model)
      }
       this.$router.push('/account/list')
    }
  }
}
</script>

<style>

</style>