<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
       <el-table-column
        prop="_id"
        label="ID"
        width="380">
      </el-table-column>
      <el-table-column
        prop="username"
        label="名称"
        width="380">
      </el-table-column>
      <el-table-column>
      <template slot-scope="scope">
        <el-button @click="$router.push(`/account/edit/${scope.row._id}`)" type="text" size="small">编辑</el-button>
        <el-button type="text" size="small" @click='deleteSlide(scope.row)'>删除</el-button>
      </template>
    </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: []
    }
  },
  methods: {
    async fetch() {
      const res = await this.$http.get('account')
      this.tableData = res.data
    },
    deleteSlide (data) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$http.delete(`account/${data._id}`)
        this.fetch()
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      })    
      
    }
  },
  created () {
    this.fetch()
  }
}
</script>

<style>

</style>