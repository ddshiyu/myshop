<template>
  <div>
    <h3>新建商品</h3>
    <el-form :model='model' label-width="120px">
      <el-form-item label="商品名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="商品价格">
        <el-input v-model="model.price"></el-input>
      </el-form-item>
      <el-form-item label="商品幻灯片">
      <el-upload
        :action="$http.defaults.baseURL+'/upload'"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-success='handleSuccess'
        >
        <i class="el-icon-plus"></i>
      </el-upload>
      <span v-for='(pic,i) in editUrl' :key='i' style='display:inline-block;'>
        <img v-if='id' :src="pic" alt="" width='150'>
        <div>
          <el-button size='mini' type='danger' @click='deletePic(i)'>删除图片</el-button>
        </div>
      </span>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
      </el-form-item>
      <el-form-item label="商品分类">
        <el-input v-model="model.category"></el-input>
      </el-form-item>
      <el-form-item label="商品详情">
        <el-input v-model="model.details"></el-input>
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
      model: {
        url: []
      },
      editUrl:null,
      dialogVisible: false,
      dialogImageUrl: null
    }
  },
  props: {
    id: {
      type: String
    }
  },
  computed: {
    
  },
  created () {
    if (this.id) {
      this.editSlideFetch()
      
    }
  },
  methods: {
    async editSlideFetch () {
      const res = await this.$http.get(`item/${this.id}`)
      this.model = res.data
      this.editUrlfn()
    },
    handlePictureCardPreview(file) {
      console.log(file);    
      this.model.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleSuccess (file) {
      console.log(file);
      this.model.url.push(file.url)
    },
    async createSlide () {
      if (!this.id){
        const res = this.$http.post('itemedit', this.model)
      }else{
        const res = this.$http.put(`itemedit/${this.id}`, this.model)      
      }
       this.$router.push('/item/list')
    },
    editUrlfn () {
      this.editUrl = this.model.url.slice(0)
    },
    deletePic (i) {
      this.model.url.splice(i, 1)
    }
  }
}
</script>

<style>

</style>