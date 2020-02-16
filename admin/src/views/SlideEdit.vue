<template>
  <div>
    <h3>新建幻灯片</h3>
    <el-form :model='model' label-width="120px">
      <el-form-item label="幻灯片名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="幻灯片地址">
      <el-upload
        :action="$http.defaults.baseURL+'/upload'"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-success='handleSuccess'
        >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
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
      dialogVisible: false,
      dialogImageUrl: null
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
      const res = await this.$http.get(`slide/${this.id}`)
      this.model = res.data
    },
    handlePictureCardPreview(file) {
      console.log(file);    
      this.model.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleSuccess (file) {
      console.log(file);
      this.model.url = file.url
    },
    async createSlide () {
      if (!this.id){
        const res = this.$http.post('slideedit', this.model)     
      }else{
        const res = this.$http.put(`slideedit/${this.id}`, this.model)
      }
       this.$router.push('/slide/list')
    }
  }
}
</script>

<style>

</style>