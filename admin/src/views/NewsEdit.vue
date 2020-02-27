<template>
  <div>
    <h3>新建幻灯片</h3>
    <el-form :model='model' label-width="120px">
      <el-form-item label="文章标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="文章内容">
        <vue-editor v-model="model.body"></vue-editor>
      </el-form-item>
      <el-form-item label="头像地址">
      <el-upload
        :action="$http.defaults.baseURL+'/upload'"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-success='handleSuccess'
        >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="model.dialogImageUrl" alt="">
      </el-dialog>
      </el-form-item>
      <el-form-item>
        <el-button type='primary' @click='createSlide'>立刻创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
export default {
  data () {
    return {
      model: {},
      dialogVisible: false,
      dialogImageUrl: null
    }
  },
  components: {
    VueEditor
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
      const res = await this.$http.get(`news/${this.id}`)
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
        const res = this.$http.post('news', this.model)     
      }else{
        const res = this.$http.put(`news/${this.id}`, this.model)
      }
       this.$router.push('/news/list')
    }
  }
}
</script>

<style>

</style>