<template>
  <div>
    <h3>新建幻灯片</h3>
    <el-form :model='model' label-width="120px">
      <el-form-item label="幻灯片地址">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="幻灯片地址">
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="model.dialogImageUrl" alt="">
      </el-dialog>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      model: {},
      dialogVisible: false
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
}
</script>

<style>

</style>